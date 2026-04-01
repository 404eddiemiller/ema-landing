// Shared counter animation — animates [data-count-to] elements on scroll intersection

export function animateCounter(el: HTMLElement) {
  const target = parseFloat(el.dataset.countTo || '0');
  const suffix = el.dataset.suffix || '';
  const decSep = el.dataset.decSep || '.';
  const hasDecimal = target % 1 !== 0;
  el.textContent = '0' + suffix;
  const duration = 1500;
  const start = performance.now();

  function update(now: number) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = eased * target;
    el.textContent = (hasDecimal ? current.toFixed(1).replace('.', decSep) : Math.round(current).toString()) + suffix;
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  requestAnimationFrame(update);
}

export function initCounterObserver() {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target as HTMLElement);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll<HTMLElement>('[data-count-to]').forEach(el => {
    counterObserver.observe(el);
  });
}
