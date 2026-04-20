# Ferran Brichs Site

Personal site for Ferran Brichs, built as a minimalist terminal-style homepage with agent-readable structured content behind the visible interface.

## Current positioning

- Visible homepage headline: `Zero-to-One Market Builder`
- Visible homepage message: building the commercial foundation for AI and deep-tech companies entering new markets
- Hidden semantic content: detailed recruiter-ready and agent-readable profile data

## What is in the site

### Visible experience

- Single-page terminal-style homepage
- Typing animation for the command line and body copy
- Click-to-copy email interaction
- Lightweight CRT-inspired visual treatment

### Hidden recruiter and agent content

The page includes hidden semantic sections that stay out of the main visual experience but are available in the HTML for crawlers, agents, and debug viewing.

Sections included:

- About Ferran Brichs
- Services
- Industry Focus Areas
- Zero-to-One GTM Framework
- Contact and Presence
- Key Metrics and Outcomes
- Languages and Cultural Fluency
- Investment and Advisory Portfolio
- Technical Foundation and Credentials
- Market Entry Track Record
- Core Competencies
- Professional Experience Summary

## Debug mode

Press `Ctrl+Shift+D` to toggle debug mode.

When enabled:

- Hidden semantic sections become visible
- The page becomes scrollable
- The view jumps to the first hidden section
- A small `[DEBUG MODE]` indicator appears on screen

## Agent-ready features

The site is set up to be discoverable and readable by crawlers and AI agents.

### Crawl and indexing

- `robots.txt`
- `sitemap.xml`
- canonical URL
- Open Graph and Twitter metadata
- JSON-LD structured profile data

### Agent discovery

- `/.well-known/api-catalog`
- `/.well-known/mcp/server-card.json`
- `/.well-known/agent-skills/index.json`
- `/.well-known/agent-skills/profile/SKILL.md`

### Markdown for Agents

Cloudflare Worker support is included through `_worker.js`.

Requests to `/` with `Accept: text/markdown` return a markdown version of the profile instead of HTML.

## Project structure

```text
.
├── .well-known/
├── _headers
├── _worker.js
├── index.html
├── robots.txt
├── sitemap.xml
├── z_archive/
└── README.md
```

## File guide

- `index.html`: main site and hidden semantic content
- `_headers`: Cloudflare Pages response headers
- `_worker.js`: markdown content negotiation for agents
- `robots.txt`: crawler and AI bot rules
- `sitemap.xml`: sitemap for the site
- `.well-known/api-catalog`: API and service discovery metadata
- `.well-known/mcp/server-card.json`: MCP discovery metadata
- `.well-known/agent-skills/index.json`: skills discovery index
- `.well-known/agent-skills/profile/SKILL.md`: profile skill definition
- `z_archive/`: local archive for older versions

## Deployment

This site is deployed on Cloudflare Pages from GitHub.

### Important Cloudflare files

- `_headers` sets content types and discovery headers
- `_worker.js` enables markdown negotiation for agents

### After updating content

```bash
git add .
git commit -m "your message"
git push
```

Cloudflare Pages will redeploy automatically.

## Validation

Useful checks:

```bash
curl https://brichs.xyz/robots.txt
curl https://brichs.xyz/sitemap.xml
curl https://brichs.xyz/.well-known/api-catalog
curl https://brichs.xyz/.well-known/mcp/server-card.json
curl https://brichs.xyz/.well-known/agent-skills/index.json
curl -H "Accept: text/markdown" https://brichs.xyz/
```

Quick local checklist:

```bash
bash scripts/validate-checklist.sh
```

Optional remote endpoint checks:

```bash
RUN_REMOTE_CHECKS=1 SITE_URL=https://brichs.xyz bash scripts/validate-checklist.sh
```

Also useful:

- `https://isitagentready.com`
- `https://validator.schema.org`
- Google Rich Results Test

## Notes

- The hidden sections are not private. They are only visually hidden.
- The site intentionally stays simple on the surface.
- `robots.txt` currently declares AI content usage preferences as allowed.

## Status

- Platform: Cloudflare Pages
- Style: static site with worker augmentation
- Current agent-readiness score achieved during setup: `75 / Level 5`
