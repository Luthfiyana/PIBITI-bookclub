# Bookclub React Project

Sebuah aplikasi web "Bookclub" yang dikembangkan sebagai bagian dari pelatihan ReactJS PIBITI. Proyek ini dibangun untuk mendemonstrasikan penerapan materi dari Day 1 hingga Day 4, mencakup dasar-dasar React, hooks, routing, styling dengan Tailwind CSS, dan integrasi API.

## Fitur Proyek

### Day 1: React Vite & Components

- **Setup Proyek:** Menggunakan Vite untuk inisialisasi proyek React yang cepat.
- **Struktur Komponen:** Membangun antarmuka pengguna dengan komponen React modular dan dapat digunakan kembali:
  - `App.jsx`: Komponen utama yang mengelola layout dan menampilkan komponen lainnya.
  - `Header.jsx`: Bagian atas halaman dengan logo dan navigasi.
  - `Footer.jsx`: Bagian bawah halaman.
  - `BookList.jsx`: Menampilkan daftar buku.
  - `BookCard.jsx`: Menampilkan detail setiap buku dalam bentuk kartu.
  - `BookDetailPage.jsx`: Menampilkan detail lengkap satu buku (saat ini di-_hardcode_).
  - `Cart.jsx`: Menampilkan item di keranjang peminjaman.
  - `CartItem.jsx`: Menampilkan detail setiap item di keranjang.
  - `CheckoutForm.jsx`: Formulir untuk proses peminjaman.
  - `SearchBar.jsx`: Input untuk pencarian buku.
- **Data Dummy:** Penggunaan data buku dan keranjang dummy untuk demonstrasi awal.

### Day 2: React Hooks - State dan Side Effects

Berikut adalah pratinjau antarmuka setelah implementasi hooks di Day 2:
![Day 2 Preview](src/assets/Day2_Preview.png)

1. **useState:** Digunakan untuk:

   - Mengelola state lokal seperti: Data form (nama, email, tanggal).
   - Daftar buku di keranjang.
   - Menyediakan interaksi pada UI.

2. **useEffect:** Digunakan untuk:
   - Menyimpan isi keranjang ke localStorage.
   - Memuat data keranjang dari localStorage saat halaman direfresh.
   - Mengubah judul halaman dinamis sesuai jumlah buku di keranjang.

**Contoh Implementasi:**

- Komponen `App.jsx`: menerapkan `useEffect` untuk sinkronisasi `cartItems`.
- Komponen `CartAndForm.jsx`: menggunakan `useState` untuk form input pengguna.

### Day 3: React Router & Tailwind CSS (Coming Soon)

- **React Router:** Implementasi navigasi antar halaman (e.g., Beranda, Daftar Buku, Detail Buku, Keranjang, About).
- **Tailwind CSS:** Styling aplikasi menggunakan utilitas Tailwind CSS untuk desain yang responsif dan konsisten.
- **Contoh Implementasi:** (Akan diisi setelah materi Day 3 selesai)

### Day 4: React API & Axios (Coming Soon)

- **Integrasi API:** Mengambil data dari _free public API_ menggunakan Axios untuk menampilkan daftar buku dinamis atau detail lainnya.
- **Display Data:** Menampilkan data yang diambil dari API di UI aplikasi.
- **Contoh API yang Akan Digunakan:** (Akan diisi setelah materi Day 4 selesai, contoh: JSONPlaceholder, Open Library API, dll.)

## Struktur Repository (Branching Strategy)

Repository ini diatur dengan strategi _branching_ yang mencerminkan progres harian bootcamp:

- `main`: _Branch_ utama yang akan selalu berisi versi proyek yang paling stabil dan terkini (hasil gabungan dari semua hari).
- `day-1`: Berisi implementasi materi Day 1 (React Vite dan Components).
- `day-2`: Berisi implementasi materi Day 2 (React Hooks).
- `day-3`: Akan berisi implementasi materi Day 3 (React Router dan Tailwind CSS).
- `day-4`: Akan berisi implementasi materi Day 4 (React API dan Axios).

Setiap _branch_ harian akan di-_merge_ ke `main` setelah pekerjaan hari tersebut selesai.

## Teknologi yang Digunakan

- **ReactJS**
- **Vite**
- **Tailwind CSS** (untuk _styling_, akan diimplementasikan di Day 3)
- **React Router Dom** (untuk _routing_, akan diimplementasikan di Day 3)
- **Axios** (untuk _HTTP requests_, akan diimplementasikan di Day 4)
- **JavaScript**

## Cara Menjalankan Proyek (Lokal)

Pastikan Anda memiliki [Node.js](https://nodejs.org/) dan [npm](https://www.npmjs.com/) terinstal di sistem Anda.

1.  **Clone repositori:**

    ```bash
    git clone [https://github.com/Luthfiyana/PIBITI-bookclub.git](https://github.com/Luthfiyana/PIBITI-bookclub.git)
    cd PIBITI-bookclub
    ```

2.  **Install dependensi:**

    ```bash
    npm install
    ```

3.  **Jalankan aplikasi di development mode:**

    ```bash
    npm run dev
    ```

4.  Buka browser Anda dan kunjungi `http://localhost:5173` (atau port lain yang ditunjukkan oleh Vite).

---

## Kontributor

- luthfiyana
