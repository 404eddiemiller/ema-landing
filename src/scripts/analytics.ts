// Centralized Plausible analytics — delegates CTA tracking via data-track attribute
// Usage: <a data-track="hero"> or <button data-track="header-menu">
// Automatically enriches events with page path and locale from the URL

declare const plausible: ((event: string, options?: { props?: Record<string, string> }) => void) | undefined;

const path = window.location.pathname;
const localeMatch = path.match(/^\/(en|es|de|it|nl|pt)\//);
const locale = localeMatch ? localeMatch[1] : 'fr';
const page = path.replace(/^\/(en|es|de|it|nl|pt)\//, '/').replace(/\/$/, '') || '/';

document.addEventListener('click', (e) => {
  const el = (e.target as HTMLElement).closest<HTMLElement>('[data-track]');
  if (!el) return;
  const location = el.dataset.track;
  if (location && typeof plausible === 'function') {
    plausible('CTA Click', { props: { location, page, locale } });
  }
});
