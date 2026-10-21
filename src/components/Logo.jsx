import { useId } from 'react';

// Brand mark: an "M" whose middle stroke is a check mark (quality assured),
// with a coral spark. Same artwork as public/favicon.svg; useId keeps the
// gradient ids unique when the mark appears more than once on the page.
export default function LogoMark({ size = 36, className = '' }) {
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 512 512" aria-hidden="true">
      <defs>
        <linearGradient id={`bg${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0D9488" /><stop offset=".6" stopColor="#0284C7" /><stop offset="1" stopColor="#3B5BDB" />
        </linearGradient>
        <linearGradient id={`sh${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".2" /><stop offset=".55" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="512" height="512" rx="118" fill={`url(#bg${id})`} />
      <rect width="512" height="512" rx="118" fill={`url(#sh${id})`} />
      <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="56">
        <path d="M136 376V170M376 150V376" stroke="#fff" strokeOpacity=".58" />
        <path d="M136 170L214 290L376 150" stroke="#fff" />
      </g>
      <circle cx="414" cy="104" r="23" fill="#FB7185" />
    </svg>
  );
}
