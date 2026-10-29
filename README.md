# Читанка

A Ukrainian reading course that runs in the browser. Each day you get one lesson:

- one new grammar point, explained with tables and examples
- a short reading passage, with English for any sentence on tap
- the new vocabulary, with the stressed vowel marked
- the earlier words that return in the passage
- a three-question check that unlocks the next lesson the following day

The course has 40 lessons. It starts with three-word sentences and ends with short stories, following the same characters (Olena, Taras, Oksana and Murko the cat) so vocabulary keeps coming back. It assumes you can already read the Cyrillic alphabet.

## Flashcards

`cards.html` is a flashcard trainer for the 2,000 most frequent Ukrainian words. The Ukrainian word shows first; press **Return** to see the English, then grade yourself:

| key | grade | what happens |
|---|---|---|
| 1 | Again | the word comes back 2 cards later |
| 2 | Hard | 4 cards later, or a slightly longer gap for a review |
| 3 or Return | Good | new words come back once more in the session, then the next day; reviews stretch the gap (×2.5 by default) |
| 4 | Easy | a longer jump |

Each day brings a set number of new words (10 by default, change it with − / +), always the most frequent unseen word first. They are spread evenly between the reviews that are due, so every few old words you meet a new one. Missed words drop back to learning and return within the session.

The word list comes from a kaikki.org Wiktionary extract (headwords, stress marks, glosses), ranked by the [hermitdave/FrequencyWords](https://github.com/hermitdave/FrequencyWords) Ukrainian list. Inflected forms are counted toward their dictionary form.

## Speed reader

`reader.html` shows a Ukrainian text one word at a time (or two or three) in a fixed spot, so your eyes never have to move. The reading area uses a dimmed green with no glow, at under half the brightness of the other pages, for long sessions.

- **Texts:** open a `.txt` file (UTF-8, UTF-16 or older Windows-1251 files all work) or paste text. Each text remembers where you stopped; a short sample story is built in.
- **Speed:** 60–1000 words per minute in steps of 10 (↑ / ↓ or the buttons). Your speed is remembered.
- **Moving around:** Space plays or pauses (so does clicking the word); ← / → step; Shift + ← / → jump a sentence; drag the progress bar to go anywhere.
- **Words at a time:** 1, 2 or 3 (keys 1–3). Groups never run across the end of a sentence.
- **Rhythm:** slightly longer pauses after commas, full stops, paragraph ends and long words.
- **Comfort:** a brightness slider and five text sizes, on top of the dim palette.
- **Reading log:** each session records words read, time, your set speed and your actual speed (including the pauses), so you can track progress.

Texts are kept in the browser's local storage. Very large texts (several MB) may be too big to keep; the page tells you if so.

It uses the green-on-black "Construct" theme from Terminal Velocity, including the digital-rain intro.

## Files

```
index.html             lessons page
cards.html             flashcards page
reader.html            speed reader
js/words.js            the 2,000-word deck
js/cards.js            spaced-repetition scheduler
css/style.css          theme and layout
css/cards.css          flashcard styles
css/reader.css         speed-reader styles (dimmed palette)
js/reader.js           speed reader
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

Edits show up for returning visitors straight away: when online, the app always fetches the latest files and only falls back to its saved copy offline. If you add or rename a file, add it to the `FILES` list in `sw.js` and bump `VERSION` (for example `chytanka-v4`) so it's also available offline.
