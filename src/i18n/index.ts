// i18n helper — loads JSON translation files and provides t() function

import fr from './fr.json';
import en from './en.json';
import es from './es.json';
import de from './de.json';
import it from './it.json';
import pt from './pt.json';
import nl from './nl.json';

export const locales = ['fr', 'en', 'es', 'de', 'it', 'pt', 'nl'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';

export const localeNames: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
  it: 'Italiano',
  pt: 'Português',
  nl: 'Nederlands',
};

// ISO locale codes for og:locale
export const localeISO: Record<Locale, string> = {
  fr: 'fr_FR',
  en: 'en_US',
  es: 'es_ES',
  de: 'de_DE',
  it: 'it_IT',
  pt: 'pt_PT',
  nl: 'nl_NL',
};

const translations: Record<Locale, Record<string, any>> = {
  fr, en, es, de, it, pt, nl,
};

/**
 * Get a translation by dot-separated key path.
 * Falls back to French if key not found in target locale.
 */
export function t(key: string, locale: Locale = defaultLocale): string {
  const value = getNestedValue(translations[locale], key);
  if (value !== undefined) return String(value);

  // Fallback to default locale
  if (locale !== defaultLocale) {
    const fallback = getNestedValue(translations[defaultLocale], key);
    if (fallback !== undefined) return String(fallback);
  }

  // Return key as last resort (helps debug missing translations)
  return key;
}

function getNestedValue(obj: Record<string, any>, path: string): any {
  return path.split('.').reduce((current, part) => {
    return current && typeof current === 'object' ? current[part] : undefined;
  }, obj as any);
}

/**
 * Detect locale from Astro URL pathname.
 * /en/foo → 'en', /es/foo → 'es', /foo → 'fr' (default)
 */
export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  const first = segments[0] as Locale;
  if (locales.includes(first) && first !== defaultLocale) {
    return first;
  }
  return defaultLocale;
}

/**
 * Build a localized path. French paths have no prefix.
 * localePath('/dentistes', 'en') → '/en/dentistes'
 * localePath('/dentistes', 'fr') → '/dentistes'
 */
export function localePath(path: string, locale: Locale): string {
  if (locale === defaultLocale) return path;
  return `/${locale}${path}`;
}

/**
 * Page slug mapping — maps a "page key" to the localized slug for each locale.
 * Used for hreflang alternate links and cross-locale navigation.
 */
export const pageRoutes: Record<string, Record<Locale, string>> = {
  home:        { fr: '/',               en: '/en/',              es: '/es/',              de: '/de/',              it: '/it/',              pt: '/pt/',              nl: '/nl/' },
  about:       { fr: '/a-propos',       en: '/en/about',         es: '/es/sobre-nosotros', de: '/de/ueber-uns',    it: '/it/chi-siamo',     pt: '/pt/sobre-nos',     nl: '/nl/over-ons' },
  pricing:     { fr: '/formules',       en: '/en/pricing',       es: '/es/planes',        de: '/de/preise',        it: '/it/piani',         pt: '/pt/planos',        nl: '/nl/pakketten' },
  blog:        { fr: '/blog',           en: '/en/blog',          es: '/es/blog',          de: '/de/blog',          it: '/it/blog',          pt: '/pt/blog',          nl: '/nl/blog' },
  dentists:    { fr: '/dentistes',      en: '/en/dentists',      es: '/es/dentistas',     de: '/de/zahnaerzte',    it: '/it/dentisti',      pt: '/pt/dentistas',     nl: '/nl/tandartsen' },
  restaurants: { fr: '/restaurants',     en: '/en/restaurants',   es: '/es/restaurantes',  de: '/de/restaurants',   it: '/it/ristoranti',    pt: '/pt/restaurantes',  nl: '/nl/restaurants' },
  hotels:      { fr: '/hotels',         en: '/en/hotels',        es: '/es/hoteles',       de: '/de/hotels',        it: '/it/hotel',         pt: '/pt/hoteis',        nl: '/nl/hotels' },
  lawyers:     { fr: '/avocats',        en: '/en/lawyers',       es: '/es/abogados',      de: '/de/anwaelte',      it: '/it/avvocati',      pt: '/pt/advogados',     nl: '/nl/advocaten' },
  hair:        { fr: '/coiffure',       en: '/en/hair-salons',   es: '/es/peluquerias',   de: '/de/friseursalons', it: '/it/parrucchieri',  pt: '/pt/cabeleireiros', nl: '/nl/kapsalons' },
  spa:         { fr: '/spa',            en: '/en/spa',           es: '/es/spa',           de: '/de/spa',           it: '/it/spa',           pt: '/pt/spa',           nl: '/nl/spa' },
  gyms:        { fr: '/sport',          en: '/en/gyms',          es: '/es/gimnasios',     de: '/de/fitnessstudios', it: '/it/palestre',     pt: '/pt/ginasios',      nl: '/nl/sportscholen' },
  bars:        { fr: '/bars',           en: '/en/bars',          es: '/es/bares',         de: '/de/bars',          it: '/it/bar',           pt: '/pt/bares',         nl: '/nl/bars' },
};

