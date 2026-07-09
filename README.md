# Ticketing Frontend

Frontend application for the Ticketing System built with **Vue 3**, **TypeScript**, **Vite**, **TailwindCSS v4**, and **shadcn-vue**.

---

## Technology Stack

| Technology  | Version |
| ----------- | ------- |
| Vue         | 3       |
| Vite        | 8       |
| TypeScript  | 5       |
| TailwindCSS | 4       |
| Pinia       | 3       |
| Vue Router  | 4       |
| Axios       | 1       |
| Docker      | Latest  |
| pnpm        | 10+     |

---

## Features

- Authentication
- Ticket Management
- User Management
- Dashboard
- Responsive Layout
- Dark Mode (planned)
- Role Based Access (planned)
- REST API Integration

---

## Project Structure

```
src/
├── assets/
├── components/
├── config/
├── layouts/
├── lib/
├── pages/
├── router/
├── services/
├── stores/
├── types/
└── utils/
```

---

## Development Environment

Requirements

- Docker Desktop
- Docker Compose
- Git

No Node.js installation is required on the host machine.

---

## Running Project

Build container

```bash
docker compose build
```

Run

```bash
docker compose up -d
```

Stop

```bash
docker compose down
```

Open

```
http://localhost:5173
```

---

## Useful Commands

Install dependency

```bash
docker compose exec frontend pnpm install
```

Lint

```bash
docker compose exec frontend pnpm lint
```

Build

```bash
docker compose exec frontend pnpm build
```

Format

```bash
docker compose exec frontend pnpm format
```

Check format

```bash
docker compose exec frontend pnpm format:check
```

---

## Environment

Configuration is stored in

```
.env.development

.env.production

.env.local
```

---

## Documentation

Detailed documentation can be found in

```
docs/
```

---

## Branch Strategy

```
main
develop
feature/*
hotfix/*
```

---

## Commit Convention

```
feat:
fix:
refactor:
style:
docs:
test:
chore:
```

Example

```
feat(ticket): add ticket detail page
```

---

## Code Quality

This project uses

- ESLint
- Prettier
- Husky
- lint-staged
- EditorConfig

Every commit will automatically run formatting and lint validation.

---

## Deployment

Frontend deployment target

- Vercel (Preview)
- Vercel (Production)

CI/CD

GitHub Actions Check

---

## License

UNLICENSED

Copyright © 2026
