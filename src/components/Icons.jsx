const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 2.2, strokeLinecap: 'round', strokeLinejoin: 'round' };

export const Arrow = () => <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>;
export const Download = () => <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true"><path d="M12 3v12m0 0-5-5m5 5 5-5M5 21h14" /></svg>;
export const Up = () => <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true"><path d="M12 19V5m-6 6 6-6 6 6" /></svg>;
export const Close = () => <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>;
export const Copy = () => <svg viewBox="0 0 24 24" {...stroke} strokeWidth="2" aria-hidden="true"><rect x="9" y="9" width="12" height="12" rx="3" /><path d="M5 15V6a3 3 0 0 1 3-3h7" /></svg>;
export const Check = () => <svg viewBox="0 0 24 24" {...stroke} strokeWidth="2.6" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>;
export const Eye = () => <svg viewBox="0 0 24 24" {...stroke} strokeWidth="2" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></svg>;
export const External = () => <svg viewBox="0 0 24 24" {...stroke} strokeWidth="2" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></svg>;
export const Expand = () => <svg viewBox="0 0 24 24" {...stroke} strokeWidth="2" aria-hidden="true"><path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7" /></svg>;
export const Mail = ({ color = 'currentColor' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></svg>
);
export const LinkedIn = ({ color = 'currentColor' }) => (
  <svg viewBox="0 0 24 24" fill={color} aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" /></svg>
);
export const GitHub = ({ color = 'currentColor' }) => (
  <svg viewBox="0 0 24 24" fill={color} aria-hidden="true"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-1.96c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" /></svg>
);
