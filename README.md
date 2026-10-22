# 🎒 Bunk Planner

Track attendance for every subject and find out how many classes you can safely skip while staying at **75%** attendance.

Built with **React + Redux Toolkit + Vite**. This repo is made for **Hack the Web**: it has a few bugs and missing features that you need to fix.

---

## Setup

Requirements: **Node.js 18 or higher**

```bash
git clone <your-fork-url>
cd bunk-planner
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

## How to take part

1. Fork this repo and clone your fork.
2. Pick an issue below. Create a branch: `git checkout -b fix/issue-1`
3. Fix it and test it in the browser.
4. Commit, push, and open a Pull Request. Mention the issue number in the title.
5. One PR per issue. Keep changes small, and only touch the files you need.

## Project structure

```
src/
├── components/
│   ├── Navbar.jsx            # top bar
│   ├── AddSubjectForm.jsx    # form to add a subject
│   ├── AttendanceSummary.jsx # overall numbers
│   └── SubjectCard.jsx       # one card per subject
├── store/
│   ├── store.js              # Redux store
│   └── subjectsSlice.js      # subjects state + actions
├── utils/
│   ├── getPercentage.js      # attendance % logic
│   └── calculateBunks.js     # safe bunks logic
├── App.jsx
└── index.css
```

## Key rule (read this once)

To stay at 75%, `attended / total` must be **at least 0.75**.
Example: attended 18 out of 20 classes = 90%. You can skip **4 more** classes, because 18 / 24 = 75%.

---

# Issues

Points: 🟢 Easy (10) · 🟡 Medium (20)

## Issue 1: Attendance percentage is always the same colour 🟢 `good first issue`

**Problem:** Every subject card shows the percentage in plain black, whatever the value is.

**Expected:**
- 75% or more → green
- 65% to below 75% → orange
- below 65% → red

**Hints:**
- File: `src/components/SubjectCard.jsx`
- The classes `green`, `orange` and `red` already exist in `src/index.css`.

---

## Issue 2: New subject shows `NaN%` 🟢 `good first issue`

**Problem:** A subject with 0 classes (like "Web Development") shows `NaN%`. The overall percentage at the top can show `NaN%` too.

**Expected:** Show `0.0%` when there are no classes yet.

**Hints:**
- File: `src/utils/getPercentage.js`
- What is `0 / 0` in JavaScript?

---

## Issue 3: Delete button does nothing 🟢 `good first issue`

**Problem:** Each card has a 🗑️ button, but clicking it does nothing.

**Expected:** Clicking it removes that subject from the list.

**Hints:**
- Files: `src/store/subjectsSlice.js` and `src/components/SubjectCard.jsx`
- Add a `deleteSubject` reducer, export it, then dispatch it with the subject `id`.

---

## Issue 4: Empty subject can be added 🟡

**Problem:** Clicking "Add subject" with an empty name creates a card with no title. A name with only spaces works too.

**Expected:**
- Do not add the subject.
- Show the red message **"Subject name is required"** below the form input.
- The message disappears once the user types again.

**Hints:**
- File: `src/components/AddSubjectForm.jsx`
- Use `useState` for the error. Use `.trim()` on the name.
- A ready-made `.error` style exists in `src/index.css`.

---

## Issue 5: "Safe bunks" number is wrong 🟡

**Problem:** The safe bunks value is incorrect. For 10 attended out of 20 it shows a negative number, and for 18 out of 20 it shows 3 instead of 4.

**Expected:** The number of extra classes you can skip while staying at 75% or above. It should never be negative.

| Attended | Total | Safe bunks |
|----------|-------|------------|
| 18 | 20 | 4 |
| 15 | 20 | 0 |
| 10 | 20 | 0 |
| 0 | 0 | 0 |

**Hints:**
- File: `src/utils/calculateBunks.js` (only `calculateBunks`, not the other function)
- Skipping a class also increases the total. Solve `attended / (total + x) >= 0.75` for `x`.

---

## Issue 6: Add Dark Mode 🟡

**Feature:** Add a theme toggle button in the navbar.

**Expected:**
- A button in the navbar switches between light and dark.
- The theme lives in Redux (create a new `theme` slice).
- The dark colours are already written in `src/index.css` under `[data-theme='dark']`.

**Hints:**
- Files: new `src/store/themeSlice.js`, plus `store.js`, `Navbar.jsx`, `App.jsx`
- Set the theme with `document.documentElement.setAttribute('data-theme', mode)` inside a `useEffect`.

---

## Issue 7: Data disappears on refresh 🟡

**Problem:** Add a subject or mark attendance, refresh the page, and everything is gone.

**Expected:** Data is saved in `localStorage` and loaded again when the page opens. If nothing is saved or the saved data is broken, the app must still open normally.

**Hints:**
- File: `src/store/store.js`
- Redux Toolkit's `configureStore` accepts `preloadedState`, and the store has a `subscribe` method.
- Wrap `JSON.parse` in `try / catch`.

---

## Rules

- Don't change the visible text or design of anything outside your issue.
- Don't install new libraries.
- Test your fix with: new subject, mark present, mark absent, delete, refresh.
- Be kind in code review comments. 🙂
