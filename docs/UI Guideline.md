# UI Guideline

> Dokumen ini menjelaskan standar User Interface (UI) pada Frontend Ticketing System.
>
> Seluruh halaman, component, dan module wajib mengikuti panduan ini agar tampilan aplikasi tetap konsisten, mudah dipahami, dan nyaman digunakan.

---

# Daftar Isi

1. Filosofi UI
2. Design Principles
3. Color System
4. Typography
5. Spacing
6. Border Radius
7. Shadow
8. Icon
9. Layout
10. Component Pattern
11. Form Guideline
12. Table Guideline
13. Badge & Status
14. Button
15. Empty State
16. Loading
17. Responsive
18. Accessibility
19. Future UI

---

# 1. Filosofi UI

UI mengikuti prinsip berikut.

- Bersih
- Minimalis
- Fokus pada informasi
- Konsisten
- Mudah dipelajari
- Cepat digunakan

Referensi utama.

- GitHub
- Linear
- shadcn/ui

Ticketing System merupakan aplikasi produktivitas.

Visual tidak boleh mengganggu pekerjaan pengguna.

---

# 2. Design Principles

Seluruh halaman mengikuti prinsip berikut.

## White Space

Gunakan ruang kosong yang cukup.

Jangan memenuhi layar dengan terlalu banyak informasi.

---

## Consistency

Button.

Table.

Dialog.

Spacing.

Typography.

Harus konsisten di seluruh aplikasi.

---

## Hierarchy

Informasi terpenting harus terlihat lebih dahulu.

Contoh.

```
Judul Ticket

↓

Status

↓

Priority

↓

Description

↓

Timeline

↓

Comment
```

---

## Simplicity

Kurangi dekorasi.

Perbanyak informasi.

---

# 3. Color System

Gunakan maksimal tiga warna utama.

Primary.

```
Blue
```

Neutral.

```
Slate
```

Background.

```
White
```

---

## Semantic Color

Gunakan warna hanya untuk menyampaikan arti.

| Status | Warna |
|---------|--------|
| Success | Green |
| Warning | Amber |
| Danger | Red |
| Info | Blue |
| Neutral | Slate |

---

Jangan menggunakan warna sebagai dekorasi.

---

# 4. Typography

Gunakan font bawaan shadcn.

```
Inter
```

Hierarchy.

| Element | Size |
|----------|------|
| H1 | 30px |
| H2 | 24px |
| H3 | 20px |
| H4 | 18px |
| Body | 14px |
| Small | 12px |

---

Gunakan maksimal dua tingkat penekanan.

- Normal
- Bold

Hindari penggunaan terlalu banyak variasi font.

---

# 5. Spacing

Gunakan skala Tailwind.

```
2

4

6

8

12

16

20

24
```

Contoh.

```
Card Padding

24px

Section Gap

32px

Button Gap

8px
```

Gunakan spacing yang konsisten.

---

# 6. Border Radius

Gunakan radius bawaan shadcn.

```
rounded-lg
```

Jangan mencampur berbagai ukuran radius.

---

# 7. Shadow

Gunakan shadow seperlunya.

```
shadow-sm
```

Card.

Dialog.

Dropdown.

Tidak semua component membutuhkan shadow.

---

# 8. Icon

Gunakan.

```
Lucide Vue
```

Icon hanya membantu identifikasi.

Bukan dekorasi.

---

Ukuran.

```
16

18

20
```

Hindari icon terlalu besar.

---

# 9. Layout

Project menggunakan dua layout.

```
Guest Layout

Authenticated Layout
```

---

## Guest

Digunakan untuk.

- Login
- Forgot Password

---

## Authenticated

Terdiri dari.

```
Sidebar

↓

Navbar

↓

Breadcrumb

↓

Content

↓

Footer
```

Sidebar tetap berada di kiri.

Navbar selalu berada di atas.

---

# 10. Component Pattern

Setiap halaman mengikuti pola berikut.

```
Page Header

↓

Toolbar

↓

Content

↓

Pagination
```

Contoh Ticket.

```
Title

↓

Filter

↓

Table

↓

Pagination
```

---

# 11. Form Guideline

Urutan field.

```
Label

↓

Input

↓

Helper Text

↓

Validation Message
```

---

Validation muncul tepat di bawah field.

---

Field wajib menggunakan.

```
*

```

---

Gunakan placeholder seperlunya.

---

# 12. Table Guideline

Table merupakan component utama aplikasi.

Gunakan.

- Sort
- Pagination
- Search
- Empty State

Kolom utama.

```
Ticket Number

Title

Priority

Status

Reporter

Updated At
```

Action berada di kolom terakhir.

---

# 13. Badge & Status

Gunakan Badge.

Contoh.

```
Draft

Submitted

Reviewed

Assigned

Resolved

Closed
```

Status harus menggunakan warna yang konsisten.

Contoh.

```
Draft

↓

Gray

Submitted

↓

Blue

Resolved

↓

Green

Closed

↓

Slate
```

---

# 14. Button

Jenis Button.

Primary.

```
Create

Save

Submit
```

Secondary.

```
Cancel

Back
```

Danger.

```
Delete
```

Ghost.

```
Icon

Toolbar
```

---

Gunakan maksimal satu Primary Button pada satu area.

---

# 15. Empty State

Apabila data kosong.

Tampilkan.

- Icon
- Judul
- Deskripsi
- Action

Contoh.

```
Belum ada Ticket

↓

Buat Ticket Baru
```

---

Jangan tampilkan table kosong.

---

# 16. Loading

Gunakan.

Skeleton.

Bukan Spinner.

Spinner hanya digunakan untuk proses singkat.

Misalnya.

```
Save

Delete

Upload
```

Loading halaman.

↓

Skeleton.

---

# 17. Responsive

Breakpoint mengikuti Tailwind.

```
sm

md

lg

xl

2xl
```

Sidebar.

Desktop.

↓

Tetap.

Mobile.

↓

Drawer.

---

Table.

Mobile.

↓

Horizontal Scroll.

---

# 18. Accessibility

Gunakan.

- Keyboard Navigation
- Focus Ring
- aria-label
- Contrast yang cukup

Icon Button wajib memiliki tooltip.

---

# 19. Future UI

UI dipersiapkan untuk mendukung.

- Dark Mode
- Theme
- High Contrast
- Multi Language
- PWA
- Mobile App

tanpa mengubah struktur dasar.

---

# Ringkasan

Prinsip utama UI.

- Clean
- Consistent
- Information First
- Minimal Color
- Reusable Component

Frontend harus terasa seperti satu aplikasi utuh, bukan kumpulan halaman yang dibuat dengan gaya berbeda.