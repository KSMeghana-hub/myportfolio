// Turns the client build into a fully rendered static page:
// 1. renders <App/> to HTML with the SSR bundle so content paints before any JS runs,
// 2. inlines the single CSS file to drop a render-blocking request.
import { readFileSync, writeFileSync, rmSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const dist = resolve('dist');
const ssr = resolve('dist-ssr');
const entry = readdirSync(ssr).find(f => /^entry-server\.(m?js)$/.test(f));
const { render } = await import(pathToFileURL(join(ssr, entry)).href);

let html = readFileSync(join(dist, 'index.html'), 'utf8');
html = html.replace('<!--app-html-->', render());

html = html.replace(/<link rel="stylesheet"[^>]*href="\.?\/?(assets\/[^"]+\.css)"[^>]*>/, (_, file) => {
  const css = readFileSync(join(dist, file), 'utf8');
  rmSync(join(dist, file));
  return `<style>${css}</style>`;
});

writeFileSync(join(dist, 'index.html'), html);
rmSync(ssr, { recursive: true, force: true });
console.log(`prerendered dist/index.html (${(Buffer.byteLength(html) / 1024).toFixed(1)} KB)`);
