# Ferran Brichs Site

Personal site for Ferran Brichs, built as a minimalist terminal-style homepage with agent-readable structured content behind the visible interface.

## Current positioning

- Visible homepage headline: `Zero-to-One Market Builder`
- Visible homepage message: building the commercial foundation for AI and deep-tech companies entering new markets
- Hidden semantic content: detailed recruiter-ready and agent-readable profile data

## Changes in v2

**Content & Messaging:**
- ✅ Repositioned from generic "Advisor to Founders and Teams" to specific "Zero-to-One Market Builder"
- ✅ Messaging now emphasizes commercial foundation building for AI/deep-tech market entry
- ✅ Restored closing line: "Let's build something meaningful together"
- ✅ Typing animation speed optimized (2ms per character for crisp interaction)

**SEO & Discovery:**
- ✅ Added comprehensive robots.txt with AI crawler rules (GPTBot, Claude-Web, OAI-SearchBot, Google-Extended)
- ✅ Implemented Content Signals in robots.txt for AI training preferences
- ✅ Created sitemap.xml for search engine discovery
- ✅ Enhanced meta tags: Open Graph, Twitter Card, keywords, description

**Agent-Ready Infrastructure:**
- ✅ RFC 9309 compliance: AI crawler rules and content signals
- ✅ RFC 9727 compliance: API catalog at /.well-known/api-catalog
- ✅ MCP integration: /.well-known/mcp/server-card.json for agent frameworks
- ✅ Agent skills discovery: /.well-known/agent-skills/ with SHA256-digested skills
- ✅ Cloudflare Worker (_worker.js): Markdown-for-agents content negotiation
- ✅ Response headers (_headers): Content-Type and Link headers for discovery

**Structured Data:**
- ✅ JSON-LD Organization schema with comprehensive business information
- ✅ Embedded credentials: 25+ years experience, $32M+ deal value, technical expertise
- ✅ Achievement data: portfolio companies, market entry track record
- ✅ Schema-valid structured data for search engines and AI systems

**Deployment & Performance:**
- ✅ Deployed to Cloudflare Pages with GitHub auto-deployment
- ✅ Agent-readiness improved from 4/12 to 75/Level 5
- ✅ Validation: isitagentready.com confirms high agent discoverability

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
