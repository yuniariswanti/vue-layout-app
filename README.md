# Vue Layout App — Praktikum Pertemuan 14

Project ini merupakan implementasi **Layouting Vue 3 + Tailwind CSS** sesuai materi praktikum, dengan tambahan **1 halaman baru (Portfolio)** untuk memenuhi tugas poin 2.

## Struktur Project

```
vue-layout-app/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── src/
    ├── main.js
    ├── App.vue
    ├── assets/
    │   └── main.css
    ├── components/
    │   ├── Header.vue
    │   ├── Sidebar.vue
    │   └── Layout.vue
    ├── router/
    │   └── index.js
    └── views/
        ├── Home.vue
        ├── About.vue
        ├── Contact.vue
        └── Portfolio.vue   <-- halaman baru
```

## Penjelasan Struktur Layout

- **Header.vue** — bagian atas (tetap tampil di semua halaman).
- **Sidebar.vue** — navigasi antar halaman (Home, About, Contact, Portfolio), sudah dibuat responsif (`w-full md:w-60`) sesuai bagian F di modul.
- **Layout.vue** — wrapper utama yang menggabungkan Header + Sidebar + `<slot />` untuk konten halaman.
- **views/** — setiap halaman (Home, About, Contact, Portfolio) dibungkus oleh `<Layout>` sehingga tampilannya konsisten.
- **router/index.js** — mengatur routing SPA menggunakan Vue Router, termasuk route `/portfolio` untuk halaman baru.

## Halaman Baru: Portfolio

Halaman `Portfolio.vue` ditambahkan sebagai pengembangan tampilan halaman baru (poin 2 tugas). Halaman ini:
- Tetap dibungkus oleh `Layout.vue` (header & sidebar konsisten).
- Menampilkan daftar proyek dalam bentuk grid card yang responsif (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).
- Menggunakan `ref()` dan `v-for` untuk merender data secara dinamis — sebagai variasi dari halaman statis (Home/About/Contact).
- 
**##Integrasi API: Halaman Data Pengguna (Tugas Pertemuan 15)**
Halaman Users.vue (menu "Data Pengguna" di sidebar) mengimplementasikan integrasi API sesuai Tugas 15. Detailnya:
Sumber API: JSONPlaceholder
Cara kerja:
Menggunakan fetch() di dalam onMounted() untuk mengambil data user saat halaman pertama kali dimuat.
State loading, error, dan users (semua pakai ref()) mengatur tampilan: sedang memuat, gagal memuat, atau data berhasil ditampilkan.
Data ditampilkan dalam grid card responsif, menampilkan nama, username, email, telepon, perusahaan, dan kota setiap user.
Konsep yang dipraktikkan: async/await, fetch API, reactive state (ref), lifecycle hook (onMounted), conditional rendering (v-if/v-else), dan tetap konsisten dengan Layout (header + sidebar).
