// Centralized Plausible analytics — delegates CTA tracking via data-track attribute
// Usage: <a data-track="hero"> or <button data-track="header-menu">

declare const plausible: ((event: string, options?: { props?: Record<string, string> }) => void) | undefined;

document.addEventListener('click', (e) => {
  const el = (e.target as HTMLElement).closest<HTMLElement>('[data-track]');
  if (!el) return;
  const location = el.dataset.track;
  if (location && typeof plausible === 'function') {
    plausible('CTA Click', { props: { location } });
  }
});
