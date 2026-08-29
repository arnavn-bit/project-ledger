# Alpha Ledger — v3

421 build-along projects (Data Science, Machine Learning, Deep Learning, Quant
Finance, and a new Industry Projects category) + 8 hackathons with
leaderboards, a shareable Team Dashboard, a hand-written Docs & Tutorials
library, and a Showcase of readymade projects with real sample output. Every
project still opens into a modal with three tabs — **Overview**,
**Mini-tutorial**, and **Exercise Room** (a real, auto-checked coding
exercise that runs in the browser — no backend).

## File structure

```
alpha-ledger/
├── index.html          # page shell — sections + script/style includes
├── css/
│   └── styles.css       # all styling (original design + new components)
├── js/
│   ├── data.js           # the 421-project ledger
│   ├── hackathons.js      # the 8 hackathons, each with a seeded leaderboard
│   ├── exercises.js       # the Exercise Room engine + 8 exercise templates
│   ├── tutorials.js       # Docs & Tutorials content — 23 hand-written articles
│   ├── showcase.js        # Showcase content — 10 readymade projects with output
│   └── app.js             # rendering, filters, modal, dashboard, progress tracking
└── README.md
```

## What's new in v3

- **421 projects.** Added a new **Industry Projects** category (30 entries,
  `IP-001`–`IP-030`) — fraud detection, credit risk, AML monitoring,
  market-making, robo-advisors, and more — on top of the original 391.
- **Bigger, richer collaborative pool.** ~105 projects (about a quarter of
  the ledger, spread across every category and difficulty) are now tagged
  collaborative, each with a suggested team size **and** a role split (e.g.
  Data Engineer / Analyst / Viz for a Data Science build). All 8 hackathons
  get a role split too.
- **Shareable Team Dashboard** (`#dashboard`). Join any collaborative
  project or hackathon to your team board, add teammates with roles, see
  combined checklist progress, and hit **"Copy shareable dashboard link"** —
  it packs your team name, roster, and joined items into a `?board=`
  URL. A teammate who opens that link sees a banner offering to load the
  exact same board into their own browser.
- **Docs & Tutorials** (`#tutorials`). 23 hand-written articles grouped
  into Foundations & Workflow, Data Science, Machine Learning, Deep
  Learning, Quant Finance, and cross-cutting Tricks & Techniques — things
  like cross-validation pitfalls, debugging a training run that won't
  converge, backtesting without lying to yourself, and pandas performance
  tricks. Each has real code snippets, not just prose.
- **Showcase** (`#showcase`). 10 readymade projects (2 per category) shown
  with their actual finished output — bar charts, line charts, scatter
  plots, and tables rendered as inline SVG/HTML, no chart library needed —
  plus headline metrics, a short code excerpt, and a one-paragraph
  takeaway. Good for seeing what "done" looks like before starting the real
  build in the catalog.
- **Hackathon leaderboards.** Every hackathon modal now has a Leaderboard
  tab with seeded reference scores and a form to submit your own team's
  score. Submissions are stored in your browser (`localStorage`) and
  re-ranked instantly — there's no shared backend, so it won't sync across
  devices, but it's a real, working leaderboard for a single browser/team
  session.
- Everything from v2 is unchanged and still works: mini-tutorials, the
  in-browser Exercise Room (Pyodide), progress tracking, the resource
  library, and per-project shareable deep-links (`?open=DS-001`,
  `?hk=HK-01`).

## How the Exercise Room checking works

There isn't a server, so "checked when code is entered" works like this:
1. You write a Python function in the editor (e.g. `moving_average(...)`).
2. Clicking **Run & check** loads Pyodide the first time (~6MB, one-time,
   cached by the browser after), then runs your code plus a hidden test call.
3. The output is compared against the expected result and you get an
   instant pass/fail with a message.

This is genuine code execution, not a string-matching trick — but to keep
the project buildable without a backend, each project is assigned one of
**8 exercise templates** (2 per original category) rather than one bespoke
exercise per entry, matched deterministically by `pickExerciseTemplate()` in
`js/exercises.js`. Industry Projects currently fall back to the Data Science
templates unless you assign something more specific.

