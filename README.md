# Bookclub React Project

Sebuah aplikasi web "Bookclub" yang dikembangkan sebagai bagian dari pelatihan ReactJS PIBITI. Proyek ini dibangun untuk mendemonstrasikan penerapan materi dari Day 1 hingga Day 4, mencakup dasar-dasar React, hooks, routing, styling dengan Tailwind CSS, dan integrasi API.

## Fitur Proyek

### Day 2: React Hooks - State dan Side Effects

Berikut adalah pratinjau antarmuka setelah implementasi hooks di Day 2:
![Day 2 Preview](src\assets\Day2_Preview.png)

1. **useState:** Digunakan untuk:

- mengelola state lokal seperti: Data form (nama, email, tanggal).
- Daftar buku di keranjang.
- Menyediakan interaksi pada UI.

2. **useEffect:** Digunakan untuk:

- Menyimpan isi keranjang ke localStorage
- Memuat data keranjang dari localStorage saat halaman direfresh
- Mengubah judul halaman dinamis sesuai jumlah buku di keranjang

**Contoh Implementasi:**

- Komponen App.jsx: menerapkan useEffect untuk sinkronisasi cartItems
- Komponen CartAndForm.jsx: menggunakan useState untuk form input pengguna

## Kontributor

- luthfiyana

---
