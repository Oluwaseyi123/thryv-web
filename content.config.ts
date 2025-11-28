import { defineCollection, z } from '@nuxt/content'

const createEnum = (options: [string, ...string[]]) => z.enum(options)

export const collections = {
  content: defineCollection({
    source: '**/*.md',
    type: 'page',
    schema: z.object({
      category: z.string().nonempty(),
      title: z.string().nonempty(),
      excerpt: z.string().nonempty(),
      image: z.string().optional().editor({ input: 'media' }),
      categoryColor: z.string().optional().editor({ input: 'color' }),
      date: z.string().nonempty(),
      readTime: z.string().nonempty(),
      related: z.array(
        z.object({
          id: z.string().nonempty(),
          title: z.string().nonempty(),
          category: z.string().nonempty(),
          image: z.string().optional().editor({ input: 'media' }),
          date: z.string().nonempty(),
          readTime: z.string().nonempty(),
          categoryColor: z.string().optional().editor({ input: 'color' })
        })
      ),
      author: z
        .object({
          name: z.string().nonempty(),
          title: z.string().nonempty(),
          bio: z.string().nonempty(),
          avatar: z
            .object({
              src: z.string().editor({ input: 'media' }),
              alt: z.string().optional()
            })
            .optional(),
          target: createEnum(['_blank', '_self'])
        })
        .optional()
    })
  })
}
