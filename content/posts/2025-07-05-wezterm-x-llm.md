---
title: "Talking to AI from your terminal: WezTerm ✕ llm"
date: 2025-07-05
tags: ["wezterm", "llm", "OpenAI", "terminal", "lua", "productivity"]
categories: ["Dev Environment"]
draft: false
---

> **TL;DR**  
> Install `llm`, drop three small files into your dot‑files, and you get
> {{< kbd CTRL >}}+{{< kbd ALT >}}+{{< kbd l >}} to send the visible screen,
> {{< kbd CTRL >}}+{{< kbd ALT >}}+{{< kbd L >}} to select *N* lines of
> scroll‑back, {{< kbd CTRL >}}+{{< kbd ALT >}}+{{< kbd N >}} to start a fresh
> chat.
> Replies appear in a right‑hand split running `less`, and each pane keeps its
> own independent conversation.

---

## Why?

I spend a lot of time staring at logs and stack‑traces wondering *“what on
earth?”*  Instead of copy‑pasting chunks into the browser I wanted a single
shortcut that

1. **Grabs what I’m looking at** (screen or scroll‑back),
2. **Lets me type a question**, and
3. **Shows the answer right next to the terminal**.

WezTerm is scriptable with Lua and Simon Willison’s
[`llm`](https://github.com/simonw/llm) CLI has a clean `stdin → stdout`
interface, so a tiny bit of glue gives us an IDE‑like
“explain‑this‑output” workflow—without leaving the command‑line.

---

## How it works (in 30 seconds)

* A key‑binding triggers a custom **Lua event**.
* The event handler captures text with `pane:get_lines_as_text()`,
  prompts for your question, then launches a helper script
  `~/.local/bin/llm-from-wez`.
* The **helper** pipes *context + question* into `llm`.  
  It stores the returned `conversation_id` under
  `~/.cache/wezterm-llm/<pane‑id>` so every pane keeps its own chat
  thread.
* Lua opens a 45 % right‑hand split running `less -R` to display the
  reply.

Close the split when you’re done—your shell pane (and its conversation)
stays intact.

---

## Prerequisites

```bash
brew install --HEAD wez/wezterm/wezterm        # or pkg, deb, scoop…
brew install jq                                # helper needs jq
uv tool install -U llm --with llm-anthropic --with llm-gemini
llm auth openai                                # or: llm auth anthropic
```

> **Heads‑up**: If you keep `OPENAI_API_KEY` in `~/.bashrc`, GUI apps
> (including WezTerm) won’t see it.  
> Either save the key with `llm auth …` (recommended) **or** source your
> shell RC inside the helper script (shown below).

---

## File 1 – `~/.local/bin/llm-from-wez`

```bash
#!/usr/bin/env bash
set -euo pipefail

[[ -f $HOME/.bashrc ]] && source "$HOME/.bashrc"   # optional: pull in API keys

new=0
if [[ ${1:-} == --new ]]; then new=1; shift; fi

pane="$1"; tmpfile="$2"; shift 2
question="$*"
context=$(<"$tmpfile")

cache_dir="${XDG_CACHE_HOME:-$HOME/.cache}/wezterm-llm"
cid_file="$cache_dir/$pane"
mkdir -p "$cache_dir"
[[ $new -eq 1 ]] && rm -f "$cid_file"

if [[ -f $cid_file ]]; then
  cid=$(<"$cid_file")
  reply=$(printf '%s
' "$context"           | llm --cid "$cid" --no-stream "$question")
else
  reply=$(printf '%s
' "$context"           | llm --no-stream "$question")
  cid=$(llm logs --limit 1 --json | jq -r '.[0].conversation_id')
  echo "$cid" > "$cid_file"
fi

printf '%s' "$reply"
```

Make it executable:

```bash
chmod +x ~/.local/bin/llm-from-wez
```

---

## File 2 – `~/.config/wezterm/wez_llm.lua`

```lua
local wezterm = require 'wezterm'

local function call_helper(pane_id, text, question, new)
  local tmp = os.tmpname()
  local f   = io.open(tmp, 'w'); f:write(text); f:close()

  local args = { os.getenv('HOME') .. '/.local/bin/llm-from-wez' }
  if new then table.insert(args, '--new') end
  table.insert(args, tostring(pane_id))
  table.insert(args, tmp)
  table.insert(args, question)

  return wezterm.run_child_process(args)  -- { ok, stdout, stderr }
end

local M = {}

function M.ask(win, pane, n_lines, new)
  local buf = n_lines and pane:get_lines_as_text(n_lines)
                    or pane:get_lines_as_text()

  win:perform_action(
    wezterm.action.PromptInputLine{
      description = 'Ask LLM:',
      action = wezterm.action_callback(function(w, p, q)
        if not q or #q == 0 then return end
        local ok, out, err = call_helper(p:pane_id(), buf, q, new)
        if not ok then
          w:toast_notification('LLM error', err, nil, 6000); return
        end

        local tmp_out = os.tmpname()
        local fo = io.open(tmp_out, 'w'); fo:write(out); fo:close()

        w:perform_action(
          wezterm.action.SplitPane{
            direction = 'Right',
            size      = { Percent = 45 },
            command   = { args = { 'bash', '-lc', 'less -R ' .. tmp_out } },
          },
          p
        )
      end)
    },
    pane
  )
end

function M.reset(pane_id)
  wezterm.run_child_process{
    os.getenv('HOME') .. '/.local/bin/llm-from-wez',
    '--new', tostring(pane_id), os.tmpname(), ''
  }
end

return M
```

---

## File 3 – `~/.config/wezterm/wezterm.lua`

```lua
local wezterm = require 'wezterm'
local act     = wezterm.action
local llm     = require 'wez_llm'

local config = {}

config.keys = {
  { key = 'l', mods = 'CTRL|ALT', action = act.EmitEvent 'LLM_VIEWPORT' },
  { key = 'L', mods = 'CTRL|ALT', action = act.EmitEvent 'LLM_SCROLLBACK' },
  { key = 'N', mods = 'CTRL|ALT', action = act.EmitEvent 'LLM_RESET' },
}

wezterm.on('LLM_VIEWPORT', function(win, pane)
  llm.ask(win, pane, nil, false)
end)

wezterm.on('LLM_SCROLLBACK', function(win, pane)
  win:perform_action(
    act.PromptInputLine{
      description = 'Lines of scroll-back to send:',
      action = wezterm.action_callback(function(w, p, line)
        local n = tonumber(line or '') or 0
        if n > 0 then llm.ask(w, p, n, false) end
      end)
    }, pane)
end)

wezterm.on('LLM_RESET', function(win, pane)
  llm.reset(pane:pane_id())
  win:toast_notification('LLM', 'New conversation started', nil, 3000)
end)

return config
```

WezTerm supports hot reloading for the config but you can just restart to
make sure if you want. You can get to the command pallet via {{< kbd CTRL >}}+
{{< kbd SHIFT >}}+{{< kbd p >}} and from there select the debug overlay to
investigate issues.

---

## Usage

| Shortcut | Action |
|----------|--------|
| {{< kbd CTRL >}}+{{< kbd ALT >}}+{{< kbd l >}} | Capture the **visible screen**, ask a question, show the reply. |
| {{< kbd CTRL >}}+{{< kbd ALT >}}+{{< kbd L >}} | Ask how many **scroll‑back** lines to capture before questioning. |
| {{< kbd CTRL >}}+{{< kbd ALT >}}+{{< kbd N >}} | Start a **fresh conversation** for the current pane. |

Because each pane has a unique `pane_id`, chats stay independent—perfect
for juggling multiple sessions.

---

## Troubleshooting

| Symptom | Fix |
|---------|----|
| *“API key not set”* toast | Save the key with `llm auth …` **or** source your RC inside the helper as shown. |
| `Directory "~" is not readable` warning | Ensure the helper path is the **first** element in the `args` table. |
| `attempt to call a nil value (method 'perform_action')` | Update to WezTerm ≥ 20220319 or use the exact Lua code above. |

---

## Ideas for v2

* Stream answers live with `llm --stream`.  
* Swap `less` for `bat -l markdown` to get syntax highlighting.  
* Make pane location/size variable.

---

## Wrap‑up

With ~150 lines of Lua + Bash we turn WezTerm into a conversational
debugging side‑kick. I’ve already used it to fix lint errors in the
lua code for this feature. Being able to run arbitrary output to an
llm is a big copy paste time saver.

This post was majority written by OpenAI o3 based on the conversation
I had with it generating all this code. The bigger story than this
feature is how easy it was for me to provide the WezTerm repo URL and
the LLM repo URL and explained what I wanted. From there it was only
a few more prompts to get this fully working!
