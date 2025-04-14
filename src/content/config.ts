import { defineCollection, z } from 'astro:content';

const docs = defineCollection({
  // 定义集合的 schema，这里是最基础的，只包含 title 和可选的 description
  // Starlight 会自动使用这里的 title 和 description
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    // 你可以根据需要添加更多字段，比如作者、日期等
    // Starlight 特有的 frontmatter 字段，比如 template, hero 等不需要在这里定义
  }),
});

// 导出集合，必须命名为 'collections'
export const collections = { docs }; 