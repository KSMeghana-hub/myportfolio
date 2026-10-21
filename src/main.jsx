import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

const root = document.getElementById('root');
// Built pages arrive pre-rendered, so hydrate; the dev server serves an empty shell.
if (root.firstElementChild) hydrateRoot(root, <App />);
else createRoot(root).render(<App />);
