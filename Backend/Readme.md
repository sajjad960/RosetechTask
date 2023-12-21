## Backend

More about backend task

### Technology used

- Nodejs (version - v16.20.1)- Express.js
- 11.1.2-MariaDB Arch Linux, If you have mySql server installed, you are ok.
- ORM-Sequlizer
- Typescript

### Installation and Run

1.  Install npm packages:

```bash
npm i
```

2. Setup environment variables:

Copy `.env.example` to `.env` and you can also replace `.env` configurations with yours.

3. Seed data.

- for creating Database and Seeding Sample Students data run this script

```
ts-node src/seed/data/importData.ts
```

4. Start app

```bash
npm run dev
```

Local address of the app will be `http://127.0.0.1:5005` , if you used my env port.

## API's

- ✴️ Please import Postman API Collection for test api through Postman. <br>
  Folder location (src/seed/postman_data)

* Students
  - List of Students:
    - GET `/api/v1/students`
  - Add new Student:
    - POST `/api/v1/students`
      - pass `{ auth: ‘nfh6fgaWdj’ }` as cookies.
      - request body:
      ```js
      {
      "id": "6001",
      "name": "sajjad",
      "gender": "male",
      }
      ```
  - Update Report:
    - PATCH `/api/v1/students/:id`
    - pass `{ auth: ‘nfh6fgaWdj’ }` as cookies.
      - pass `{ auth: ‘nfh6fgaWdj’ }` as cookies.
        - request body: Pass which field you want to update
        ```js
        {
        "gender": "male",
        }
        ```
  - Update Report:
    - PUT `/api/v1/students/:id`
    - pass `{ auth: ‘nfh6fgaWdj’ }` as cookies.
    - pass `{ auth: ‘nfh6fgaWdj’ }` as cookies.
      - request body:
      ```js
      {
      "id": "6001",
      "name": "sajjadupdate",
      }
      ```
  - Delete Report:
    - Delete `/api/v1/students/:id`
    - pass `{ auth: ‘nfh6fgaWdj’ }` as cookies.

## Full Stack

#### Task Description
1. Custom UseFetch Hook (/Frontend/src/hooks/Api/useCustomFetch.tsx)
2. Sync Student Data (Used Typescript for making the data typed.)
3. Git push, merge, rebase (Pushed into github and merged another branch.)
4. Add ‘scroll to top’ in frontend (/Frontend/src/views/ScrollToTop.tsx)

Note: 👉 For geting backend data into frontend, you have to run both (frontend,backend) same time.
