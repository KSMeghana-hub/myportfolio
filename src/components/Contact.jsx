import { useState } from 'react';
import { profile } from '../data.js';
import { Arrow, Check, Copy, Download, GitHub, LinkedIn, Mail } from './Icons.jsx';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [user, domain] = profile.email.split('@');
  const copy = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 1800); }
    catch { window.location.href = `mailto:${profile.email}`; }
  };
  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact">
          <div className="card c-main reveal">
            <span className="eyebrow"><i />Contact</span>
            <h2>Get in <span className="grad-text">touch</span></h2>
            <p>I am open to Software Testing and Quality Assurance internships and entry-level opportunities. Please feel free to reach out by email or connect with me on LinkedIn.</p>
            <div className="hero-cta">
              <a href={`mailto:${profile.email}`} className="btn btn-primary mag-btn">Email Me <Mail /></a>
              <a href={profile.resume} className="btn btn-ghost mag-btn" download>Download Resume <Download /></a>
            </div>
          </div>
          <div className="c-links">
            <div className="card spot c-link reveal">
              <span className="icon-b"><Mail color="#0F766E" /></span>
              <a className="t" href={`mailto:${profile.email}`}><small>Email</small><b>{user}@<wbr />{domain}</b></a>
              <button type="button" className={`copy${copied ? ' done' : ''}`} onClick={copy}
                aria-label={copied ? 'Email address copied' : 'Copy email address'} title={copied ? 'Copied' : 'Copy email'}>
                {copied ? <Check /> : <Copy />}
              </button>
            </div>
            <a className="card spot c-link reveal" style={{ '--d': '.08s' }} href={profile.linkedin} target="_blank" rel="noopener">
              <span className="icon-b sk"><LinkedIn color="#0369A1" /></span>
              <span className="t"><small>LinkedIn</small><b>K S Meghana's Profile</b></span>
              <span className="go"><Arrow /></span>
            </a>
            <a className="card spot c-link reveal" style={{ '--d': '.16s' }} href={profile.github} target="_blank" rel="noopener">
              <span className="icon-b li"><GitHub color="#6D28D9" /></span>
              <span className="t"><small>GitHub</small><b>{profile.githubUser}</b></span>
              <span className="go"><Arrow /></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
