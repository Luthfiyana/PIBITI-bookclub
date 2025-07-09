// pages/BookDetailPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate untuk kembali

export default function BookDetailPage({ book, onAddToCart }) {
  // Terima onAddToCart
  const navigate = useNavigate(); // Hook untuk kembali

  if (!book) {
    return (
      <div className="text-center p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
        <p className="text-gray-600 mb-4">
          Buku tidak ditemukan atau belum dipilih.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
        >
          Kembali ke Daftar Buku
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start">
      <img
        src={book.cover}
        alt={`Cover ${book.title}`}
        className="w-64 h-80 object-cover rounded-lg shadow-md mb-6 md:mb-0 md:mr-8"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://placehold.co/250x350/cccccc/333333?text=No+Cover`;
        }}
      />
      <div className="flex-grow text-center md:text-left">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">{book.title}</h2>
        <p className="text-xl text-gray-700 mb-4">Oleh: {book.author}</p>
        <p className="text-gray-800 leading-relaxed mb-6">{book.description}</p>
        <button
          className="bg-[#00CFFF] hover:bg-[#00b8e0] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg text-lg"
          onClick={() => onAddToCart(book)} // Panggil onAddToCart dari prop
        >
          Tambah ke Keranjang
        </button>
        <button
          onClick={() => navigate(-1)} // Tombol kembali ke halaman sebelumnya
          className="ml-4 bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg text-lg"
        >
          Kembali
        </button>
      </div>
    </div>
  );
}
