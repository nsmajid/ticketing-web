# Frontend Architecture

> Dokumen ini menjelaskan arsitektur utama Frontend Ticketing System.
>
> Dokumen ini menjadi acuan seluruh pengembangan frontend dan wajib dibaca sebelum mengimplementasikan fitur baru.

---

# Daftar Isi

1. Tujuan Arsitektur
2. Karakteristik Aplikasi
3. High Level Architecture
4. Frontend Layer Architecture
5. Modular Architecture
6. Dependency Rule
7. Folder Structure
8. Request Lifecycle
9. State Management
10. Routing Architecture
11. API Integration
12. UI Architecture
13. Design Principles
14. Future Architecture

---

# 1. Tujuan Arsitektur

Arsitektur frontend dirancang untuk memenuhi kebutuhan berikut.

- Mudah dipelajari oleh developer baru.
- Konsisten dengan Backend Architecture.
- Modular.
- Mudah dikembangkan.
- Mudah diuji.
- Mendukung pertumbuhan aplikasi dalam jangka panjang.

Prioritas utama project.

1. Maintainability
2. Consistency
3. Reusability
4. Scalability

Frontend mengutamakan struktur yang jelas dibanding implementasi yang terlalu kompleks.

---

# 2. Karakteristik Aplikasi

Project menggunakan pendekatan berikut.

- Vue 3
- Vite
- TypeScript
- Composition API
- Domain Based Module
- REST API
- SPA (Single Page Application)
- Pinia State Management
- Vue Router
- TailwindCSS
- shadcn-vue

Project tidak menggunakan.

- Nuxt
- SSR
- Vuex

Keputusan ini dipilih untuk menjaga kompleksitas tetap rendah selama fase MVP.

---

# 3. High Level Architecture

```text
Browser

↓

Vue Application

↓

Vue Router

↓

Page

↓

Component

↓

Module API

↓

Axios

↓

Laravel REST API

↓

Database
```

Frontend tidak pernah mengakses database secara langsung.

Seluruh komunikasi dilakukan melalui REST API.

---

# 4. Frontend Layer Architecture

Frontend dibagi menjadi beberapa layer.

```text
Presentation Layer

↓

Application Layer

↓

Infrastructure Layer
```

---

## Presentation Layer

Berisi.

- Pages
- Layouts
- Components

Bertanggung jawab terhadap.

- Menampilkan UI
- Event User
- Binding Data

Tidak diperbolehkan.

- Memanggil API secara langsung
- Menyimpan Business Rule
- Menyimpan State Global

---

## Application Layer

Berisi.

- Module API
- Composables
- Pinia Store

Bertanggung jawab terhadap.

- Mengambil data dari Backend
- Mengelola State
- Menyediakan reusable logic

---

## Infrastructure Layer

Berisi.

- Axios
- Helper
- Markdown Utility
- Shared Library

Layer ini menjadi pondasi seluruh aplikasi.

---

# 5. Modular Architecture

Project menggunakan Domain Module.

```text
modules/

auth/

dashboard/

ticket/

ticket-comment/

user/

application/

master-data/
```

Setiap module memiliki struktur yang seragam.

```text
module/

api/

components/

composables/

pages/

store/

types/
```

Tujuannya.

- mudah dicari
- mudah dipahami
- mengurangi dependency
- menjaga konsistensi

---

# 6. Dependency Rule

Dependency hanya boleh mengarah ke bawah.

```text
Page

↓

Component

↓

Composable

↓

Module API

↓

Axios

↓

REST API
```

Tidak diperbolehkan.

```text
Component

↓

Axios
```

atau

```text
Component

↓

Pinia Mutation
```

atau

```text
Page

↓

Axios
```

Seluruh komunikasi backend harus melalui Module API.

---

# 7. Folder Structure

```text
src/

app/

assets/

components/

composables/

layouts/

modules/

router/

stores/

lib/

styles/

types/

utils/
```

Penjelasan.

## app

Konfigurasi aplikasi.

---

## assets

Image, font, svg.

---

## components

Reusable UI Component.

---

## composables

Reusable Composition API.

---

## layouts

Guest Layout.

Authenticated Layout.

---

## modules

Seluruh domain aplikasi.

---

## router

Vue Router.

---

## stores

Global Store.

---

## lib

Library umum.

Contoh.

- Axios
- Interceptor
- Markdown Parser
- Constant

---

## styles

Tailwind.

Theme.

---

## types

Shared TypeScript Type.

---

## utils

Utility Function.

---

# 8. Request Lifecycle

Seluruh request mengikuti alur berikut.

```text
User

↓

Page

↓

Composable (optional)

↓

Module API

↓

Axios

↓

REST API

↓

JSON

↓

Pinia

↓

Component Render
```

Frontend tidak pernah memanggil database.

---

# 9. State Management

State menggunakan Pinia.

Global State.

- Authentication
- Theme
- Notification

Module State.

- Ticket
- User
- Application

State hanya digunakan apabila data dipakai oleh lebih dari satu Component atau Page.

Data lokal tetap menggunakan ref() atau reactive().

---

# 10. Routing Architecture

Routing menggunakan Vue Router.

Route hanya bertanggung jawab menentukan.

- Page
- Layout
- Navigation

Route tidak mengambil data.

Contoh.

```text
/tickets

↓

TicketListPage

↓

GET /api/tickets
```

```text
/tickets/100

↓

TicketDetailPage

↓

GET /api/tickets/100
```

---

# 11. API Integration

Seluruh komunikasi Backend menggunakan Axios Instance.

```text
Page

↓

Ticket API

↓

Axios Instance

↓

REST API
```

Tidak diperbolehkan menggunakan axios langsung di Component.

---

# 12. UI Architecture

UI menggunakan.

- TailwindCSS
- shadcn-vue
- Lucide Icons

Prinsip utama.

- Clean
- Minimal
- Accessible
- Responsive

Referensi utama.

GitHub.

Warna utama.

- White
- Slate
- Primary

Status menggunakan.

- Success
- Warning
- Danger
- Info

---

# 13. Design Principles

Project mengikuti prinsip berikut.

## Separation of Concerns

UI dipisahkan dari komunikasi API.

---

## Reusable Component

Component dibuat sekecil mungkin.

---

## Domain Based Module

Seluruh fitur dikelompokkan berdasarkan domain.

---

## Composition over Duplication

Logic yang dapat digunakan ulang dipindahkan ke Composable.

---

## Single Source of Truth

Global State hanya berada pada Pinia.

---

## Consistency over Cleverness

Kode yang mudah dipahami lebih diutamakan dibanding implementasi yang terlalu kompleks.

---

# 14. Future Architecture

Arsitektur telah dipersiapkan untuk mendukung.

- Dark Mode
- Offline Cache
- WebSocket
- Push Notification
- PWA
- AI Assistant
- Multi Language

tanpa mengubah struktur dasar project.

---

# Architecture Decision

Project memilih.

✅ Vue + Vite

karena.

- ringan
- sederhana
- cepat dipelajari
- build sangat cepat
- cocok dengan REST API

Project tidak menggunakan Nuxt pada fase awal.

Apabila suatu saat membutuhkan.

- SEO
- SSR
- SSG

maka migrasi ke Nuxt dapat dilakukan tanpa perubahan besar pada struktur module.

---

# Ringkasan

Prinsip utama frontend.

- Modular
- Maintainable
- Consistent
- Reusable
- Scalable

Frontend dan Backend memiliki filosofi arsitektur yang sama.

Perbedaan utama hanya terletak pada tanggung jawab masing-masing layer.

Seluruh implementasi baru wajib mengikuti dokumen ini.
