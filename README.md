# QuickStay Component Usage Map

This document maps React components to the files/components that import or render them.

**Component Usage**

- **Nevbar**: used in [src/App.jsx](src/App.jsx#L2) (import and rendered in root layout)
- **Home**: used in [src/App.jsx](src/App.jsx#L4) (route `/`)
- **Footer**: used in [src/App.jsx](src/App.jsx#L5) (rendered in root layout)
- **HotelRoom**: used in [src/App.jsx](src/App.jsx#L6) (route `/room`)
- **HotelDetail**: imported and rendered in [src/App.jsx](src/App.jsx#L9)

- **Home subcomponents** (used inside [src/Home/Home.jsx](src/Home/Home.jsx#L1)):
  - `Featured` — renders featured hotel cards ([src/components/Featured.jsx](src/components/Featured.jsx#L1))
  - `Offercard` — renders exclusive offer cards ([src/components/Offercard.jsx](src/components/Offercard.jsx#L1))
  - `Feedback` — renders testimonial cards ([src/components/Feedback.jsx](src/components/Feedback.jsx#L1))
  - `CheckRoom` — booking search form ([src/components/CheckRoom.jsx](src/components/CheckRoom.jsx#L1))

- **HotelRoom subcomponents**:
  - `Rooms` — used inside [src/components/HotelRoom.jsx](src/components/HotelRoom.jsx#L1) to render room lists ([src/components/Rooms.jsx](src/components/Rooms.jsx#L1))

- **Rooms**: standalone list component; currently not referencing other custom components ([src/components/Rooms.jsx](src/components/Rooms.jsx#L1)).
- **RoomDetail**: component present at [src/components/RoomDetail.jsx](src/components/RoomDetail.jsx#L1) — not referenced elsewhere in the codebase (no imports found).

- **Offercard**: used in [src/Home/Home.jsx](src/Home/Home.jsx#L1) (see Offers section)

- **Featured**, **Feedback**, **CheckRoom**: all used only inside `Home` as listed above.

If you'd like, I can:

- add links to the exact lines where each component is instantiated; or
- generate a visual dependency graph (Mermaid) showing these relationships.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
