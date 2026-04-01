import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    meta_title: z.string(),
    meta_description: z.string(),
    author: z.string().default('Eddie Miller Agency'),
    date: z.coerce.date(),
    category: z.string(),
    tags: z.array(z.string()),
    cta: z.string().default('diagnostic-gratuit'),
    lang: z.enum(['fr', 'en', 'es', 'de', 'it', 'pt', 'nl']),
    reading_time: z.string(),
    image: z.string().optional(),
    imageAlt: z.string(),
    internal_links: z
      .array(
        z.object({
          slug: z.string(),
          anchor: z.string(),
        })
      )
      .default([]),
    series: z.string().optional(),
    series_number: z.number().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
};
