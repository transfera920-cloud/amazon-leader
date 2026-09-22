import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

async function prerender() {
  console.log('Starting pre-rendering...');
  const vite = await createServer({
    root,
    server: { middlewareMode: true },
    appType: 'custom',
  });

  try {
    const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
    const appHtml = render();

    const indexPath = path.resolve(root, 'dist/index.html');
    if (!fs.existsSync(indexPath)) {
      throw new Error(`dist/index.html not found at ${indexPath}`);
    }

    let html = fs.readFileSync(indexPath, 'utf-8');
    if (!html.includes('<div id="root"></div>')) {
      throw new Error('Could not find <div id="root"></div> in dist/index.html');
    }

    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
    fs.writeFileSync(indexPath, html, 'utf-8');
    console.log('Pre-rendered HTML successfully injected into dist/index.html');
  } finally {
    await vite.close();
  }
}

prerender().catch((err) => {
  console.error('Error during prerendering:', err);
  process.exit(1);
});
