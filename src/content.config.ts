import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: 'src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.union([z.date(), z.string()]).transform((v) => (v instanceof Date ? v : new Date(v))),
	}),
});

export const collections = { blog };
