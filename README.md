# Ultimate English — web

Public, online version of the **Ultimate English** study app
(flashcards + translation practice). Fully static, works offline.

Contains the full lesson **content** (vocabulary, idioms, grammar and
translation practice) in `content.js`. The original lesson **PDFs are
intentionally NOT included here** — they are kept private (locally and in a
separate private repository).

## Live

https://diwadeq.github.io/ultimate-english/

## Run locally

Just open `index.html` in any browser.

## Import more lessons

Use the **Import a lesson** button on the home screen: paste lesson JSON
(generate it by giving any AI the built-in "Copy AI prompt" + your raw lesson).
Imported lessons are saved in your browser's localStorage — handy for adding
new lessons without editing the code.

## Edit content directly

All built-in lessons live in `content.js`:
- `study_allDecksMap` + `study_lessons` — flashcards
- `translation_allLessons` — translation practice

> Keep the source **PDFs out of this public repo.**
