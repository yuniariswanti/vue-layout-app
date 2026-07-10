## Integrasi API: Halaman Data Pengguna (Tugas Pertemuan 15)

Halaman `Users.vue` (menu **"Data Pengguna"** di sidebar) mengimplementasikan integrasi API sesuai Tugas 15. Detailnya:

- **Sumber API**: [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) 
- **Cara kerja**:
  - Menggunakan `fetch()` di dalam `onMounted()` untuk mengambil data user saat halaman pertama kali dimuat.
  - State `loading`, `error`, dan `users` (semua pakai `ref()`) mengatur tampilan: sedang memuat, gagal memuat, atau data berhasil ditampilkan.
  - Data ditampilkan dalam grid card responsif, menampilkan nama, username, email, telepon, perusahaan, dan kota setiap user.
- **Konsep yang dipraktikkan**: async/await, fetch API, reactive state (`ref`), lifecycle hook (`onMounted`), conditional rendering (`v-if`/`v-else`), dan tetap konsisten dengan Layout (header + sidebar).

