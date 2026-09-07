# Bede Carroll's blog

A Hugo site at [bedecarroll.com](https://bedecarroll.com).

Use the Hugo version pinned in `mise.toml` to build:

```sh
mise run build
```

Cloudflare Workers serves the generated `public/` directory. Deploy with
`bunx wrangler@4.129.0 deploy`. The site retains its `/feed.xml` feed and custom
404 page. Custom domains are configured separately.
