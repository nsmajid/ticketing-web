# Vue Knowledge Base

> Dokumen ini merupakan panduan belajar Vue 3 yang digunakan pada Ticketing System.
>
> Dokumen ini tidak bertujuan mengajarkan seluruh fitur Vue, tetapi hanya konsep yang benar-benar digunakan pada project.
>
> Seluruh implementasi frontend akan mengacu pada dokumen ini.

---

# Daftar Isi

1. Cara Belajar Vue
2. Mental Model Vue
3. Vue Fundamentals
4. Composition API
5. Component
6. Props & Emits
7. Lifecycle
8. Reactive System
9. Computed & Watch
10. Composable
11. Pinia
12. Vue Router
13. Axios
14. Form Handling
15. File Upload
16. Rendering Flow
17. Best Practice
18. Roadmap Belajar

---

# 1. Cara Belajar Vue

Project ini menggunakan pendekatan:

> Belajar sambil membangun aplikasi.

Bukan.

```
Belajar Vue

↓

Membuat Todo App

↓

Belajar lagi

↓

Baru membuat Ticketing
```

Tetapi.

```
Belajar Login

↓

Belajar Dashboard

↓

Belajar Ticket

↓

Belajar Comment

↓

Belajar Attachment
```

Setiap fitur akan mengenalkan konsep Vue yang baru.

---

# 2. Mental Model Vue

Developer Laravel biasanya berpikir seperti berikut.

```
URL

↓

Controller

↓

Service

↓

Database

↓

Blade
```

Sedangkan Vue bekerja seperti berikut.

```
URL

↓

Vue Router

↓

Page

↓

API

↓

Laravel

↓

JSON

↓

Reactive Data

↓

Component

↓

HTML
```

Vue tidak memiliki Controller.

Vue tidak memiliki Blade.

Vue hanya memiliki Component.

---

# 3. Vue Fundamentals

Vue dibangun dari Component.

Misalnya.

```
Dashboard

│

├── Sidebar

├── Navbar

├── Statistic Card

├── Recent Ticket

└── Footer
```

Setiap bagian merupakan Component.

Semakin kecil Component, semakin mudah dipelihara.

---

# 4. Composition API

Project menggunakan Composition API.

Tidak menggunakan Options API.

Contoh.

```
ref()

reactive()

computed()

watch()

onMounted()
```

Composition API lebih fleksibel.

Lebih mudah dipisahkan menjadi reusable logic.

---

## ref()

Digunakan untuk menyimpan satu nilai.

Contoh.

```
loading

page

search

selectedTicket
```

Analogi.

```
PHP

↓

$loading
```

Tetapi reactive.

---

## reactive()

Digunakan untuk Object.

Contoh.

```
Form Ticket

↓

title

priority

category

description
```

---

# 5. Component

Component merupakan blok penyusun aplikasi.

Contoh.

```
Ticket Page

↓

Ticket Filter

↓

Ticket Table

↓

Pagination
```

Masing-masing merupakan Component.

---

# 6. Props & Emits

Props.

↓

Data dari Parent.

Emits.

↓

Event ke Parent.

Contoh.

```
Ticket Page

↓

Ticket Filter

↓

searchChanged()
```

---

# 7. Lifecycle

Lifecycle menjelaskan kapan Vue menjalankan suatu proses.

Yang paling sering digunakan.

```
onMounted()
```

Analogi.

```
Halaman selesai dibuat

↓

Ambil data API
```

Contoh.

```
Dashboard

↓

GET Dashboard Summary
```

---

# 8. Reactive System

Ini konsep paling penting.

Ketika data berubah.

```
Ticket Count

↓

Reactive

↓

UI berubah otomatis
```

Developer tidak perlu memanggil render.

Vue akan melakukannya sendiri.

---

# 9. Computed & Watch

## Computed

Digunakan ketika data merupakan hasil perhitungan.

Contoh.

```
Full Name

↓

First Name

+

Last Name
```

---

## Watch

Digunakan ketika perubahan data memicu proses.

Contoh.

```
Search berubah

↓

Reload Ticket
```

---

# 10. Composable

Composable adalah reusable logic.

Contoh.

```
usePagination()

useDebounce()

useLoading()
```

Analogi.

Utility Function.

Tetapi dapat menggunakan Composition API.

---

# 11. Pinia

Pinia merupakan Global State.

Analogi Laravel.

```
Auth::user()
```

↓

Vue.

```
authStore.user
```

Gunakan Pinia apabila.

- dipakai banyak Page
- dipakai banyak Component

Jangan gunakan Pinia untuk Form sederhana.

---

# 12. Vue Router

Vue Router menentukan halaman.

Contoh.

```
/tickets

↓

TicketListPage
```

Router tidak mengambil data.

Router hanya menentukan Component yang ditampilkan.

---

# 13. Axios

Axios digunakan untuk komunikasi Backend.

Seluruh request harus melalui.

```
Module API

↓

Axios

↓

Laravel
```

Component tidak boleh menggunakan Axios secara langsung.

---

# 14. Form Handling

Form menggunakan.

```
VeeValidate

+

Zod
```

Validation dilakukan di Frontend.

Validation tetap dilakukan kembali di Backend.

Frontend tidak menggantikan Backend Validation.

---

# 15. File Upload

Project menggunakan Attachment Engine.

Flow.

```
Drag File

↓

Upload

↓

Temporary

↓

Markdown

↓

Submit

↓

Permanent
```

Frontend hanya mengetahui.

```
attachment://ULID
```

Seluruh proses Attachment dikelola Backend.

---

# 16. Rendering Flow

Inilah alur paling penting.

```
Browser

↓

Vue Router

↓

Page

↓

onMounted()

↓

Module API

↓

Axios

↓

Laravel

↓

JSON

↓

ref()

↓

Reactive

↓

Component

↓

HTML
```

---

# 17. Best Practice

Selalu gunakan prinsip berikut.

- Component kecil
- Logic dipindahkan ke Composable
- API dipindahkan ke Module API
- Global State hanya di Pinia
- Jangan duplikasi logic
- Gunakan TypeScript Type
- Hindari Component terlalu besar

---

# 18. Roadmap Belajar

Urutan belajar pada project.

```
1. Component

↓

2. Template

↓

3. ref()

↓

4. reactive()

↓

5. onMounted()

↓

6. Axios

↓

7. Vue Router

↓

8. Props

↓

9. Emits

↓

10. Pinia

↓

11. Computed

↓

12. Watch

↓

13. Composable

↓

14. Form Validation

↓

15. File Upload

↓

16. Optimisasi
```

---

# Ringkasan

Project ini tidak bertujuan menguasai seluruh Vue.

Project ini bertujuan memahami konsep Vue yang benar-benar digunakan pada Ticketing System.

Seluruh implementasi akan memperkenalkan konsep baru secara bertahap.

Developer diharapkan membaca dokumen ini sebelum mengikuti implementasi fitur berikutnya.