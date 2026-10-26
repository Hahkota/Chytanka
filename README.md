# Читанка

A Ukrainian reading course that runs in the browser. Each day you get one lesson:

- one new grammar point, explained with tables and examples
- a short reading passage, with English for any sentence on tap
- the new vocabulary, with the stressed vowel marked
- the earlier words that return in the passage
- a three-question check that unlocks the next lesson the following day

The course has 40 lessons. It starts with three-word sentences and ends with short stories, following the same characters (Olena, Taras, Oksana and Murko the cat) so vocabulary keeps coming back. It assumes you can already read the Cyrillic alphabet.

It uses the green-on-black "Construct" theme from Terminal Velocity, including the digital-rain intro.

## Files

```
index.html             page markup
css/style.css          theme and layout
js/lessons.js          the 40 lessons (all course content lives here)
js/app.js              progress, unlocking, lesson / path / lexicon views
sw.js                  offline cache
manifest.webmanifest   lets phones install it as an app
icons/                 app icons
.github/workflows/     automatic GitHub Pages deployment
```

There is no build step and nothing to install. It's plain HTML, CSS and JavaScript.

## Run it locally

Open `index.html` in a browser. The app works fine like this; only the offline cache and phone install need a web server. To test those:

```
python3 -m http.server 8000
```

then visit http://localhost:8000.

## Deploy with GitHub Pages

1. Copy these files to the root of your repository (or a folder of their own, see below) and push to `main`.
2. On GitHub, open **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. The included workflow runs on every push to `main`. After a minute or so the site is live at `https://<your-username>.github.io/<repository-name>/`.

If you prefer not to use Actions, choose **Deploy from a branch → main → / (root)** instead. You can then delete `.github/workflows/pages.yml`.

**If the app sits in a subfolder** of a bigger repository, change the `path: .` line in `.github/workflows/pages.yml` to that folder (for example `path: chytanka`). Then move the `.github` folder to the repository root, because GitHub only reads workflows from there. All links inside the app are relative, so it works from any folder.

## Progress

Progress (completed lessons and their dates) is saved in the browser's local storage. It stays on that device and in that browser. Clearing site data resets it.

## Editing lessons

Every lesson in `js/lessons.js` has the same shape:

```js
{ ua: "Title in Ukrainian", en: "English title", g: "Grammar point",
  gram: `HTML explanation`,
  p: [["Ukrainian sentence.", "English translation."], ...],
  v: [["сл+ово", "word"], ...],          // + goes before the stressed vowel
  r: ["recycled", "words"],
  q: [{ q: "Question", o: ["option A", "option B", "option C"], a: 0 }] }  // a = index of the right option
```

Add a lesson by appending another object to the list. The path, the progress bar and the lexicon pick it up automatically.

After changing any file, bump `VERSION` in `sw.js` (for example `chytanka-v2`) so returning visitors get the new version instead of the cached one.
