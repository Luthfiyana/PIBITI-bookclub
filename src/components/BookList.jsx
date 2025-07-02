import React from "react";
import BookCard from "./BookCard";
import SearchBar from "./SearchBar"; // Impor SearchBar

export default function BookList({ books }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <div className="mb-6">
        <SearchBar />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
