// Sticky CTA bar — shows after scrolling past hero, hides when form is visible

const stickyCta = document.getElementById('sticky-cta');
if (stickyCta) {
  const auditSection = document.getElementById('diagnostic');
  let pastHero = false;
  let auditVisible = false;

  function updateStickyCta() {
    if (pastHero && !auditVisible) {
      stickyCta.style.transform = 'translateY(0)';
    } else {
      stickyCta.style.transform = 'translateY(100%)';
    }
  }

  // Show after scrolling past the hero section
  const heroSection = document.querySelector('main > section:first-child');
  if (heroSection) {
    const heroObserver = new IntersectionObserver((entries) => {
      pastHero = !entries[0].isIntersecting;
      updateStickyCta();
    }, { rootMargin: '-100px 0px 0px 0px' });
    heroObserver.observe(heroSection);
  }

  // Hide when the audit form is visible
  if (auditSection) {
    const auditObserver = new IntersectionObserver((entries) => {
      auditVisible = entries[0].isIntersecting;
      updateStickyCta();
    });
    auditObserver.observe(auditSection);
  }
}
