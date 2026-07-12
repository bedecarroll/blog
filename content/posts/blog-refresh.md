+++
title = "Refreshing My Old Blog with AI: Aided by Aider"
date = "2025-05-07T19:47:44-07:00"
+++

For years, my blog sat dormant, a relic of a different era of the internet. The
content was still relevant to me, a snapshot of my thoughts and experiences in
the tech world from over a decade ago. However, the format was outdated, a mix
of inconsistent markdown, old HTML elements, and front matter that didn't quite
fit modern static site generators like Hugo, which I've since adopted.

Manually going through dozens of posts, fixing front matter, converting HTML
links and entities, and ensuring consistent markdown syntax felt like a daunting
and tedious task. I needed a way to automate this, and that's where AI came in.
I decided to try `aider`, a command-line tool that uses AI models to help with
coding and editing tasks.

My goal was simple: take the existing `.md` files, which were in a somewhat
inconsistent markdown format with YAML front matter and some embedded HTML, and
convert them into clean, Hugo-compatible markdown with TOML front matter.

I decided to use the model `gemini/gemini-2.5-flash-preview-04-17` based on the
[Aider LLM Leaderboards](https://aider.chat/docs/leaderboards/). This seemed
like a reasonable model for the price and task.

Here's how the process went with `aider`:

First, I started `aider` in the directory containing my old blog posts.
I started adding the old blog post files to the chat,
typically in batches. The batching was to ensure the models didn't get
confused with a long window. The starting command was:

```bash
aider --read conv.txt 2013-12-*
```

With the `aider` shell started I gave `aider` the instruction: "please convert to
hugo compatible markdown".

The `--read conv.txt` was used to provide read only instructions to the model.
This is where I placed the example of what the front matter should look like.
As I was going through the process I was updating this file with new things
for the model to fix.

{{< gist bedecarroll 9679513269536102760cd2881568920d >}}

`aider` understood the task perfectly. It analyzed the files and proposed
changes based on the conventions it inferred (and which I had reinforced by
providing the chat history as context in subsequent runs). For each file, it
explained the planned modifications:

* **Front Matter:** Convert from YAML (`---`) to TOML (`+++`), change the
`permalink` key to `url`, add a `date` key derived from the filename, and ensure
categories were in the correct TOML array format.
* **Content:** Convert list markers (`*` to `-`), replace HTML links (`<a
href="...">`) with markdown links (`[...]`), remove extraneous `&nbsp;` lines
used for spacing, convert HTML entities (like `&#8217;` to `'`), and wrap long
lines for readability. It even correctly identified and handled Hugo shortcodes
I had used, like `{{ gist }}` and `{{ kbd }}`.

`aider` then outputted the full content of the modified files, one by one, in
the required format. I could review the changes and confirm them. This iterative
process of adding files, giving the instruction, and reviewing the output worked
smoothly for converting all the old posts.

Using `aider` for this blog refresh saved me a significant amount of time and
effort. Instead of painstakingly editing each file manually, I could leverage
the AI to understand the structure and apply the necessary transformations
consistently across all posts. It turned a potentially tedious chore into
a relatively quick and efficient process.

My old blog posts are now in a clean, consistent, and modern markdown format,
ready to be served by Hugo. The experience highlighted the power of AI tools
like `aider` for automating repetitive coding and content tasks, freeing up time
for more interesting work (like writing new blog posts!).

If this post reads a little "funny" that is because it was mostly written by
the same model! I think you can kind of tell by the "sat dormant" and "a relic"
comments. Not that it is bad, it just seemed... off? The great thing about
`aider` is that it stores the history of what I send and what was changed. This
allowed me to send the logs and an example of my writing to get back a blog
post. This is the command I ran:

```bash
aider --read 2015-01-28-install-windows-10-tech-preview-on-vhdx.md \
 --read ~/aider_example_run/chat_history.md \
 --read ~/aider_example_run/input_history.md blog-refresh.md
```

I wouldn't have written what the model wrote but it did a great job of analyzing
what happened and giving me a head start.

I can even use `llm` to review this post:

```bash
llm prompt -a blog-refresh.md 'please review the following blog post' > review.txt
```

And I get this review:

{{< gist bedecarroll b78e58ad331914afae0266f7a52dc910 >}}

All in all this is not bad and makes these very tedious tasks much easier.
