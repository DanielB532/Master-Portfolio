import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One Markdown file per case study in src/content/work/.
// Frontmatter holds the structured bits (stats, sends, results); the body holds the story.
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),                       // position in the "Selected work" list (1 = top)
    client: z.string(),
    period: z.string(),                      // e.g. "Aug–Sep 2026"
    tags: z.array(z.string()),
    skillsShown: z.array(z.string()),          // shown to recruiters at the top of the case study
    summary: z.string(),                     // one line for the work list and social previews
    headlineStat: z.object({ value: z.string(), label: z.string() }),
    facts: z.array(z.object({ label: z.string(), value: z.string() })),
    sends: z
      .array(
        z.object({
          job: z.string(),
          label: z.string(),
          subject: z.string(),
          sent: z.string(),
          excerpt: z.array(z.string()),
          cta: z.string(),
          stats: z.array(z.object({ value: z.string(), label: z.string() })),
        }),
      )
      .optional(),
    timelineEnd: z.string().optional(),
    // Funnel or programme stages, for campaigns that aren't a fixed email sequence
    phases: z
      .array(z.object({ job: z.string(), label: z.string(), points: z.array(z.string()) }))
      .optional(),
    phasesCaption: z.string().optional(),
    phasesTitle: z.string().optional(),      // defaults to "The funnel" 
    // Extra evidence images shown under the results
    gallery: z
      .array(z.object({ image: z.string(), alt: z.string(), caption: z.string(), full: z.string().optional() }))
      .optional(),
    // When set, the gallery gets its own section (for work samples) instead of sitting under the results
    galleryTitle: z.string().optional(),
    galleryCaption: z.string().optional(),
    galleryCols: z.number().optional(),      // columns for the samples grid on desktop (default 4)      // e.g. "Event 28 Sep"
    results: z
      .object({
        caption: z.string(),
        items: z.array(z.object({ value: z.string(), label: z.string() })),
      })
      .optional(),
    proof: z
      .object({
        image: z.string(),
        alt: z.string(),
        caption: z.string(),
        text: z.string(),
      })
      .optional(),
    next: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work };
