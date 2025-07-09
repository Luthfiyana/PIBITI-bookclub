// src/pages/BookDetailPage.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api"; // Import instance Axios

export default function BookDetailPage({ onAddToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookDetail = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await api.get(`/books/${id}`); // Mengambil buku berdasarkan ID
        setBook(response.data);
      } catch (err) {
        console.error("Error fetching book detail:", err);
        setError(
          "Gagal memuat detail buku. Buku ini mungkin tidak ada atau server tidak berjalan."
        );
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBookDetail();
    } else {
      setLoading(false);
      setError("Tidak ada ID buku yang disediakan.");
    }
  }, [id]);

  if (loading) {
    return (
      <div className="text-center p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
        <p className="text-gray-700 text-lg">Memuat detail buku...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
        <p className="text-red-600 text-lg">Error: {error}</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
        >
          Kembali ke Daftar Buku
        </button>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="text-center p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
        <p className="text-gray-600 mb-4">Buku tidak ditemukan.</p>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
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
          onClick={() => onAddToCart(book)}
        >
          Tambah ke Keranjang
        </button>
        <button
          onClick={() => navigate(-1)}
          className="ml-4 bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
        >
          Kembali
        </button>
      </div>
    </div>
  );
}
