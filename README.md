# Daniel Boadu portfolio

Astro static site. Black, white and red (#B32025) with Inter, matching the original MT Performance styling.

## Run it

```
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # static output in dist/
```

Deploys to Vercel with no configuration (framework preset: Astro).

## Add a case study

1. Copy `src/content/work/stf26-cold-outbound.md` to a new file, e.g. `src/content/work/email-qa-automation.md`.
2. Edit the frontmatter (title, order, stats, results) and the body text.
3. Put any images in `public/work/<project>/` and reference them as `/work/<project>/image.png`.
4. `sends`, `proof` and `next` are optional, so leave them out for projects that aren't email sequences.

The homepage list and the case study page are generated from these files automatically.

## Edit site details

Name, role, intro, LinkedIn link, skills and experience live in `src/data/site.ts`.
