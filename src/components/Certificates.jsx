import { useCallback, useState } from 'react';
import { certificates } from '../data.js';
import { SectionHead } from './Sections.jsx';
import Modal from './Modal.jsx';
import { Expand } from './Icons.jsx';

const src = (id, w) => `certs/${id}-${w}.webp`;
// Real moulding texture sampled from each photographed frame, shaded per face for depth.
const tex = (id, o, shade) => `linear-gradient(${shade}), url(certs/${id}-frame-${o}.webp)`;

// Hovering or focusing either a frame or its callout lights up the pair.
const pairProps = (id, setHot) => ({
  onMouseEnter: () => setHot(id), onMouseLeave: () => setHot(null),
  onFocus: () => setHot(id), onBlur: () => setHot(null),
});

function Callout({ c, side, hot, setHot, onOpen }) {
  return (
    <aside className={`callout ${side}${hot ? ' on' : ''}`} style={{ '--ac': c.accent }} {...pairProps(c.id, setHot)}>
      <span className="co-badge">Module {c.module}</span>
      <h4>{c.course}</h4>
      <p className="co-org">{c.title} · RISE, Austria</p>
      <ul>{c.topics.map((t) => <li key={t}>{t}</li>)}</ul>
      <dl>
        <div><dt>Issued</dt><dd>{c.date}</dd></div>
        <div><dt>Verification</dt><dd><code>{c.code}</code></dd></div>
      </dl>
      <button type="button" className="co-view" onClick={() => onOpen(c)}>View certificate <Expand /></button>
    </aside>
  );
}

function Frame({ c, side, hot, setHot, onOpen }) {
  const h = tex(c.id, 'h', 'rgba(255,236,200,.10),rgba(255,236,200,.10)');
  const v = tex(c.id, 'v', 'rgba(255,236,200,.04),rgba(255,236,200,.04)');
  return (
    <div className={`stand ${side}${hot ? ' on' : ''}`} style={{ '--ac': c.accent }}>
      <button type="button" className="frame3d" onClick={() => onOpen(c)} aria-label={`View certificate: ${c.title}, ${c.course}`} {...pairProps(c.id, setHot)}>
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
        </span>
        <span className="f-shadow" />
      </button>
      <span className="f-tag" aria-hidden="true">Module {c.module}</span>
    </div>
  );
}

function Lightbox({ c, onClose }) {
  return (
    <Modal label={`certificate: ${c.title}, ${c.course}`} onClose={onClose}>
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
    </Modal>
  );
}

export default function Certificates() {
  const [open, setOpen] = useState(null);
  const [hot, setHot] = useState(null);
  const close = useCallback(() => setOpen(null), []);
  const [m1, m2] = certificates;
  const pair = (c) => ({ c, hot: hot === c.id, setHot, onOpen: setOpen });
  return (
    <section id="certifications">
      <div className="wrap">
        <SectionHead eyebrow="Certifications" sub="Courses completed with RISE (Research Industrial Systems Engineering), Austria, in association with Sanskrithi School of Engineering. Select a frame to view the full certificate and its verification code.">
          Certified by <span className="grad-text">RISE, Austria</span>
        </SectionHead>
        <div className="desk reveal">
          <span className="lamp" aria-hidden="true" />
          <span className="table" aria-hidden="true"><i /></span>
          <div className="stands">
            <Callout side="l" {...pair(m1)} />
            <Frame side="l" {...pair(m1)} />
            <Frame side="r" {...pair(m2)} />
            <Callout side="r" {...pair(m2)} />
          </div>
        </div>
        <div className="cert-cards">
          {certificates.map((c, i) => (
            <article className="card spot cert-card reveal" data-on={hot === c.id || undefined} style={{ '--d': `${i * 0.08}s`, '--ac': c.accent }} key={c.id}>
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
