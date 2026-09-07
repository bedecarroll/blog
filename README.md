# Bede Carroll's blog

A Hugo site at [bedecarroll.com](https://bedecarroll.com).

Use the Hugo version pinned in `mise.toml` to build:

```sh
mise run build
```

Pushes to `master` automatically build and deploy to Cloudflare Workers, which
serves the generated `public/` directory at [bedecarroll.com](https://bedecarroll.com).
Deploy manually with
`bunx wrangler@4.129.0 deploy`. The site retains its `/feed.xml` feed and custom
404 page. Custom domains are configured separately.
