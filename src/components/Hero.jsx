import { useEffect, useState } from 'react';
import { heroTags, profile, roles, stats } from '../data.js';
import { Arrow, Download, Eye, GitHub, LinkedIn, Mail } from './Icons.jsx';
import { viewResumeProps } from './ResumeViewer.jsx';

// Isolated so the per-letter updates re-render only this span.
function Typewriter() {
  const [text, setText] = useState(roles[0]);
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let i = 0, j = roles[0].length, del = true, t;
    const step = () => {
      const w = roles[i];
      j += del ? -1 : 1;
      setText(w.slice(0, j));
      let wait = del ? 32 : 70;
      if (!del && j === w.length) { del = true; wait = 2000; }
      else if (del && j === 0) { del = false; i = (i + 1) % roles.length; wait = 300; }
      t = setTimeout(step, wait);
    };
    t = setTimeout(step, 2400);
    return () => clearTimeout(t);
  }, []);
  return <span className="t">{text}</span>;
}

export default function Hero({ onViewResume }) {
  const { photo } = profile;
  return (
    <section className="hero" id="home">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="status rise" style={{ '--d': '.05s' }}><span className="pulse" />Open to Software Testing &amp; QA opportunities</div>
            <h1 className="rise" style={{ '--d': '.1s' }}><span className="hi">Hello, I'm</span>K S <span className="grad-text">Meghana</span></h1>
            <p className="roles rise" style={{ '--d': '.16s' }} aria-live="polite"><Typewriter /><span className="caret" aria-hidden="true" /></p>
            <p className="hero-lead rise" style={{ '--d': '.22s' }}>
              <b>B.Tech Computer Science and Engineering</b> student at {profile.college} <b>({profile.period})</b>, building a strong
              foundation in <b>manual testing</b>, test case preparation, defect reporting, <b>SQL</b> and <b>Java</b>.
            </p>
            <div className="hero-cta rise" style={{ '--d': '.28s' }}>
              <a {...viewResumeProps(onViewResume)} className="btn btn-primary mag-btn">View Resume <Eye /></a>
              <a href={profile.resume} className="btn btn-ghost mag-btn" download>Download Resume <Download /></a>
              <a href="#projects" className="btn btn-ghost mag-btn">View Projects <Arrow /></a>
            </div>
            <div className="socials rise" style={{ '--d': '.34s' }}>
              <span className="lbl">Connect</span>
              <a className="soc" href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn profile of K S Meghana"><LinkedIn /></a>
              <a className="soc" href={profile.github} target="_blank" rel="noopener" aria-label="GitHub profile of K S Meghana"><GitHub /></a>
              <a className="soc" href={`mailto:${profile.email}`} aria-label="Email K S Meghana"><Mail /></a>
            </div>
          </div>

          <div className="photo-col rise" style={{ '--d': '.12s' }}>
            <figure className="portrait">
              <span className="portrait-glow" aria-hidden="true" />
              <div className="portrait-frame">
                <div className="mono" aria-hidden="true"><b>KSM</b></div>
                <picture>
                  <source srcSet={photo.webp} type="image/webp" />
                  <img src={photo.jpg} alt="Portrait of K S Meghana" width={photo.w} height={photo.h} fetchPriority="high" decoding="async" />
                </picture>
              </div>
            </figure>
            <ul className="photo-tags" aria-label="Core skills">
              {heroTags.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
        </div>

        <div className="stats">
          {stats.map((s, i) => (
            <div className="stat reveal" style={{ '--d': `${0.05 + i * 0.07}s` }} key={s.label}>
              <b><span className="count" data-to={s.value}>{s.value}</span>{s.small ? <small>{s.suffix}</small> : s.suffix}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
