## Frontend

More about frontend task

### Technology used

- Nodejs (version - v16.20.1)
- React.js (version - 18.2.0) + Vite
- Typescript, Bootstrap

### Installation and Run

```bash
npm i
npm run dev
```

Then visit the `Local` link from the terminal, it should look like this `http://127.0.0.1:5173/`

#### Task Description

1. Dashboard
   - NavBar (Views/NavBar.tsx)
   - SideBar (Views/SideBar.tsx)
   - MainContent (Views/MainContent)
   - Footer (Views/Footer.tsx)
2. Simple auth (just mock)
   - I just maked `Edit Proile` and `Edit Student Table Data` button clickable if `{ auth: ‘nfh6fgaWdj’ }` cookie available.
   - For test need to insert the Cookie into the Cookie Storage.

## Full Stack

#### Task Description
1. Custom UseFetch Hook (/Frontend/src/hooks/Api/useCustomFetch.tsx)
2. Sync Student Data (Used Typescript for making the data typed.)
3. Git push, merge, rebase (Pushed into github and merged another branch.)
4. Add ‘scroll to top’ in frontend (/Frontend/src/views/ScrollToTop.tsx)

Note: 👉 For geting backend data into frontend, you have to run both (frontend,backend) same time.