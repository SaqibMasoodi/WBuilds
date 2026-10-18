import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const builds = defineCollection({
  loader: glob({ pattern: '**/*.{md,json}', base: 'src/content/builds' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      category: z.enum(['houses', 'castles', 'farms', 'portals', 'decorations']),
      difficulty: z.enum(['easy', 'medium', 'hard']),
      stepsCount: z.number(),
      coverImage: image().optional(),
      isFeatured: z.boolean().default(false),
      order: z.number().default(0),
    }),
});

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.{md,json}', base: 'src/content/reviews' }),
  schema: z.object({
    author: z.string(),
    rating: z.number().min(1).max(5),
    headline: z.string(),
    content: z.string(),
    platform: z.enum(['App Store', 'Google Play', 'Discord', 'Reddit']),
    date: z.string().optional(),
    isFeatured: z.boolean().default(false),
  }),
});

const faqs = defineCollection({
  loader: glob({ pattern: '**/*.{md,json}', base: 'src/content/faqs' }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    category: z.enum(['app', 'compatibility', 'pricing', 'support']),
    order: z.number().default(0),
  }),
});

const legal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/legal' }),
  schema: z.object({
    title: z.string(),
    lastUpdated: z.string(),
  }),
});

export const collections = {
  builds,
  reviews,
  faqs,
  legal,
};
