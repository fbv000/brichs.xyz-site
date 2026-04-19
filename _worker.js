export default {
  async fetch(request, env) {
    const accept = request.headers.get('Accept') || '';
    const url = new URL(request.url);

    // Markdown for Agents: serve markdown when Accept: text/markdown is requested for homepage
    if (accept.includes('text/markdown') && (url.pathname === '/' || url.pathname === '/index.html')) {
      const markdown = `# Ferran Brichs

**Advisor to Founders and Teams** | Driving Growth, Expansion, and Strategic Investment

- **Email:** hello@brichs.xyz
- **LinkedIn:** https://linkedin.com/in/ferranbrichs
- **Location:** San Francisco
- **Languages:** Portuguese, Spanish, English, Catalan (all native/bilingual)

---

## Summary

Enterprise GTM leader with 25+ years building commercial operations for AI, SaaS, and deep tech companies in markets where no playbook exists. Opened offices, closed lighthouse deals, and handed off operating businesses across enterprise SaaS, autonomous systems, broadcast AI, and mobile infrastructure — at companies including ItsOn, Rdio, Location Labs, and Openwave. Closed $32M+ in landmark deals with Movistar Mexico and Digicel Group, scaling deployments to millions of users. Currently advising and investing in AI and autonomous systems companies.

---

## Services

- Go-to-Market Strategy Development and Execution
- International Market Entry and Expansion Planning (LATAM specialist)
- Revenue Model Optimization and Scaling
- Founder and Leadership Team Advisory
- Strategic Partnership Development
- Investor Relations and Deal Facilitation
- Market Positioning and Competitive Strategy
- Team Structure Design and Scaling

---

## Industry Focus

- **AI & Machine Learning** — Product-market fit, GTM, investor positioning
- **Media & Content** — Growth strategy, monetization, international expansion
- **Drones & Autonomous Systems** — Market entry, regulatory navigation, scaling
- **Tech-Enabled Services** — Operational scaling, team structure, GTM

---

## Key Achievements

- Closed $15M Movistar Mexico deal; scaled to 2M customers in 6 months
- Closed $17M 30-country Digicel Group deal
- Launched music streaming across 20 countries for Rdio
- Opened 4 separate offices in Sao Paulo across different companies
- Established lighthouse accounts with Telefonica, America Movil, Vivo, Oi, Digicel
- 120% quota attainment for 3 consecutive years

---

## Investment Portfolio

Angel investor and strategic advisor since 2011 (15+ companies). Notable exits:
- **Archer Aviation** (NYSE: ACHR) — eVTOL aerospace, public via SPAC
- **Makara** — Crypto investment platform, acquired by Betterment
- **Wuaki TV** — Video streaming platform, acquired by Rakuten

---

## Current Engagements

- **ORKID** (2022–Present) — Country Manager Brazil & Global Sales; autonomous aviation ISR systems
- **Mantis AI** (2024–Present) — Advisor, Global Strategy & Expansion; AI video intelligence platform

---

## Technical Foundation

7 years at Oracle (database architecture, system performance, enterprise deployments). Current technical expertise: computer vision, autonomous systems, LiDAR, photogrammetry, GNSS, SATCOM, SaaS/PaaS platforms.

**Certifications:** Oracle Certified Expert (Database SQL), Google Data Analytics, Private Pilot & Instrument Rating, Miller-Heiman (Value-Based Selling, New Conceptual Selling), Karrass Effective Negotiating.

---

## Contact

- **Email:** hello@brichs.xyz
- **LinkedIn:** https://linkedin.com/in/ferranbrichs
`;

      return new Response(markdown, {
        headers: {
          'Content-Type': 'text/markdown; charset=utf-8',
          'Vary': 'Accept',
          'Cache-Control': 'public, max-age=3600',
        },
      });
    }

    // Pass all other requests through to static assets
    return env.ASSETS.fetch(request);
  },
};
