// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [],

  vite: {
    plugins: [tailwindcss()],
    ssr: {
      // This ensures Vite does not try to bundle the module, 
      // allowing the Cloudflare runtime (with nodejs_compat) to handle it.
      external: ['net', 'node:net']
   }
  },

  adapter: cloudflare()
});