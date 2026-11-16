# THE FORBIDDEN FILES — Website Starter

This package is intentionally **flat**: every file belongs directly in the GitHub repository root. Do not create or upload any folders.

## Files
- `index.html` — homepage
- `case.html` — File 001 investigation
- `maintenance.html` — maintenance screen
- `404.html` — custom not-found page (GitHub Pages)
- `style.css` — all site styling
- `app.js` — homepage interactions
- `case.js` — case-page narration controls
- `maintenance.js` — maintenance mode switch

## Enable GitHub Pages
In the repository, open **Settings → Pages**. Choose **Deploy from a branch**, select `main` and `/ (root)`, then save. Wait for GitHub Pages to publish.

## Maintenance mode
Open `maintenance.js` and change:

```js
const MAINTENANCE_MODE = false;
```

Set it to `true` to redirect visitors to `maintenance.html`. Set it back to `false` to reopen the site. Commit and push the change. The switch is client-side and is not a security/access-control system; GitHub Pages remains a static public host.

## Important
Upload all eight website files directly into the repository root, replacing the previous versions. `README.md` is documentation and can also stay in the root. Do not put the files inside `assets`, `css`, `js`, or any other folder.

The narration controls use the browser's built-in speech synthesis where available. Voice quality and emotional expression depend on the visitor's device/browser; this is a prototype, not a hosted AI voice service.
