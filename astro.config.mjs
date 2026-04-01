import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://eddiemiller.agency',
  compressHTML: true,
  prefetch: true,
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'es', 'de', 'it', 'pt', 'nl'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: {
          fr: 'fr',
          en: 'en',
          es: 'es',
          de: 'de',
          it: 'it',
          pt: 'pt',
          nl: 'nl',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
