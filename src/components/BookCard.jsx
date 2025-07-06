// components/BookCard.jsx
import React from "react";

export default function BookCard({ book, onAddToCart, onViewDetail }) {
  // Tambahkan onViewDetail
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
      <img
        src={book.cover}
        alt={`Cover ${book.title}`}
        className="w-full h-48 object-cover rounded-t-lg"
        onError={(e) => {
          e.target.onerror = null; // prevents infinite loop
          e.target.src = `https://placehold.co/150x200/cccccc/333333?text=No+Cover`; // Placeholder if image fails
        }}
      />
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {book.title}
          </h3>
          <p className="text-gray-600 text-sm mb-3">Oleh: {book.author}</p>
          <p className="text-gray-700 text-sm line-clamp-3">
            {book.description}
          </p>
        </div>
        <button
          className="mt-4 w-full bg-[#7F00FF] hover:bg-[#6f00e6] text-white font-bold py-2 px-4 rounded-md transition-colors duration-300 shadow-md"
          onClick={() => onViewDetail(book)} // Panggil onViewDetail saat diklik
        >
          Lihat Detail
        </button>
        <button
          className="mt-4 w-full bg-[#E100FF] hover:bg-[#c100dd] text-white font-bold py-2 px-4 rounded-md transition-colors duration-300 shadow-md"
          onClick={() => onAddToCart(book)}
        >
          Tambah ke Keranjang
        </button>
      </div>
    </div>
  );
}
