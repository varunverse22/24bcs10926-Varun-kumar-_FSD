# Quick Bite - Online Food Ordering App

A React app built for the "Online Food Ordering Application" assessment.
It demonstrates prop drilling, then fixes it with the Context API and a
custom hook, and implements a shopping cart with `useState` + `useEffect`.

## Running the app

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173). Open your
browser's DevTools console to see the `useEffect` log messages.

A switcher at the top of the page lets you toggle between:

- **1. Prop Drilling (Problem)** — the Task 1 demo
- **2-5. Context API + Hook + Cart (Solution)** — Tasks 2-5

## Where each requirement lives

### Task 1 — Prop Drilling (`src/propDrilling/`)
- `AppPropDrilling.jsx` stores the `user` object and passes it into `Home`.
- `Home.jsx` → `Restaurant.jsx` → `FoodMenu.jsx` each receive `user` as a
  prop purely to forward it, never reading it themselves.
- `UserInfo.jsx` finally receives `user` and renders name, email, location.

### Task 2 — Context API (`src/context/UserContext.jsx`, `src/App.jsx`)
- `UserContext` is created with `createContext`.
- `UserProvider` wraps the whole app in `App.jsx` and supplies the
  logged-in user's info as the context value.
- `Home`, `Restaurant`, and `FoodMenu` (in `src/components/`) no longer
  receive or forward a `user` prop at all.

### Task 3 — Custom Hook (`src/hooks/useUser.js`)
- `useUser()` wraps `useContext(UserContext)` and returns the customer info
  (throwing a clear error if used outside the provider).
- `UserInfo.jsx` and `Navbar.jsx` both call `useUser()` instead of using
  `useContext` directly.

### Task 4 — Shopping Cart (`src/App.jsx`, `src/components/FoodMenu.jsx`, `src/components/Navbar.jsx`)
- `App.jsx` holds `cartCount` in `useState` and a `handleAddToCart` handler.
- `FoodMenu.jsx` renders Pizza (₹299), Burger (₹149), and Pasta (₹199), each
  with an "Add to Cart" button wired to `onAddToCart`.
- `Navbar.jsx` displays `Cart: {cartCount} items`.

### Task 5 — useEffect (`src/App.jsx`)
```js
useEffect(() => {
  console.log(`Cart updated. Total items: ${cartCount}`);
}, [cartCount]);
```
Because `cartCount` is the only dependency, this effect runs on mount and
then exactly once per cart change — nothing else re-triggers it.

## Project structure

```
food-ordering-app/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx                 # switcher between the two demos
    ├── index.css
    ├── App.jsx                  # Tasks 2-5: final solution
    ├── context/
    │   └── UserContext.jsx      # Task 2
    ├── hooks/
    │   └── useUser.js           # Task 3
    ├── components/              # Tasks 2-5 versions (Context-based)
    │   ├── Navbar.jsx
    │   ├── Home.jsx
    │   ├── Restaurant.jsx
    │   ├── FoodMenu.jsx
    │   └── UserInfo.jsx
    └── propDrilling/            # Task 1 (the "problem" demo)
        ├── AppPropDrilling.jsx
        ├── Home.jsx
        ├── Restaurant.jsx
        ├── FoodMenu.jsx
        └── UserInfo.jsx
```
