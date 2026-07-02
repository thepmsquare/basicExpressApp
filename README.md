# basic-express-typescript-template

an opinionated template for initializing express.js applications with typescript, es modules, and ejs for personal use.

> 📌 versioning: see [CHANGELOG.md](./CHANGELOG.md).

## prerequisites

- **node.js**: `>=20.0.0` (tested on `v24.16.0`)
- **npm**: `>=10.0.0` (tested on `v11.17.0`)

## project structure

```text
├── dist/                # compiled javascript output
├── public/              # static assets (css, js, images)
│   ├── scripts/
│   └── stylesheets/
├── views/               # ejs views/templates
├── .env.sample          # environment variables example template
├── index.ts             # entrypoint file
├── package.json         # node dependencies and scripts
└── tsconfig.json        # typescript configuration
```

## getting started

### 1. clone or use the template

if this repository is marked as a template on github, click the **use this template** button at the top of the repository to generate a new repository.

### 2. install dependencies

install the required project dependencies:

```bash
npm install
```

### 3. configure environment variables

copy `.env.sample` to a new `.env` file and customize your settings:

```bash
cp .env.sample .env
```

### 4. development

run the application in development watch mode. any changes you save will trigger an automatic restart:

```bash
npm run dev
```

the application will start and log:
`example app listening on http://localhost:3000`

### 5. build and start (production)

compile typescript code to javascript inside the `dist/` directory and execute it:

```bash
npm run build
npm start
```

## license

this project is licensed under the [gnu general public license v3.0](LICENSE) - copyright (c) 2026 parth mangtani.
