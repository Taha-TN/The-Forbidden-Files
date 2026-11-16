# THE FORBIDDEN FILES — Website Starter Package

A mobile-first static website prototype for GitHub Pages.

## Included
- `index.html` — cinematic archive homepage
- `case.html` — first researched case file (Flannan Isles lighthouse disappearance)
- `maintenance.html` — standalone maintenance page
- `404.html` — custom GitHub Pages not-found page
- `assets/css/style.css` — complete visual styling
- `assets/js/maintenance.js` — one-switch maintenance mode
- `assets/js/app.js` — homepage interactions
- `assets/js/case.js` — browser speech narration prototype

## Maintenance mode: one switch only

Open `assets/js/maintenance.js` and change only:

```js
const MAINTENANCE_MODE = false;
```

- `false` = website open
- `true` = visitors are redirected to `maintenance.html`

Commit and push the change to GitHub Pages. To reopen the site, change it back to `false` and push again.

The maintenance page itself does not load the redirect script, so it cannot create a redirect loop. The switch is a simple static-site visitor gate, not a security boundary; someone with repository access can change it.

## Publish with GitHub Pages
1. Create a new GitHub repository.
2. Upload the contents of this ZIP (not the enclosing folder) to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. Wait for GitHub Pages to publish. Your site URL will appear in Settings → Pages.

The custom `404.html` is automatically used by GitHub Pages for missing pages.

## Narration note — prototype limitation
The included player uses the browser's built-in Speech Synthesis voices. It is a working, no-API-cost narration prototype, but voice quality, available voices and emotional expression depend on the visitor's browser/device. It is **not yet the final expressive AI narrator**. For the finished experience, generate approved narration audio in advance and host the audio files with the site; this avoids per-visitor AI generation.

## Research and accuracy
The first case is based primarily on:
- National Records of Scotland, *Flannan Isles Lighthouse Keepers: The Disappearance* (2023): https://blog.nrscotland.gov.uk/2023/12/12/flannan-isles-lighthouse-keepers-the-disappearance/
- Northern Lighthouse Board, *Flannan Isles*: https://www.nlb.org.uk/history/flannan-isles/
- National Records of Scotland, *Lighthouses research guide*: https://nrscotland.gov.uk/learning-and-events/research-guides/lighthouses/
- Northern Lighthouse Board, *Flannan Islands*: https://www.nlb.org.uk/lighthouses/flannan-islands/

The page distinguishes the documented disappearance from later folklore. The official explanation is accidental drowning in a large wave; the exact fate and final sequence remain unknown. Dramatic alleged logbook quotations are not presented as authenticated evidence.

## Notes
- Google Fonts are loaded remotely; if unavailable, system fallback fonts are used.
- The page artwork is made with CSS shapes and gradients, so no image downloads are required.
- No backend, account system, tracking or paid API is included.
