# State Management

> Dokumen ini menjelaskan bagaimana Frontend Ticketing System mengelola data menggunakan Vue 3 dan Pinia.
>
> Tujuan utama State Management adalah menjaga data tetap konsisten, mengurangi request API yang tidak perlu, serta memisahkan tanggung jawab antara Local State, Module State, dan Global State.

---

# Daftar Isi

1. Tujuan
2. Konsep Dasar
3. Mental Model
4. Jenis State
5. Local State
6. Module State
7. Global State
8. Pinia
9. Lifecycle Data
10. Store vs Composable
11. Store vs Module API
12. Data Flow
13. Caching Strategy
14. Best Practice
15. Ringkasan

---

# 1. Tujuan

State Management digunakan untuk:

- menyimpan data yang digunakan ulang
- mengurangi request API
- menjaga sinkronisasi UI
- berbagi data antar Component
- berbagi data antar Page

State **bukan** tempat menyimpan seluruh data aplikasi.

---

# 2. Konsep Dasar

Frontend memiliki tiga jenis data.

```
Local State

↓

Module State

↓

Global State
```

Semakin tinggi levelnya, semakin lama data disimpan.

---

# 3. Mental Model

Laravel.

```
Request

↓

Controller

↓

Service

↓

Response
```

Setelah Response selesai.

↓

Data hilang.

---

Vue.

```
API

↓

Reactive State

↓

UI

↓

Masih tersimpan
```

Data tetap berada di memory browser sampai diubah atau halaman ditutup.

---

# 4. Jenis State

Project menggunakan tiga jenis state.

| Jenis | Scope |
|---------|--------|
| Local State | Satu Component |
| Module State | Satu Module |
| Global State | Seluruh Aplikasi |

---

# 5. Local State

Menggunakan.

```
ref()

reactive()
```

Digunakan apabila data hanya dipakai oleh satu Page atau Component.

Contoh.

```
Dialog Open

Loading

Search Input

Selected Tab

Current Page

Form Ticket
```

Local State merupakan pilihan pertama.

Jangan langsung menggunakan Pinia.

---

Contoh.

```
TicketCreatePage

↓

title

priority

description

attachment
```

Seluruh data tetap berada pada Page tersebut.

Tidak perlu Store.

---

# 6. Module State

Digunakan ketika data digunakan oleh beberapa Page dalam satu Module.

Contoh.

```
Ticket Module

↓

Ticket Filter

↓

Ticket List

↓

Pagination

↓

Sorting
```

Semuanya menggunakan Ticket Store.

Store ini hanya digunakan oleh Module Ticket.

---

Contoh lain.

```
User Module

↓

Current Filter

↓

Current Sorting

↓

Selected User
```

---

# 7. Global State

Global State digunakan oleh seluruh aplikasi.

Contoh.

```
Authentication

Theme

Notification

Sidebar

Language
```

Global Store disimpan pada.

```
src/stores
```

---

# 8. Pinia

Pinia merupakan Global State Management.

Pinia **bukan database frontend**.

Gunakan Pinia apabila.

- dipakai banyak halaman
- dipakai banyak component
- dipakai selama user menggunakan aplikasi

---

Contoh.

```
Auth Store

↓

User

Role

Permission

Token
```

Semua Page dapat mengakses Auth Store.

---

# 9. Lifecycle Data

Data mempunyai siklus hidup.

## Local

```
Page Dibuka

↓

API

↓

Render

↓

Page Ditutup

↓

Data Hilang
```

---

## Module

```
Page Dibuka

↓

API

↓

Store

↓

Page lain pada Module

↓

Menggunakan data yang sama
```

---

## Global

```
Login

↓

Auth Store

↓

Dashboard

↓

Ticket

↓

User

↓

Logout

↓

Store dibersihkan
```

---

# 10. Store vs Composable

Perbedaan utama.

## Store

Digunakan untuk.

```
State
```

Contoh.

```
Current User

Current Theme

Selected Ticket
```

---

## Composable

Digunakan untuk.

```
Logic
```

Contoh.

```
usePagination()

useDebounce()

useTicketFilter()

useMarkdown()
```

Composable boleh menggunakan.

```
ref()

watch()

computed()
```

Tetapi tidak menyimpan Global State.

---

# 11. Store vs Module API

Module API.

↓

Mengambil data.

Store.

↓

Menyimpan data.

Flow.

```
Page

↓

Ticket API

↓

Laravel

↓

JSON

↓

Ticket Store

↓

UI
```

Store tidak boleh memanggil Axios.

Seluruh komunikasi Backend berada pada Module API.

---

# 12. Data Flow

Flow standar aplikasi.

```
Browser

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

Store (optional)

↓

Reactive State

↓

Render UI
```

---

# 13. Caching Strategy

Gunakan Store sebagai cache sederhana.

Contoh.

```
Master Priority

Master Status

Master Category

Application Feature
```

Master Data jarang berubah.

Tidak perlu request setiap membuka halaman.

---

Sebaliknya.

```
Ticket Detail
```

Tidak perlu disimpan terlalu lama.

Selalu ambil data terbaru.

---

# 14. Best Practice

Gunakan Local State sebagai pilihan utama.

Gunakan Store apabila.

- data dipakai ulang
- data dipakai banyak Component
- data dipakai banyak Page

Gunakan Composable apabila.

- reusable logic
- bukan reusable data

Gunakan Module API untuk.

- komunikasi Backend

Jangan.

- menyimpan Form sederhana di Pinia
- memanggil Axios dari Store
- mencampur API dan State
- membuat Store terlalu besar

---

# 15. Ringkasan

Gunakan aturan berikut.

```
Apakah hanya dipakai satu Component?

↓

Ya

↓

Local State
```

---

```
Dipakai satu Module?

↓

Ya

↓

Module Store
```

---

```
Dipakai seluruh aplikasi?

↓

Ya

↓

Global Store
```

---

```
Apakah hanya reusable logic?

↓

Ya

↓

Composable
```

---

```
Apakah komunikasi Backend?

↓

Ya

↓

Module API
```

State Management yang baik membuat aplikasi lebih sederhana, mudah dipahami, dan mengurangi request API yang tidak diperlukan.