<h1 align="center">
 Rentago.com (Platform Sewa Menyewa Mobil Berbasis Web)
</h1>

<div align="center">
 <img src="./Seimbangin_logo_new.png" width="200" alt="Logo Rentago"/>
</div>

<h1 align="center">
Rentago.com (Platform Sewa Menyewa Mobil Berbasis Web)
</h1>

<p align="center">
 Rentago.com adalah platform rental mobil untuk memudahkan masyarakat Indonesia untuk menyewa mobil di dalam web. Dengan menyediakan pemesanan secara online, Rentago mempermudah proses menyewa mobil secara real time di dalam website. Tujuan kami adalah memudahkan pengguna dalam menyewa mobil. Saat ini Rentago masih menyediakan tampilan UI, beberapa interaksi, dan responsif web terhadap layar browser pengguna saja. Semoga kedepannya kami dapat menyelesaikan prototipe website ini.
</p>

<p align="center">
    <a href="#">
      <img src="https://img.shields.io/badge/status-prototipe-yellow" alt="Status Proyek">
    </a>
    <a href="#">
      <img src="https://img.shields.io/badge/license-MIT-blue" alt="Lisensi">
    </a>
</p>

---

## 🌐 Akses Demo & Akun Pengujian

Untuk mempermudah juri/penguji, kami telah menyediakan prototipe yang dapat diakses secara online serta akun demo.

- **Link Demo**: `Belum ada`
- **Link Postman / Dokumentasi API** : `Belum ada`
- **Email**: `admin@gmail.com`
- **Password**: `admin12345`

---

## ✨ Tampilan Web

<p align="center">
  <img src="https://via.placeholder.com/200x400.png?text=Halaman+Login" width="200" alt="Halaman Dashboard">
  <img src="https://via.placeholder.com/200x400.png?text=Halaman+Dashboard" width="200" alt="Halaman Booking">
  <img src="https://via.placeholder.com/200x400.png?text=Halaman+Tambah+Transaksi" width="200" alt="Halaman Detail Mobil">
</p>

---

## 📝 Status Prototipe

Repositori ini berisi prototipe untuk proyek final. Tidak semua fitur yang tercantum dalam deskripsi telah diimplementasikan sepenuhnya. Fokus kami untuk fase ini adalah menghadirkan fungsionalitas inti yang solid.

**Fitur yang Sudah Diimplementasikan:**
- [x] Responsive Web Layouting
- [x] Menu yang Interaktif
- [ ] Pencarian Mobil (Berdasarkan tujuan, tanggal mulai, dan tanggal akhir sewa mobil)
- [ ] Generate Booking Code
- [ ] Autentikasi Pengguna (Login & Register)

---

## 🌟 Fitur Aplikasi

Berikut adalah fitur-fitur yang kami rencanakan untuk Rentago.com:

### 1. Pembuatan Kode Booking Otomatis
- **Integrasi Code Generetor**: Memanfaatkan Automatic Code Generator untuk membaca dan mengekstrak data mobil yang di-booking pengguna secara otomatis, meminimalkan input manual.

### 2. Autentikasi Pengguna
- **Halaman Login dan Register**: Meminta input data pengguna seperti email dan password untuk menyimpan data aktivitas pengguna dan memudahkan pengguna untuk mendapatkan rekokmendasi mobil yang sesuai data aktivitas tersebut.

### 3. Booking atau Pesan Mobil secara Online
- **Pencarian Mobil**: Fitur inti untuk mencari mobil yang pengguna inginkan secara *real-time* dengan menampilkan detail mobil di hasil pencariannya.
- **Pratinjau Detail Mobil**: Pengguna dapat dengan mudah melihat detail mobil setelah meng-klik mobil yang akan disewa. Ini bertujuan agar pengguna tidak kecewa dengan hasil mobil yang dipilih di awal.

---

## 🛠️ Tech Stack
- **Frontend**: `HTML, CSS, Javascript, dan Tailwind CSS`
- **Backend**: `-`
- **Database**: `-`
- **AI**: `-`
- **Lainnya**: `-`

---

## 🚀 Cara Menjalankan Proyek Secara Lokal

### Pre-requisite
- Node.js (v18++)
- npm atau yarn
- Php
- composer
- Git

### Backend (PHP Laravel)

1.  **Clone repositori ini:**
    ```bash
    git clone [https://github.com/username/nama-repo.git](https://github.com/username/nama-repo.git)
    cd nama-repo 
    ```

2.  **Install dependency via Composer:**
    ```bash
    composer install
    ```

3.  **Salin file environment:**
    ```bash
    cp .env.example .env
    ```

4.  **Generate application key:**
    ```bash
    php artisan key:generate
    ```

5.  **Konfigurasi database di file `.env` kamu.**

6.  **Jalankan migrasi database:**
    ```bash
    php artisan migrate
    ```

7.  **Jalankan server lokal:**
    ```bash
    php artisan serve
    ```
    Backend akan berjalan di `http://localhost:8000`.

---

### Frontend (Tailwind CLI)

1.  **Pindah ke direktori frontend (jika terpisah):**
    ```bash
    # Jika frontend berada di folder terpisah, pindah ke folder tersebut
    # Contoh: cd ../frontend 
    ```

2.  **Install dependency Node.js:**
    ```bash
    npm install
    ```

3.  **Jalankan Tailwind CLI untuk memantau dan build CSS:**
    ```bash
    npm run watch
    ```
    Pastikan file HTML kamu sudah terhubung dengan file `output.css` yang dihasilkan oleh Tailwind.

---

## 👨‍💻 Tim Kami
- Hafiz Arul Zaky
- Luqman Nul Hakim

---
