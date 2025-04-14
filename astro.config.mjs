import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight'; // 关键：导入了 starlight

// https://astro.build/config
export default defineConfig({
  integrations: [ // 关键：在 integrations 数组中使用了 starlight
    starlight({
      title: 'My Docs', // 这里可以配置网站标题等
      // ... 其他 Starlight 配置
    }),
  ],
});