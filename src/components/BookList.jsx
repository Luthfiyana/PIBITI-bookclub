// src/components/BookList.jsx
import React from "react";
import BookCard from "./BookCard";
import SearchBar from "./SearchBar";

export default function BookList({
  books,
  onAddToCart,
  onViewDetail,
  searchQuery,
  onSearch,
  loading,
  error,
}) {
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg flex-grow flex flex-col min-h-0">
      {" "}
      {/* Tambah flex-grow, flex, flex-col, min-h-0 */}
      <div className="mb-6">
        <SearchBar onSearch={onSearch} />
      </div>
      {loading && (
        <p className="text-center text-gray-700 text-lg">Memuat buku...</p>
      )}
      {error && (
        <p className="text-center text-red-600 text-lg">Error: {error}</p>
      )}
      {!loading && !error && (
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 overflow-y-auto pr-2"
          style={{ maxHeight: "calc(100vh - 250px)" }}
        >
          {/* overflow-y-auto: membuat konten bisa di-scroll jika melebihi tinggi container */}
          {/* pr-2: padding kanan agar scrollbar tidak menutupi konten */}
          {/* maxHeight: 'calc(100vh - 250px)': Sesuaikan 250px ini. Ini adalah tinggi kira-kira header, footer, margin, dan search bar di atas. Anda mungkin perlu menyetelnya secara akurat. */}

          {filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onAddToCart={onAddToCart}
              onViewDetail={onViewDetail}
            />
          ))}
          {filteredBooks.length === 0 && searchQuery !== "" && (
            <p className="text-center col-span-full text-gray-500">
              Buku tidak ditemukan.
            </p>
          )}
          {filteredBooks.length === 0 && searchQuery === "" && (
            <p className="text-center col-span-full text-gray-500">
              Tidak ada buku yang tersedia.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
