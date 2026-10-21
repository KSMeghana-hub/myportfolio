import { useEffect, useRef } from 'react';
import { Close } from './Icons.jsx';

// Dialog shell shared by the certificate and resume viewers: Escape / backdrop
// closes it, focus moves to the close button and returns on exit, page scroll locks.
export default function Modal({ label, onClose, className = '', children }) {
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
    <div className="lb" role="dialog" aria-modal="true" aria-label={label} onClick={onClose}>
      <div className={`lb-card ${className}`} onClick={(e) => e.stopPropagation()}>
        <button type="button" className="lb-close" ref={closeRef} onClick={onClose} aria-label={`Close ${label}`}><Close /></button>
        {children}
      </div>
    </div>
  );
}
