// components/BookList.jsx
import React from "react";
import BookCard from "./BookCard";
import SearchBar from "./SearchBar";

export default function BookList({
  books,
  onAddToCart,
  onViewDetail,
  searchQuery,
  onSearch,
}) {
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <div className="mb-6">
        <SearchBar onSearch={onSearch} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredBooks.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onAddToCart={onAddToCart}
            onViewDetail={onViewDetail} // Teruskan prop ini ke BookCard
          />
        ))}
        {filteredBooks.length === 0 && (
          <p className="text-center col-span-full text-gray-500">
            Buku tidak ditemukan.
          </p>
        )}
      </div>
    </div>
  );
}
