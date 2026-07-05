# Echochip Chirpy Hugo Theme

## Requirements

- Hugo `0.158.0` or newer.
- Use `locale` in the site config for newer Hugo versions.

```toml
baseURL = "https://example.com/"
title = "Your Blog"
theme = "echochip-chirpy-hugo"
locale = "ko-KR"
enableRobotsTXT = true

[taxonomies]
category = "categories"
tag = "tags"

[params]
description = "Site description"
author = "Author Name"
tagline = "Short site tagline"
favicon = "/favicon.ico"
image = "/images/site-cover.jpg"

[params.social]
github = "https://github.com/yourname"
twitter = "https://x.com/yourname"
email = "you@example.com"
```

## Required Content Pages

Create these files in the site using the theme if you want the sidebar
`archives` and `about` links to resolve.

`content/archives/_index.md`

```markdown
---
title: "Archives"
layout: "archives"
---
```

`content/about/_index.md`

```markdown
---
title: "About"
---

Write your profile or site information here.
```

## Notes

- Social icons are rendered only when their values are configured.
- Post pages emit Open Graph, Twitter Card, and BlogPosting JSON-LD metadata.
- The theme uses an inline theme bootstrap script to avoid a light flash before dark mode is applied.
