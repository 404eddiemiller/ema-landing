// Scroll-triggered animations via IntersectionObserver
// Respects prefers-reduced-motion

const animClasses = ['.fade-up', '.fade-up-slow', '.scale-in', '.slide-in-left', '.slide-in-right', '.blur-in', '.fade-in', '.draw-line', '.separator-animate'];

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReduced) {
  document.querySelectorAll(animClasses.join(',')).forEach(el => {
    el.classList.add('visible');
  });
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(animClasses.join(',')).forEach((el) => {
    observer.observe(el);
  });
}
