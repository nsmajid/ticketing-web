# Folder Structure

> Dokumen ini menjelaskan struktur folder Frontend Ticketing System.
>
> Seluruh implementasi frontend wajib mengikuti struktur ini agar project tetap konsisten, mudah dipahami, dan mudah dikembangkan.

---

# Daftar Isi

1. Tujuan
2. Prinsip Struktur Folder
3. Root Structure
4. Folder src
5. Module Structure
6. Shared Folder
7. Kapan Membuat Folder Baru
8. Dependency Rule
9. Naming Convention
10. Best Practice

---

# 1. Tujuan

Struktur project dirancang agar:

- mudah dipahami developer baru
- mudah mencari file
- scalable
- modular
- konsisten dengan Backend Architecture

Project menggunakan pendekatan **Domain Based Module**.

---

# 2. Prinsip Struktur Folder

Project **tidak** mengelompokkan file berdasarkan jenis.

Contoh yang tidak digunakan.

```text
components/

pages/

api/

store/

views/
```

Semakin besar project akan semakin sulit dicari.

Project menggunakan pendekatan.

```text
Domain

↓

Ticket

↓

Semua file Ticket berada pada satu folder
```

Tujuan.

- seluruh fitur berada pada satu tempat
- mengurangi perpindahan folder
- mempermudah maintenance

---

# 3. Root Structure

```text
ticketing-web/

├── docker/
│
├── public/
│
├── src/
│
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
├── README.md
└── components.json
```

---

# docker/

Berisi kebutuhan development menggunakan Docker.

Contoh.

```text
docker/

Dockerfile

docker-compose.yml
```

Folder ini hanya digunakan saat development.

Vercel tidak menggunakan folder ini.

---

# public/

Berisi static file.

Contoh.

```text
favicon.ico

robots.txt

logo.png
```

Jangan menyimpan asset aplikasi pada folder ini apabila masih dapat dikelola melalui Vite.

---

# src/

Seluruh source code berada pada folder ini.

---

# 4. Struktur src

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

App.vue

main.ts
```

---

# app/

Berisi konfigurasi aplikasi.

Contoh.

```text
app/

config.ts

env.ts

theme.ts
```

Tidak diperbolehkan menyimpan Business Logic.

---

# assets/

Berisi asset aplikasi.

Contoh.

```text
images/

icons/

fonts/

svg/
```

Asset di-import melalui Vite.

---

# components/

Berisi reusable component yang dapat digunakan oleh seluruh module.

Contoh.

```text
components/

DataTable/

ConfirmDialog/

Loading/

Markdown/

PageHeader/

SearchBox/
```

Komponen pada folder ini **tidak boleh bergantung pada module tertentu**.

---

# composables/

Berisi reusable Composition API.

Contoh.

```text
useDebounce()

usePagination()

useToast()

useClipboard()

useLoading()
```

Composable bersifat reusable.

Apabila hanya digunakan oleh satu module, simpan pada folder module tersebut.

---

# layouts/

Layout utama aplikasi.

Contoh.

```text
GuestLayout.vue

AuthenticatedLayout.vue
```

Layout hanya bertanggung jawab terhadap struktur halaman.

---

# modules/

Berisi seluruh domain aplikasi.

Contoh.

```text
auth/

dashboard/

ticket/

ticket-comment/

user/

application/

master-data/
```

Seluruh fitur baru harus berada pada folder ini.

---

# router/

Berisi Vue Router.

Contoh.

```text
index.ts

guard.ts
```

Setiap module dapat memiliki route sendiri.

Router utama hanya melakukan registrasi.

---

# stores/

Berisi Global Store.

Contoh.

```text
auth.store.ts

theme.store.ts

notification.store.ts
```

Store pada folder ini digunakan oleh lebih dari satu module.

---

# lib/

Berisi library bersama.

Contoh.

```text
axios/

markdown/

constants/

validator/
```

Tidak diperbolehkan menyimpan Business Logic.

---

# styles/

Berisi style global.

Contoh.

```text
tailwind.css

theme.css

animation.css
```

---

# types/

Berisi shared TypeScript Type.

Contoh.

```text
api.ts

