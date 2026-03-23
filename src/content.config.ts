import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    meta_title: z.string(),
    meta_description: z.string(),
    author: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    tags: z.array(z.string()),
    cta: z.string(),
    lang: z.string().default('fr'),
    reading_time: z.string(),
    internal_links: z
      .array(
        z.object({
          slug: z.string(),
          anchor: z.string(),
        })
      )
      .optional(),
  }),
});

export const collections = { blog };
