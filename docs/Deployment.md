# Deployment

> Dokumen ini menjelaskan strategi deployment Frontend Ticketing System.
>
> Frontend menggunakan Docker untuk development lokal dan Vercel sebagai platform deployment.
>
> Deployment dirancang agar sederhana, otomatis, dan mudah dipelihara.

---

# Daftar Isi

1. Tujuan
2. Deployment Strategy
3. Development Environment
4. Docker Development
5. Environment Configuration
6. Build Process
7. Vercel Deployment
8. CI/CD Workflow
9. Branch Strategy
10. Release Flow
11. Future Deployment
12. Best Practice

---

# 1. Tujuan

Deployment dirancang agar.

- mudah digunakan developer baru
- mudah melakukan staging
- deployment otomatis
- rollback sederhana
- environment terpisah
- scalable

---

# 2. Deployment Strategy

Frontend dan Backend dideploy secara terpisah.

```text
Browser

↓

Frontend (Vercel)

↓

REST API

↓

Backend (Cloud Run)

↓

Database
```

Frontend tidak berada dalam container production.

Docker hanya digunakan untuk development.

---

# 3. Development Environment

Development menggunakan Docker.

```text
Developer

↓

Docker

↓

Node

↓

Vite Dev Server

↓

Browser
```

Frontend berjalan pada.

```
http://localhost:5173
```

Backend.

```
http://localhost:8000
```

---

# 4. Docker Development

Project memiliki folder.

```text
docker/

Dockerfile

docker-compose.yml
```

Developer cukup menjalankan.

```bash
docker compose up -d
```

Kemudian membuka.

```
http://localhost:5173
```

Hot Reload tetap berjalan.

Tidak perlu install Node secara lokal.

---

# 5. Environment Configuration

Environment menggunakan file.

```
.env.local

.env.development

.env.staging

.env.production
```

Contoh.

## Local

```env
VITE_APP_NAME=Ticketing

VITE_API_URL=http://localhost:8000/api
```

---

## Staging

```env
VITE_APP_NAME=Ticketing Staging

VITE_API_URL=https://api-staging.example.com/api
```

---

## Production

```env
VITE_APP_NAME=Ticketing

VITE_API_URL=https://api.example.com/api
```

Semua Environment Variable yang digunakan oleh Vite wajib diawali dengan.

```
VITE_
```

Contoh.

```
VITE_API_URL

VITE_APP_NAME

VITE_UPLOAD_LIMIT
```

---

# 6. Build Process

Vercel melakukan build secara otomatis.

Flow.

```text
GitHub

↓

Clone Repository

↓

npm install

↓

npm run build

↓

dist/

↓

Deploy
```

Docker tidak digunakan pada proses ini.

---

# 7. Vercel Deployment

Vercel menjadi platform utama deployment frontend.

Build Command.

```
npm run build
```

Output Directory.

```
dist
```

Framework.

```
Vite
```

Setelah build berhasil.

Frontend langsung dapat diakses.

```
https://staging.example.com
```

atau.

```
https://app.example.com
```

---

# 8. CI/CD Workflow

Deployment dilakukan otomatis melalui GitHub.

Flow.

```text
Developer

↓

Push

↓

GitHub

↓

Vercel

↓

Build

↓

Deploy

↓

Ready
```

Tidak diperlukan GitHub Action untuk Frontend.

Vercel telah menyediakan CI/CD bawaan.

---

# 9. Branch Strategy

Project menggunakan branch berikut.

```
main
```

Production.

---

```
develop
```

Staging.

---

```
feature/*
```

Pengembangan fitur.

---

Deployment.

```
feature/*
```

↓

Preview Deployment

---

```
develop
```

↓

Staging Deployment

---

```
main
```

↓

Production Deployment

---

# 10. Release Flow

Flow release.

```text
feature/ticket-comment

↓

Pull Request

↓

develop

↓

Auto Deploy Staging

↓

Testing

↓

Merge

↓

main

↓

Production
```

Rollback dilakukan melalui Vercel Dashboard.

---

# 11. Future Deployment

Arsitektur telah dipersiapkan untuk mendukung.

- CDN
- Multi Environment
- Multi Region
- Edge Middleware
- Preview Deployment
- Analytics
- Monitoring

tanpa mengubah struktur project.

---

# 12. Best Practice

Selalu gunakan prinsip berikut.

- Docker hanya untuk development
- Jangan menyimpan secret di repository
- Gunakan Environment Variable
- Gunakan Preview Deployment sebelum merge
- Pisahkan Frontend dan Backend
- Gunakan HTTPS pada staging dan production
- Jangan hardcode URL API
- Selalu deploy melalui GitHub

---

# Ringkasan

Deployment Frontend menggunakan arsitektur berikut.

```text
Development

Docker

↓

Vite

↓

Browser
```

```text
Staging / Production

GitHub

↓

Vercel

↓

Build

↓

Deploy
```

Frontend tetap sederhana selama development dan memiliki deployment otomatis tanpa memerlukan konfigurasi server tambahan.
