import { useCallback, useEffect, useState } from 'react';
import { initEffects } from './effects.js';
import { profile } from './data.js';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Certificates from './components/Certificates.jsx';
import Contact from './components/Contact.jsx';
import ResumeViewer, { viewResumeProps } from './components/ResumeViewer.jsx';
import { About, Education, Goal, Journey, Marquee, Projects, Skills } from './components/Sections.jsx';
import { Up } from './components/Icons.jsx';

export default function App() {
  useEffect(() => initEffects(), []);
  const [resumeOpen, setResumeOpen] = useState(false);
  const viewResume = useCallback(() => setResumeOpen(true), []);
  const closeResume = useCallback(() => setResumeOpen(false), []);
  return (
    <>
      <a className="skip" href="#about">Skip to content</a>
      <div className="aurora" aria-hidden="true"><div className="dots" /><div className="blob b1" /><div className="blob b2" /><div className="blob b3" /></div>
      <div className="progress" aria-hidden="true" />
      <Nav onViewResume={viewResume} />
      <main>
        <Hero onViewResume={viewResume} />
        <Marquee />
        <About />
        <Education />
        <Certificates />
        <Skills />
        <Projects />
        <Journey />
        <Goal />
        <Contact onViewResume={viewResume} />
      </main>
      <footer>
        <div className="wrap">
          <nav className="foot-links" aria-label="Profiles">
            <a href={`mailto:${profile.email}`}>Email</a><a href={profile.linkedin} target="_blank" rel="noopener">LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noopener">GitHub</a><a {...viewResumeProps(viewResume)}>Resume</a>
          </nav>
          <p>© <span suppressHydrationWarning>{new Date().getFullYear()}</span> {profile.name} · {profile.title}</p>
        </div>
      </footer>
      <a href="#home" className="top-btn" aria-label="Back to top"><Up /></a>
      {resumeOpen && <ResumeViewer onClose={closeResume} />}
    </>
  );
}
