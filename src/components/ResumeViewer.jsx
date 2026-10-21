import { profile } from '../data.js';
import Modal from './Modal.jsx';
import { Download, External } from './Icons.jsx';

// Props for any "View Resume" link: a plain click opens the viewer; Ctrl/Cmd/middle-click
// (or no JavaScript) still opens the PDF itself.
export const viewResumeProps = (open) => ({
  href: profile.resume,
  onClick: (e) => {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    open();
  },
});

export default function ResumeViewer({ onClose }) {
  const { resume, resumePreview: p } = profile;
  return (
    <Modal label="resume" onClose={onClose} className="rv-card">
      <div className="rv-bar">
        <div>
          <span className="label">Resume</span>
          <h3>{profile.name}</h3>
          <p className="muted">{profile.title} · One page</p>
        </div>
        <div className="rv-actions">
          <a href={resume} className="btn btn-primary btn-sm" download>Download PDF <Download /></a>
          <a href={resume} className="btn btn-ghost btn-sm" target="_blank" rel="noopener">Open PDF <External /></a>
        </div>
      </div>
      <div className="rv-page">
        <img src={p.src} width={p.w} height={p.h} decoding="async"
          alt={`Resume of ${profile.name}, ${profile.title}. Download the PDF for the full text.`} />
      </div>
    </Modal>
  );
}
