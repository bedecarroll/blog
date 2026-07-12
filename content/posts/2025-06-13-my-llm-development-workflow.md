+++
title = "My LLM development workflow"
date = "2025-06-13T09:00:00-07:00"
+++

Over the past year I've been refining how I build small tools and websites with the help of large language models. Below is a quick overview of the workflow that has worked well for me.

1. **Create a GitHub repository** – everything starts with a fresh repo so I can track progress and iterate quickly.
2. **Clone locally** – once the repo exists I pull it down to my development machine.
3. **Kick off the OpenAI Codex CLI** – for single-use tools I'll start the Codex CLI right away. For larger projects, I write a high level `README` and include any example code so Codex has context. If the project needs an initialization step, I run that first so the LLM sees some starter code.
4. **Iterate on the code base** – I bounce between different tools and models depending on what I'm building. This lets me validate the output or add focused features without getting stuck in one workflow.
5. **Push to GitHub** – once the code reaches a decent state I push the changes. From there I use OpenAI Codex on the web to keep iterating. It's great not having to be glued to my dev environment; I can request fixes and new features from anywhere.

Recently I've been experimenting with voice commands to drive the whole workflow hands-free. The approach is still new to me, but it has been fun seeing how natural language prompts translate directly to code changes. You can see some examples in these repositories:

- [Extract](https://github.com/bedecarroll/extract) – parses network tokens out of text.
- [Macfmt](https://github.com/bedecarroll/macfmt) – formats MAC addresses.
- [Task Time Estimator](https://github.com/bedecarroll/tasktimeestimator) – a small static site.

Cloudflare Workers has become my favorite host for web-based projects—the preview URLs make it easy to see what the LLM changed. Languages with strict linting, like Rust, also work really well because the verbose errors help the LLM fix code issues.

This post was largely drafted with the help of an LLM, and I'm continuously amazed at how it speeds up my workflow.
