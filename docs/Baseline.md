# Frontend Baseline

> Last Update : 2026-07-08

---

# Overview

Frontend Ticketing App dibangun menggunakan modern enterprise stack yang mendukung scalability, maintainability, dan developer experience.

Project ini mengikuti pendekatan:

- Vue 3 Composition API
- TypeScript
- Vite
- Docker Development
- TailwindCSS v4
- shadcn-vue
- Reka UI
- Pinia
- Vue Router
- REST API

---

# Tech Stack

| Layer                | Technology                    |
| -------------------- | ----------------------------- |
| Framework            | Vue 3.5                       |
| Language             | TypeScript                    |
| Build Tool           | Vite 8                        |
| Runtime              | Node 22 Alpine                |
| Package Manager      | PNPM 11                       |
| Styling              | TailwindCSS v4                |
| UI Library           | shadcn-vue                    |
| Primitive Components | Reka UI                       |
| Icons                | @lucide/vue                   |
| State Management     | Pinia                         |
| Routing              | Vue Router                    |
| HTTP Client          | Axios                         |
| Form Validation      | VeeValidate + Zod _(planned)_ |
| Date Utility         | date-fns _(planned)_          |

---

# Development Environment

Semua proses development dilakukan melalui Docker.

Developer **tidak perlu menginstall NodeJS secara lokal**.

Yang dibutuhkan hanya:

- Docker Desktop
- Git
- VS Code

---

# Run Project

Start container

```bash
docker compose up
```

Background mode

```bash
docker compose up -d
```

Stop

```bash
docker compose down
```

Remove volume

```bash
docker compose down -v
```

---

# Build

Development

```bash
docker compose exec frontend pnpm dev
```

Production

```bash
docker compose exec frontend pnpm build
```

---

# Package Installation

Semua package harus diinstall melalui container.

Contoh:

```bash
docker compose exec frontend pnpm add axios
```

Dev Dependency

```bash
docker compose exec frontend pnpm add -D eslint
```

---

# UI Components

Project menggunakan shadcn-vue.

Primitive component yang sudah tersedia:

## Base

- Button
- Input
- Label
- Textarea
- Select
- Card
- Badge
- Avatar
- Skeleton
- Tooltip

## Overlay

- Dialog
- Alert Dialog
- Dropdown Menu
- Sheet
- Popover

## Data Display

- Table
- Pagination
- Scroll Area
- Separator
- Aspect Ratio

## Navigation

- Breadcrumb
- Tabs
- Accordion
- Collapsible
- Menubar

---

# Folder Convention

Source code berada pada:

```
src/
```

UI Component berada pada:

```
src/components/ui
```

Utility

```
src/lib
```

Assets

```
src/assets
```

---

# Alias

Gunakan alias:

```
@
```

Contoh:

```ts
import { Button } from '@/components/ui/button'
```

Jangan menggunakan relative path:

```ts
../../../components
```

---

# Docker Convention

Semua command dijalankan melalui Docker.

Benar

```bash
docker compose exec frontend pnpm build
```

Salah

```bash
pnpm build
```

---

# Git Convention

Setiap milestone:

```
git add .
git commit
git push
```

Commit mengikuti Conventional Commit.

Contoh

```
feat(frontend): add routing

feat(frontend): add auth layout

fix(frontend): resolve docker volume issue

refactor(frontend): simplify app layout
```

---

# Current Milestone

✅ Repository

✅ Vue Bootstrap

✅ Docker Development

✅ Development Verification

✅ Styling Foundation

---

# Planned Milestone

- Project Structure
- Routing
- Pinia
- Axios
- Authentication
- Dashboard Layout
- User Management
- Ticket Management

---

# Validation Checklist

Development

- [x] Docker
- [x] Hot Reload
- [x] Build Success
- [x] TypeScript
- [x] TailwindCSS
- [x] shadcn-vue
- [x] Alias
- [x] UI Components

Production

- [x] Vite Build
- [ ] Vercel Deployment

---

# Notes

- Gunakan Docker untuk seluruh proses development.
- Jangan menginstall dependency langsung dari host machine.
- Gunakan alias `@`.
- Ikuti struktur folder yang telah ditentukan.