### Adding a new/bespoke exercise
Open `js/exercises.js`, copy a template block in `EXERCISES`, give it a new
key, and write your own `prompt`, `starter` code, `testCode` (hidden Python
that calls the student's function), and `check()` function that parses the
printed output. Then reference the new key from `pickExerciseTemplate()` or
directly from a hackathon's `exerciseTemplate` field.

## Adding more content

- **Hackathons** — open `js/hackathons.js`, copy an object in the
  `HACKATHONS` array, give it a new `id` (`HK-09`, etc.), fill in the
  fields, and add a `leaderboard` array of `{ team, score }` seed entries.
- **Projects** — open `js/data.js`, copy an object in the `PROJECTS` array
  following the same shape. It gets a mini-tutorial, an exercise, and (if it
  lands on the deterministic `i % 4 === 1` slot in `app.js`) collaborative
  tagging automatically — no extra wiring needed.
- **Docs/Tutorials** — open `js/tutorials.js`, copy an object in `TUTORIALS`,
  pick a `group` from `DOC_GROUPS`, and write `body` as an HTML string.
- **Showcase entries** — open `js/showcase.js`, copy an object in
  `SHOWCASE`. `chart.type` can be `bar`, `line`, `scatter`, or `table` — see
  `renderShowcaseChart()` in `app.js` for the shape each one expects.

## Hosting it temporarily (free, no signup required for the quickest option)

### Option A — Netlify Drop (fastest, good for "host it temporarily")
1. Zip the `alpha-ledger` folder (or just have it ready on disk).
2. Go to **https://app.netlify.com/drop**
3. Drag the whole `alpha-ledger` folder onto the page.
4. Netlify gives you a live URL (like `random-name-123.netlify.app`) in
   seconds. No account needed for a one-off drop; sign up (free) if you want
   the URL to stay stable and be able to update it later instead of getting
   a new random URL each time.

### Option B — GitHub Pages (free, good once you're iterating regularly)
1. Create a new GitHub repo, push the `alpha-ledger` folder contents to it.
2. Repo → **Settings → Pages** → Source: `main` branch, root folder.
3. GitHub gives you a URL like `yourusername.github.io/reponame`.
4. Every time you `git push` an update, the live site updates in ~1 minute.
   This is the better option once you're making changes often, since
   Netlify Drop's free tier re-drop gives you a fresh random URL each time
   unless you claim the site with an account.

### Option C — Vercel (also free, similar to GitHub Pages workflow)
1. Push to a GitHub repo (same as Option B).
2. Go to **https://vercel.com**, "Add New Project", import the repo.
3. Framework preset: "Other" (it's static HTML, no build step needed).
4. Deploy — you get a live URL, and every push auto-redeploys.

For a genuinely *temporary* preview to show someone today, use **Option A**.
For anything you'll keep iterating on, use **Option B or C** so updates are
a `git push` instead of a re-drag every time.

## Notes / limits worth knowing

- **"Collaborative" and the Team Dashboard don't have live multi-user
  sync** (that needs a backend/database like Firebase). What's here is a
  shareable board link, role suggestions, and a suggested team size — good
  enough for "work on this together" framing and for keeping a team roster
  and combined progress in sync when you re-share the link after updates,
  but not real-time co-editing. If you want true live collaboration later,
  the smallest add would be a free Firebase Realtime Database project.
- **Hackathon leaderboards are per-browser too** — the seeded entries are
  shared (baked into `js/hackathons.js`), but anything *you* submit through
  the form only lives in your own browser's `localStorage`, not a shared
  server. For a real cross-device leaderboard, you'd need a small backend
  (even a free Firebase/Supabase table would do it).
- Progress (checklist + solved exercises), your team board, and leaderboard
  submissions are all per-browser, stored in `localStorage` — none of it
  syncs across devices without adding an account system.

