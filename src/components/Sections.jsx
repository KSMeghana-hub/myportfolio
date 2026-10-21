import {
  about, achievements, education, goal, journey, marqueeA, marqueeB, profile, programming, projects,
  skillGroups, stlc, strengths, testingSkills,
} from '../data.js';

export function SectionHead({ eyebrow, children, sub, center }) {
  return (
    <div className={`sec-head reveal${center ? ' center' : ''}`}>
      <span className="eyebrow"><i />{eyebrow}</span>
      <h2>{children}</h2>
      {sub && <p>{sub}</p>}
    </div>
  );
}

const Chips = ({ items, alt = [] }) => (
  <div className="chips">{items.map((t, i) => <span key={t} className={`chip${alt.includes(i) ? ' c2' : ''}`}>{t}</span>)}</div>
);

export function Marquee() {
  const row = (list) => [...list, ...list].map((k, i) => <span className="pill" key={i}><i>✦</i>{k}</span>);
  return (
    <div className="marquees" aria-hidden="true">
      <div className="marquee"><div className="track">{row(marqueeA)}</div></div>
      <div className="marquee rev"><div className="track">{row(marqueeB)}</div></div>
    </div>
  );
}

export function About() {
  const facts = [
    ['🎓', 'Degree', profile.degree], ['🏫', 'College', profile.college], ['📅', 'Study period', `${profile.period} · ${profile.year}`],
    ['🧪', 'Career interest', 'Software Testing & Quality Assurance'], ['📍', 'Based in', profile.location],
  ];
  return (
    <section id="about">
      <div className="wrap">
        <SectionHead eyebrow="About Me">Detail-oriented, <span className="grad-text">quality-focused</span> and always learning.</SectionHead>
        <div className="bento">
          <article className="card spot b-about reveal">
            <p className="big">{about.lead}</p>
            {about.paragraphs.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
          </article>
          <aside className="card b-facts reveal" style={{ '--d': '.1s' }}>
            <span className="label">Quick facts</span>
            <ul className="facts">
              {facts.map(([ic, k, v]) => <li key={k}><span className="ic">{ic}</span><div><div className="k">{k}</div><div className="v">{v}</div></div></li>)}
            </ul>
          </aside>
          <article className="card spot b-sm reveal">
            <div className="top"><span className="icon-b">🎯</span><h3>Focus Areas</h3></div>
            <p className="muted">{about.focus}</p>
          </article>
          <article className="card spot b-sm reveal" style={{ '--d': '.08s' }}>
            <div className="top"><span className="icon-b li">🗣️</span><h3>Languages</h3></div>
            <Chips items={about.languages} alt={[3]} />
          </article>
          <article className="card spot b-sm reveal" style={{ '--d': '.16s' }}>
            <div className="top"><span className="icon-b co">✨</span><h3>Interests</h3></div>
            <div className="hob">{about.interests.map(([e, t]) => <span key={t}>{e} {t}</span>)}</div>
          </article>
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <SectionHead eyebrow="Education">Academic <span className="grad-text">background</span></SectionHead>
        <div className="edu-grid">
          <div className="tl">
            {education.map((e, i) => (
              <div className="tl-item reveal" style={{ '--d': `${i * 0.08}s` }} key={e.title}>
                <span className="tl-dot" aria-hidden="true" />
                <article className="card spot">
                  <span className={`yr${e.current ? ' now' : ''}`}>{e.current ? `● ${e.period} · Pursuing` : e.period}</span>
                  <h3>{e.title}</h3>
                  <p className="org">{e.org}</p>
                  {e.place && <p className="muted place">{e.place}</p>}
                  {e.tags && <div className="meta"><Chips items={e.tags} alt={[2]} /></div>}
                  {e.score && <div className="meta"><span className="score">{e.score}<small>/ {e.outOf}</small></span></div>}
                </article>
              </div>
            ))}
          </div>
          <div className="side">
            <article className="card spot reveal">
              <span className="label">Achievements &amp; Activities</span>
              {achievements.map((a) => (
                <div className="cert" key={a.title}><span className="icon-b li">{a.icon}</span><div><h4>{a.title}</h4><p className="muted">{a.text}</p></div></div>
              ))}
            </article>
            <a className="card spot side-link reveal" href="#certifications" style={{ '--d': '.08s' }}>
              <span className="icon-b su">📜</span>
              <div><h4>2 RISE Certificates</h4><p className="muted">RISE Institute of Higher Technology, Austria. See them framed below.</p></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <SectionHead eyebrow="Technical Skills" sub="Skills I am learning and applying across software testing, programming, databases and tools.">
          Technical skills for <span className="grad-text">quality software</span>
        </SectionHead>
        <div className="sk-grid">
          <article className="card spot sk-test reveal">
            <div className="sk-head"><span className="icon-b">🧪</span><div><h3>Software Testing</h3><p>Core focus area</p></div></div>
            <Chips items={testingSkills} alt={[4, 8]} />
            <div className="stlc">
              <span className="label">Software Testing Life Cycle</span>
              <div className="flow">{stlc.map((s, i) => <span key={s} className="fl">{i > 0 && <em aria-hidden="true">→</em>}<span>{s}</span></span>)}</div>
            </div>
          </article>
          <article className="card spot sk-prog reveal" style={{ '--d': '.08s' }}>
            <div className="sk-head"><span className="icon-b li">💻</span><div><h3>Programming</h3><p>Languages</p></div></div>
            <ul className="lvl">
              {programming.map((p) => (
                <li key={p.name}><div className="row">{p.name} <span className={`tag ${p.tone}`}>{p.level}</span></div><div className="bar"><i style={{ '--w': `${p.w}%` }} /></div></li>
              ))}
            </ul>
            <p className="note">Java: OOP, classes, objects, methods, loops and conditional statements.</p>
          </article>
          {skillGroups.map((g, i) => (
            <article className={`card spot sk-${g.key} reveal`} style={{ '--d': `${i * 0.08}s` }} key={g.key}>
              <div className="sk-head"><span className={`icon-b ${g.tint}`}>{g.icon}</span><div><h3>{g.title}</h3><p>{g.sub}</p></div></div>
              <Chips items={g.items} alt={[g.items.length - 1]} />
            </article>
          ))}
          <article className="card sk-str reveal">
            <div className="sk-head"><span className="icon-b co">💡</span><div><h3>Professional Strengths</h3><p>How I work</p></div></div>
            <Chips items={strengths} alt={[2, 4]} />
          </article>
        </div>
      </div>
    </section>
  );
}

function Cover({ kind }) {
  if (kind === 'cv1') return (
    <div className="cover cv1" aria-hidden="true">
      <span className="badge ai">✦ AI-powered</span>
      <div className="doc"><span className="av" /><i style={{ width: '70%' }} /><i /><i style={{ width: '85%' }} /><i style={{ width: '60%' }} /></div>
    </div>
  );
  if (kind === 'cv2') return (
    <div className="cover cv2" aria-hidden="true">
      <div className="tc">
        <div className="r h"><span>ID</span><span>Module</span><span /></div>
        {['Login & Authentication', 'Product Search', 'Wishlist & Cart', 'Checkout & Payment'].map((m, i) => (
          <div className="r" key={m}><code>TC_0{i + 1}</code><span>{m}</span><span className="ok">✓</span></div>
        ))}
      </div>
      <span className="badge bug">Tracked in Jira</span>
    </div>
  );
  if (kind === 'cv3') return (
    <div className="cover cv3" aria-hidden="true">
      <div className="code">
        <div className="dots3"><i /><i /><i /></div>
        <span className="kw">public class</span> <span className="ty">Practice</span> {'{'}<br />
        {'  '}<span className="cm">// classes, objects &amp; OOP</span><br />
        {'  '}<span className="kw">public static void</span> main(<span className="ty">String</span>[] a) {'{'}<br />
        {'    '}System.out.println(<span className="st">"Hello, Java!"</span>);<br />
        {'  }'}<br />{'}'}
      </div>
    </div>
  );
  return (
    <div className="cover cv4" aria-hidden="true">
      <span className="badge eco">🌱 Community Service</span>
      <svg className="leaf" viewBox="0 0 120 120"><defs><linearGradient id="lf" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#4ADE80" /><stop offset="1" stopColor="#0D9488" /></linearGradient></defs><path d="M100 14C52 14 18 40 18 80c0 10 3 18 8 24 4-22 18-44 44-58-22 18-34 38-38 62 6 3 13 4 20 4 40 0 54-38 48-98z" fill="url(#lf)" /><path d="M26 104c6-30 22-52 44-66" stroke="#ECFCCB" strokeWidth="3" fill="none" strokeLinecap="round" /><circle cx="74" cy="56" r="5" fill="#FCD34D" /><circle cx="58" cy="76" r="4" fill="#FB7185" /></svg>
      <span className="badge mag">🔍</span>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <SectionHead eyebrow="Projects">Projects &amp; <span className="grad-text">practical work</span></SectionHead>
        <div className="pj-grid">
          {projects.map((p, i) => (
            <article className="card spot pj tilt reveal" style={{ '--d': `${(i % 2) * 0.08}s` }} key={p.n}>
              <Cover kind={p.cover} />
              <div className="pj-body">
                <div className="pj-top"><span className="pj-num">{p.n}</span><span className="pj-type">{p.type}</span></div>
                <h3>{p.title}</h3>
                <p className="muted">{p.text}</p>
                <Chips items={p.tags} alt={[1]} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Journey() {
  return (
    <section id="journey">
      <div className="wrap">
        <SectionHead eyebrow="Learning Journey" center sub="Step-by-step progress towards a career in Software Testing and Quality Assurance.">
          My <span className="grad-text">learning journey</span>
        </SectionHead>
        <div className="jr" id="jr">
          <div className="jr-line" aria-hidden="true"><i /></div>
          {journey.map((s, i) => (
            <div className="step reveal" key={s.title}>
              <span className="node" aria-hidden="true">{s.icon}</span>
              <div className="card spot"><span className="n">STEP 0{i + 1}</span><h3>{s.title}</h3><p className="muted">{s.text}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Goal() {
  return (
    <section id="goal">
      <div className="wrap">
        <div className="goal reveal">
          <span className="eyebrow"><i />Current Career Goal</span>
          <h2>{goal.title}</h2>
          <p>{goal.text}</p>
          <div className="goal-grid">{goal.pillars.map(([k, v]) => <div key={k}><small>{k}</small>{v}</div>)}</div>
          <p className="objective"><b>Career objective:</b> {goal.objective}</p>
        </div>
      </div>
    </section>
  );
}
