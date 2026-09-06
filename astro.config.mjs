import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import archivedClaims from './src/data/archived-claims.json' with { type: 'json' };

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
      filter: (page) =>
        !archivedClaims.some(path => new URL(page).pathname.replace(/\/$/, '') === path) && !page.match(
          /\/(merci|merci-paiement|thank-you|gracias|danke|grazie|obrigado|bedankt|404)(\/|\.|$)/,
        ),
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
