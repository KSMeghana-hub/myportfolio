// Page-wide motion that works on the pre-rendered DOM directly, so it costs
// no React re-renders: scroll reveals, count-ups, progress bar, journey line,
// back-to-top, and desktop-only pointer effects.
export function initEffects() {
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const off = [];
  const on = (el, ev, fn, opt) => { el.addEventListener(ev, fn, opt); off.push(() => el.removeEventListener(ev, fn, opt)); };

  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
  $$('.reveal').forEach((el) => io.observe(el));

  const cio = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    cio.unobserve(e.target);
    if (reduce) return;
    const el = e.target, to = +el.dataset.to, t0 = performance.now(), dur = to > 100 ? 1500 : 900;
    const tick = (t) => {
      const p = Math.min((t - t0) / dur, 1);
      el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    };
    el.textContent = '0';
    requestAnimationFrame(tick);
  }), { threshold: 0.6 });
  $$('.count').forEach((el) => cio.observe(el));

  const bar = $('.progress'), topBtn = $('.top-btn'), jr = $('#jr'), fill = $('.jr-line i'), steps = $$('.step'), contact = $('#contact');
  let ticking = false;
  const onScroll = () => {
    ticking = false;
    const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
    // hidden once the contact cards are on screen so it never covers their links
    topBtn.classList.toggle('show', y > innerHeight * 0.8 && contact.getBoundingClientRect().top > innerHeight * 0.75);
    const r = jr.getBoundingClientRect(), mark = innerHeight * 0.6;
    fill.style.setProperty('--p', Math.min(Math.max((mark - r.top) / r.height, 0), 1));
    steps.forEach((s) => s.classList.toggle('done', s.getBoundingClientRect().top + 30 < mark));
  };
  on(window, 'scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  if (fine && !reduce) {
    $$('.spot').forEach((c) => on(c, 'pointermove', (e) => {
      const r = c.getBoundingClientRect();
      c.style.setProperty('--mx', `${e.clientX - r.left}px`);
      c.style.setProperty('--my', `${e.clientY - r.top}px`);
    }));
    $$('.tilt').forEach((c) => {
      on(c, 'pointermove', (e) => {
        const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        c.style.transform = `perspective(900px) rotateX(${-y * 5}deg) rotateY(${x * 6}deg) translateY(-4px)`;
      });
      on(c, 'pointerleave', () => { c.style.transform = ''; });
    });
    $$('.mag-btn').forEach((b) => {
      on(b, 'pointermove', (e) => {
        const r = b.getBoundingClientRect();
        b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px, ${(e.clientY - r.top - r.height / 2) * 0.28}px)`;
      });
      on(b, 'pointerleave', () => { b.style.transform = ''; });
    });
  }

  return () => { io.disconnect(); cio.disconnect(); off.forEach((f) => f()); };
}
