// pages/ReceiptPage.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link untuk navigasi kembali

export default function ReceiptPage({ receipt }) {
  if (!receipt) {
    return (
      <div className="text-center p-6 bg-white rounded-lg shadow-lg max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Tidak ada data peminjaman.
        </h2>
        <p className="text-gray-600 mb-6">
          Silakan ajukan peminjaman terlebih dahulu.
        </p>
        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
        >
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Struk Peminjaman Buku
      </h2>

      <div className="mb-6 border-b pb-4">
        <p className="text-lg text-gray-800">
          <span className="font-semibold">ID Transaksi:</span>{" "}
          {receipt.transactionId}
        </p>
        <p className="text-lg text-gray-800">
          <span className="font-semibold">Tanggal Peminjaman:</span>{" "}
          {receipt.borrowDate}
        </p>
      </div>

      <div className="mb-6 border-b pb-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Informasi Peminjam:
        </h3>
        <p className="text-gray-700">
          <span className="font-semibold">Nama:</span> {receipt.name}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Email:</span> {receipt.email}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Tanggal Pengambilan:</span>{" "}
          {receipt.pickupDate}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Waktu Pengambilan:</span>{" "}
          {receipt.pickupTime}
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Buku yang Dipinjam:
        </h3>
        {receipt.borrowedBooks.length === 0 ? (
          <p className="text-gray-500">Tidak ada buku dalam peminjaman ini.</p>
        ) : (
          <ul className="space-y-2">
            {receipt.borrowedBooks.map((book) => (
              <li
                key={book.id}
                className="text-gray-700 border-b last:border-b-0 pb-1"
              >
                - {book.title} oleh {book.author}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="text-center mt-8">
        <p className="text-lg text-gray-800 font-semibold mb-4">
          Terima kasih telah menggunakan layanan kami!
        </p>
        <Link
          to="/"
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
