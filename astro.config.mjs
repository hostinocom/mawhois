// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.mawhois.com',
  output: 'static',
  integrations: [
    sitemap({
      // Exclude dynamic routes and error pages
      filter: (page) => {
        // Exclude 404 page
        if (page.includes('/404')) return false;
        // Exclude API routes
        if (page.includes('/api/')) return false;
        // Exclude dynamic domain routes (they're generated dynamically)
        if (page.match(/\/domain\/[^/]+$/) || page.match(/\/fr\/domaine\/[^/]+$/)) return false;
        return true;
      },
      serialize(item) {
        const url = new URL(item.url);
        const path = url.pathname;
        
        // Normalize path (remove trailing slash for comparison)
        const normalizedPath = path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
        
        // High priority pages (main pages)
        const highPriorityPages = [
          '/',
          '/fr/',
          '/ma-domain-name/',
          '/fr/nom-domaine-maroc/',
          '/whmcs-ma-anrt/',
          '/fr/whmcs-ma-anrt/',
          '/reserved-terms/',
          '/fr/termes-reserves/',
          '/about-us/',
          '/fr/a-propos/',
        ];
        
        // Low priority pages (legal, contact)
        const lowPriorityPages = [
          '/contact/',
          '/fr/contact/',
          '/legal-notice/',
          '/fr/mentions-legales/',
          '/terms/',
          '/fr/conditions-generales/',
        ];
        
        // Set priority based on page type
        if (highPriorityPages.includes(normalizedPath)) {
          item.priority = 1.0;
        } else if (lowPriorityPages.includes(normalizedPath)) {
          item.priority = 0.5;
        } else {
          // Default priority for other pages
          item.priority = 0.8;
        }
        
        // Set changefreq based on page type
        if (normalizedPath === '/' || normalizedPath === '/fr/') {
          // @ts-expect-error - Valid changefreq value
          item.changefreq = 'daily';
        } else if (highPriorityPages.includes(normalizedPath)) {
          // @ts-expect-error - Valid changefreq value
          item.changefreq = 'weekly';
        } else {
          // @ts-expect-error - Valid changefreq value
          item.changefreq = 'monthly';
        }
        
        return item;
      },
    }),
    robotsTxt({
      policy: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/api/', '/domain/', '/fr/domaine/'],
        },
      ],
      sitemap: 'https://www.mawhois.com/sitemap-index.xml',
    })
  ],

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