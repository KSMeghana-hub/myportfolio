import { useCallback, useEffect, useRef, useState } from 'react';
import { certificates } from '../data.js';
import { SectionHead } from './Sections.jsx';
import { Close, Expand } from './Icons.jsx';

const src = (id, w) => `certs/${id}-${w}.webp`;
// Real moulding texture sampled from each photographed frame, shaded per face for depth.
const tex = (id, o, shade) => `linear-gradient(${shade}), url(certs/${id}-frame-${o}.webp)`;

function Frame({ c, side, onOpen }) {
  const h = tex(c.id, 'h', 'rgba(255,236,200,.10),rgba(255,236,200,.10)');
  const v = tex(c.id, 'v', 'rgba(255,236,200,.04),rgba(255,236,200,.04)');
  return (
    <div className={`stand ${side}`}>
      <button type="button" className="frame3d" onClick={() => onOpen(c)} aria-label={`View certificate: ${c.title}, ${c.course}`}>
        <span className="f-obj">
          <span className="f-face">
            <span className="m m-t" style={{ backgroundImage: h }} />
            <span className="m m-b" style={{ backgroundImage: tex(c.id, 'h', 'rgba(60,30,10,.28),rgba(60,30,10,.28)') }} />
            <span className="m m-l" style={{ backgroundImage: v }} />
            <span className="m m-r" style={{ backgroundImage: tex(c.id, 'v', 'rgba(60,30,10,.22),rgba(60,30,10,.22)') }} />
            <span className="f-liner">
              <img src={src(c.id, 600)} srcSet={`${src(c.id, 600)} 600w, ${src(c.id, 1200)} 1200w`}
                sizes="(max-width: 640px) 42vw, 300px" alt="" width="600" height="849" loading="lazy" decoding="async" />
              <span className="glass" />
            </span>
          </span>
          <span className="f-edge e-l" style={{ backgroundImage: tex(c.id, 'v', 'rgba(50,26,10,.45),rgba(50,26,10,.45)') }} />
          <span className="f-edge e-r" style={{ backgroundImage: tex(c.id, 'v', 'rgba(50,26,10,.45),rgba(50,26,10,.45)') }} />
          <span className="f-edge e-t" style={{ backgroundImage: tex(c.id, 'h', 'rgba(255,236,200,.18),rgba(255,236,200,.18)') }} />
          <span className="f-back" />
          <span className="f-leg" />
        </span>
        <span className="f-shadow" />
      </button>
      <span className="placard"><b>{c.course}</b><span>Issued {c.date}</span><span className="view"><Expand /> View certificate</span></span>
    </div>
  );
}

function Lightbox({ c, onClose }) {
  const closeRef = useRef(null);
  useEffect(() => {
    const prev = document.activeElement;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.documentElement.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.documentElement.style.overflow = '';
      prev?.focus?.();
    };
  }, [onClose]);
  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label={`${c.title}, ${c.course}`} onClick={onClose}>
      <div className="lb-card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="lb-close" ref={closeRef} onClick={onClose} aria-label="Close certificate"><Close /></button>
        <div className="lb-img">
          <img src={src(c.id, 1200)} alt={`Certificate awarded to Meghana K S: ${c.title}, ${c.course}`} width="1200" height="1697" />
        </div>
        <div className="lb-info">
          <span className="label">Certificate</span>
          <h3>{c.title}</h3>
          <p className="lb-course">{c.course}</p>
          <dl>
            <div><dt>Awarded to</dt><dd>Meghana K S</dd></div>
            <div><dt>Held by</dt><dd>{c.issuer}</dd></div>
            <div><dt>In association with</dt><dd>{c.partner}</dd></div>
            <div><dt>Issued</dt><dd>{c.date}</dd></div>
            <div><dt>Verification code</dt><dd><code>{c.code}</code></dd></div>
          </dl>
          <span className="label">Topics covered</span>
          <ul>{c.topics.map((t) => <li key={t}>{t}</li>)}</ul>
        </div>
      </div>
    </div>
  );
}

export default function Certificates() {
  const [open, setOpen] = useState(null);
  const close = useCallback(() => setOpen(null), []);
  return (
    <section id="certifications">
      <div className="wrap">
        <SectionHead eyebrow="Certifications" sub="Courses completed with RISE (Research Industrial Systems Engineering), Austria, in association with Sanskrithi School of Engineering. Select a frame to view the full certificate.">
          Certified by <span className="grad-text">RISE, Austria</span>
        </SectionHead>
        <div className="desk reveal">
          <span className="lamp" aria-hidden="true" />
          <span className="table" aria-hidden="true"><i /></span>
          <div className="stands">
            <Frame c={certificates[0]} side="l" onOpen={setOpen} />
            <Frame c={certificates[1]} side="r" onOpen={setOpen} />
          </div>
        </div>
        <div className="cert-cards">
          {certificates.map((c, i) => (
            <article className="card spot cert-card reveal" style={{ '--d': `${i * 0.08}s` }} key={c.id}>
              <div className="cc-top"><span className="icon-b su">📜</span><div><h3>{c.title}</h3><p className="cc-course">{c.course}</p></div></div>
              <p className="muted cc-meta">{c.issuer} · Issued {c.date}</p>
              <div className="chips">{c.topics.map((t) => <span className="chip" key={t}>{t}</span>)}</div>
              <div className="cc-foot">
                <span className="cc-code">Verification code <code>{c.code}</code></span>
                <button type="button" className="btn btn-ghost btn-sm" onClick={() => setOpen(c)}>View certificate <Expand /></button>
              </div>
            </article>
          ))}
        </div>
      </div>
      {open && <Lightbox c={open} onClose={close} />}
    </section>
  );
}
