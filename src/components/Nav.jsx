import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { nav, profile } from '../data.js';
import { Download, Eye } from './Icons.jsx';
import { viewResumeProps } from './ResumeViewer.jsx';
import LogoMark from './Logo.jsx';

const useIsoLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

export default function Nav({ onViewResume }) {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);
  const [ind, setInd] = useState({ x: 0, w: 0 });
  const navRef = useRef(null);
  const links = useRef({});

  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach((s) => io.observe(s));
    const close = (e) => { if (!navRef.current?.contains(e.target)) setOpen(false); };
    document.addEventListener('click', close);
    return () => { io.disconnect(); document.removeEventListener('click', close); };
  }, []);

  // Slide the highlight pill under the active link; re-measure once the web font swaps in.
  useIsoLayoutEffect(() => {
    const measure = () => {
      const a = links.current[active];
      if (a?.offsetWidth) setInd({ x: a.offsetLeft, w: a.offsetWidth });
    };
    measure();
    addEventListener('resize', measure);
    document.fonts?.ready.then(measure);
    return () => removeEventListener('resize', measure);
  }, [active]);

  return (
    <header className={`nav${open ? ' open' : ''}`} ref={navRef}>
      <a href="#home" className="brand" aria-label={`${profile.name}, back to top`}>
        <LogoMark className="brand-mark" /><span className="brand-name">{profile.name}</span>
      </a>
      <nav className="nav-links" id="navLinks" aria-label="Sections">
        <span className="nav-ind" aria-hidden="true" style={{ width: ind.w, transform: `translateX(${ind.x}px)` }} />
        {nav.map(([id, label]) => (
          <a key={id} href={`#${id}`} ref={(el) => { links.current[id] = el; }}
            className={active === id ? 'active' : undefined} aria-current={active === id ? 'true' : undefined}
            onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a {...viewResumeProps(() => { setOpen(false); onViewResume(); })} className="m-resume">View Resume <Eye /></a>
        <a href={profile.resume} className="m-resume" download>Download Resume <Download /></a>
      </nav>
      <a {...viewResumeProps(onViewResume)} className="btn btn-coral btn-sm">View Resume <Eye /></a>
      <button className="menu-btn" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="navLinks"
        onClick={() => setOpen((o) => !o)}><span /></button>
    </header>
  );
}