/**
 * Find the page key for a given pathname, then return all locale alternates.
 * Returns undefined if the page has no known alternates.
 */
export function getAlternateUrls(pathname: string): Record<Locale, string> | undefined {
  // Normalize: remove trailing slash except for root paths
  const normalized = pathname === '/' ? '/' : pathname.replace(/\/$/, '');

  for (const [, routes] of Object.entries(pageRoutes)) {
    for (const [, path] of Object.entries(routes)) {
      const normalizedRoute = path === '/' ? '/' : path.replace(/\/$/, '');
      if (normalizedRoute === normalized) {
        return routes;
      }
    }
  }
  return undefined;
}

/**
 * Navigation routes per locale — used by Header, Footer, sticky CTA.
 */
export const navRoutes: Record<Locale, {
  home: string;
  about: string;
  pricing: string;
  blog: string;
  faq: string;
  audit: string;
  legal: string;
  terms: string;
  thankYou: string;
}> = {
  fr: { home: '/', about: '/a-propos', pricing: '/formules', blog: '/blog', faq: '/#faq', audit: '/#diagnostic', legal: '/mentions-legales', terms: '/cgv', thankYou: '/merci' },
  en: { home: '/en/', about: '/en/about', pricing: '/en/pricing', blog: '/en/blog', faq: '/en/#faq', audit: '/en/#diagnostic', legal: '/en/legal-notice', terms: '/en/terms', thankYou: '/en/thank-you' },
  es: { home: '/es/', about: '/es/sobre-nosotros', pricing: '/es/planes', blog: '/es/blog', faq: '/es/#faq', audit: '/es/#diagnostic', legal: '/en/legal-notice', terms: '/en/terms', thankYou: '/es/gracias' },
  de: { home: '/de/', about: '/de/ueber-uns', pricing: '/de/preise', blog: '/de/blog', faq: '/de/#faq', audit: '/de/#diagnostic', legal: '/en/legal-notice', terms: '/en/terms', thankYou: '/de/danke' },
  it: { home: '/it/', about: '/it/chi-siamo', pricing: '/it/piani', blog: '/it/blog', faq: '/it/#faq', audit: '/it/#diagnostic', legal: '/en/legal-notice', terms: '/en/terms', thankYou: '/it/grazie' },
  pt: { home: '/pt/', about: '/pt/sobre-nos', pricing: '/pt/planos', blog: '/pt/blog', faq: '/pt/#faq', audit: '/pt/#diagnostic', legal: '/en/legal-notice', terms: '/en/terms', thankYou: '/pt/obrigado' },
  nl: { home: '/nl/', about: '/nl/over-ons', pricing: '/nl/pakketten', blog: '/nl/blog', faq: '/nl/#faq', audit: '/nl/#diagnostic', legal: '/en/legal-notice', terms: '/en/terms', thankYou: '/nl/bedankt' },
};
