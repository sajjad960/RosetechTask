# Overview

Students Management System

- For given task I built this application, implemented frontend, backend features.

# Frontend

Frontend Folder Location (/Frontend).

## Technology used

- Nodejs (version - v16.20.1)
- React.js (version - 18.2.0) + Vite
- Typescript, Bootstrap

## Inatallation and Run

```bash
npm i
npm run dev
```
Then visit the `Local` link from the terminal, it should look like this `http://127.0.0.1:5173/`

### Task Description

1. DashBard
    - NavBar (Views/NavBar.tsx)
    - SideBar(Views/SideBar.tsx)
    - MainContent (Views/MainContent)
    - Footer (Views/Footer.tsx)
2. Simple auth (just mock)
    - I just maked `Edit Proile` and `Edit Student Table Data` button clickable if `{ auth: ‘nfh6fgaWdj’ }` cookie available.
    - For test need to insert the Cookie into the Cookie Storage.