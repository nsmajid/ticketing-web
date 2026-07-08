# Routing

> Dokumen ini menjelaskan konsep Routing pada Frontend Ticketing System.
>
> Routing bertanggung jawab menentukan halaman (Page) yang ditampilkan, mengatur Layout, melakukan Route Guard, dan mengelola navigasi aplikasi.
>
> Vue Router **bukan** pengganti Controller pada Laravel.

---

# Daftar Isi

1. Tujuan
2. Konsep Dasar
3. Mental Model
4. Routing Flow
5. Route Structure
6. Route Guard
7. Layout
8. Navigation
9. API Communication
10. Ticket Flow
11. Comment & Attachment Flow
12. Best Practice
13. Ringkasan

---

# 1. Tujuan

Routing digunakan untuk:

- menentukan halaman
- mengatur Layout
- mengatur Authentication
- mengatur Authorization
- mengatur navigasi

Routing **tidak** digunakan untuk:

- mengambil data API
- menyimpan business logic
- memproses form
- mengubah state aplikasi

---

# 2. Konsep Dasar

Laravel.

```
URL

↓

Route

↓

Controller

↓

Service

↓

Database

↓

Blade
```

Vue.

```
URL

↓

Vue Router

↓

Layout

↓

Page

↓

Component
```

Perbedaan utama.

Laravel Route menjalankan proses backend.

Vue Route hanya memilih halaman yang ditampilkan.

---

# 3. Mental Model

Misalkan user membuka.

```
/tickets
```

Yang terjadi.

```
Browser

↓

Vue Router

↓

TicketListPage

↓

Page tampil
```

Belum ada request API.

Kemudian.

```
TicketListPage

↓

onMounted()

↓

Ticket API

↓

Axios

↓

Laravel

↓

JSON

↓

Render Table
```

Artinya.

Vue Router hanya menentukan halaman.

Page yang bertanggung jawab mengambil data.

---

# 4. Routing Flow

Flow standar aplikasi.

```
Browser

↓

Vue Router

↓

Route Guard

↓

Layout

↓

Page

↓

Composable

↓

Module API

↓

Axios

↓

Laravel REST API

↓

JSON

↓

Reactive Data

↓

Render UI
```

---

# 5. Route Structure

Setiap module dapat memiliki file route sendiri.

Contoh.

```
modules/

ticket/

ticket.routes.ts
```

Isi.

```
Ticket Routes

↓

/tickets

/tickets/create

/tickets/:id

/tickets/:id/edit
```

Router utama hanya menggabungkan seluruh route.

```
router/

index.ts

↓

auth.routes

↓

ticket.routes

↓

user.routes
```

Semakin banyak module, router tetap bersih.

---

# 6. Route Guard

Route Guard dijalankan sebelum halaman ditampilkan.

Digunakan untuk.

- Login
- Permission
- Redirect

Flow.

```
Browser

↓

Route Guard

↓

Authenticated ?

↓

Ya

↓

Page

↓

Tidak

↓

Login
```

---

## Authentication Guard

Contoh.

```
/dashboard
```

↓

Belum Login.

↓

Redirect.

```
/login
```

---

## Guest Guard

Contoh.

```
/login
```

↓

Sudah Login.

↓

Redirect.

```
/dashboard
```

---

## Permission Guard

Contoh.

```
/users
```

↓

Permission.

```
user.view
```

↓

Tidak punya.

↓

403 Page

---

# 7. Layout

Layout ditentukan oleh Route.

Guest.

```
Login

Forgot Password
```

↓

Guest Layout

---

Authenticated.

```
Dashboard

Ticket

User

Application
```

↓

Authenticated Layout

---

Flow.

```
Route

↓

Layout

↓

Page
```

---

# 8. Navigation

Navigasi hanya mengubah halaman.

Misalnya.

```
Dashboard

↓

Ticket

↓

Ticket Detail

↓

Ticket Edit
```

Vue tidak melakukan reload halaman.

Browser tetap berada pada SPA.

---

Breadcrumb dibangun berdasarkan Route.

Contoh.

```
Dashboard

>

Ticket

>

Detail
```

---

# 9. API Communication

Route tidak mengambil data.

Contoh.

```
/tickets
```

↓

TicketListPage

↓

onMounted()

↓

Ticket API

↓

GET

/api/tickets

↓

Laravel

↓

JSON

↓

Ticket Table

```

---

# 10. Ticket Flow

Misalnya.

User membuka.

```

/tickets

```

Flow.

```

Browser

↓

Vue Router

↓

Ticket List Page

↓

onMounted()

↓

Ticket API

↓

GET /tickets

↓

Laravel

↓

TicketResource

↓

JSON

↓

Pinia (optional)

↓

Table

```

---

Kemudian user memilih.

```

Ticket #123

```

Flow.

```

Browser

↓

/tickets/123

↓

Vue Router

↓

Ticket Detail Page

↓

GET /tickets/123

↓

Laravel

↓

JSON

↓

Render

```

---

# 11. Comment & Attachment Flow

## Membuka Ticket

```

Browser

↓

/tickets/123

↓

Ticket Detail Page

↓

GET /tickets/123

↓

JSON

```

↓

Render.

```

Description

Timeline

Comment

Attachment

```

---

## Upload Attachment

User melakukan drag file.

```

Image

↓

AttachmentUploader

↓

POST

/attachments

↓

AttachmentService

↓

Temporary

↓

Return

attachment://ULID

```

Editor otomatis berubah.

```

![Image](attachment://ULID)

```

Belum ada Comment.

Belum ada Attachment Usage.

---

## Menulis Comment

User mengetik.

```

Halo

Silakan cek.

![image](attachment://ULID)

```

Masih berada pada Frontend.

Belum ada relasi database.

---

## Submit Comment

User klik.

```

Submit

```

↓

POST.

```

/tickets/123/comments

```

Body.

```

content

attachment://ULID

```

↓

Laravel.

```

Attachment Parser

↓

Extract ULID

↓

Attachment Usage

↓

Permanent

↓

Comment dibuat

↓

Timeline dibuat

```

↓

Response.

```

CommentResource

```

↓

Vue.

```

Comment List

↓

Reactive Update

↓

UI berubah

```

Frontend tidak pernah memanggil endpoint Attachment lagi.

Seluruh proses Attachment dikelola Backend.

---

# 12. Best Practice

Selalu ikuti prinsip berikut.

- Route hanya menentukan halaman.
- API dipanggil dari Module API.
- Gunakan Route Guard untuk Authentication.
- Gunakan Layout melalui Route.
- Jangan memanggil Axios di Router.
- Jangan menulis Business Logic pada Route Guard.
- Setiap module memiliki route sendiri.
- Router utama hanya melakukan registrasi.

---

# Ringkasan

Vue Router bertanggung jawab terhadap navigasi aplikasi.

Vue Router **bukan Controller**.

Alur aplikasi mengikuti pola berikut.

```

Route

↓

Layout

↓

Page

↓

Module API

↓

Axios

↓

Laravel

↓

JSON

↓

Reactive Data

↓

UI

```

Semua komunikasi Backend dilakukan setelah Page ditampilkan, bukan pada Router.
```