pagination.ts

user.ts
```

Type yang hanya digunakan oleh satu module disimpan pada module tersebut.

---

# utils/

Berisi helper sederhana.

Contoh.

```text
date.ts

number.ts

string.ts

file.ts
```

Utility harus bersifat stateless.

---

# App.vue

Root Component.

---

# main.ts

Entry Point aplikasi.

---

# 5. Module Structure

Seluruh module mengikuti struktur yang sama.

Contoh.

```text
ticket/

api/

components/

composables/

pages/

store/

types/
```

---

## api/

Berisi komunikasi REST API.

Contoh.

```text
ticket.api.ts
```

Seluruh request backend berada di sini.

Component tidak boleh memanggil Axios secara langsung.

---

## components/

Komponen khusus module.

Contoh.

```text
TicketCard.vue

TicketFilter.vue

TicketTable.vue
```

Komponen ini tidak boleh digunakan module lain.

Jika reusable, pindahkan ke src/components.

---

## composables/

Reusable logic khusus module.

Contoh.

```text
useTicketFilter()

useTicketForm()
```

---

## pages/

Halaman utama.

Contoh.

```text
TicketListPage.vue

TicketDetailPage.vue

TicketCreatePage.vue

TicketEditPage.vue
```

Page bertanggung jawab terhadap:

- memanggil Module API
- mengelola state lokal
- menyusun component

Page tidak boleh berisi reusable component.

---

## store/

Store khusus module.

Contoh.

```text
ticket.store.ts
```

Store ini hanya digunakan oleh module Ticket.

---

## types/

TypeScript Type khusus module.

Contoh.

```text
ticket.ts

ticket-form.ts
```

---

# 6. Shared Folder

Folder berikut dianggap shared.

```text
components/

composables/

stores/

lib/

styles/

types/

utils/
```

Seluruh module boleh menggunakan folder tersebut.

Sebaliknya folder shared tidak boleh bergantung kepada module.

---

# 7. Kapan Membuat Folder Baru

Gunakan panduan berikut.

## Digunakan lebih dari satu module

↓

Masukkan ke shared.

---

## Digunakan hanya Ticket

↓

Masukkan ke modules/ticket.

---

## Berhubungan dengan API

↓

api/

---

## Berhubungan dengan State

↓

store/

---

## Berhubungan dengan Layout

↓

layouts/

---

## Berhubungan dengan konfigurasi

↓

app/

---

# 8. Dependency Rule

Dependency hanya boleh mengarah ke bawah.

```text
Page

↓

Component

↓

Composable

↓

API

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
Page

↓

lib/axios
```

Seluruh komunikasi backend harus melalui folder api.

---

# 9. Naming Convention

## Folder

Gunakan.

```text
kebab-case
```

Contoh.

```text
ticket-comment

master-data
```

---

## Component

Gunakan.

```text
PascalCase
```

Contoh.

```text
TicketTable.vue

CommentCard.vue
```

---

## Composable

Gunakan prefix.

```text
use
```

Contoh.

```text
useTicket.ts

useDebounce.ts
```

---

## Store

Gunakan suffix.

```text
.store.ts
```

Contoh.

```text
auth.store.ts

ticket.store.ts
```

---

## API

Gunakan suffix.

```text
.api.ts
```

Contoh.

```text
ticket.api.ts
```

---

## Types

Gunakan nama entity.

Contoh.

```text
ticket.ts

comment.ts

user.ts
```

---

# 10. Best Practice

Selalu ikuti prinsip berikut.

- satu module memiliki satu tanggung jawab
- jangan membuat component terlalu besar
- reusable component dipindahkan ke shared
- business logic berada pada composable
- komunikasi backend hanya melalui api
- state global hanya menggunakan Pinia
- utility harus stateless
- hindari circular dependency

---

# Ringkasan

Frontend menggunakan pendekatan.

```
Domain Based Module
```

dengan struktur yang konsisten pada seluruh module.

Seluruh fitur baru wajib mengikuti struktur folder ini agar project tetap mudah dipelihara, scalable, dan konsisten dengan arsitektur Backend.