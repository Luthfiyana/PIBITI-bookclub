import React from "react";
import "./App.css"; // Baris ini bisa dihapus jika App.css kosong dan tidak digunakan

// Import komponen yang diperlukan
import Header from "./components/Header";
import BookList from "./components/BookList";
import Cart from "./components/Cart";
import BookDetailPage from "./components/BookDetailPage"; // Diimpor
import CheckoutForm from "./components/CheckoutForm"; // Diimpor
import Footer from "./components/Footer";

export default function App() {
  // Data dummy untuk daftar buku
  const dummyBooks = [
    {
      id: "1",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      cover: "https://placehold.co/150x200/cccccc/333333?text=Gatsby", // URL diperbaiki
      description: "A novel about the roaring twenties.",
    },
    {
      id: "2",
      title: "1984",
      author: "George Orwell",
      cover: "https://placehold.co/150x200/cccccc/333333?text=1984", // URL diperbaiki
      description: "A dystopian social science fiction novel.",
    },
    {
      id: "3",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      cover: "https://placehold.co/150x200/cccccc/333333?text=Mockingbird", // URL diperbaiki
      description:
        "A novel about the serious issues of rape and racial inequality.",
    },
    {
      id: "4",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      cover: "https://placehold.co/150x200/cccccc/333333?text=Pride", // URL diperbaiki
      description: "A romantic novel of manners written by Jane Austen.",
    },
    {
      id: "5",
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      cover: "https://placehold.co/150x200/cccccc/333333?text=Hobbit", // URL diperbaiki
      description: "A fantasy novel and children's book.",
    },
  ];

  // Data dummy untuk keranjang (tetap sama)
  const dummyCartItems = [
    {
      id: "c1",
      bookId: "1",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      cover: "https://placehold.co/100x150/cccccc/333333?text=Gatsby",
      quantity: 1,
    },
    {
      id: "c2",
      bookId: "3",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      cover: "https://placehold.co/100x150/cccccc/333333?text=Mockingbird",
      quantity: 1,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {/*
          Untuk melihat tampilan komponen tertentu,
          hapus komentar (uncomment) hanya satu komponen di bawah ini
          dan komentari komponen lainnya.
        */}

        {/* --- Tampilan Daftar Buku (Default) --- */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Daftar Buku Tersedia
        </h2>
        <BookList books={dummyBooks} />

        {/* --- Tampilan Keranjang --- */}
        {/* <Cart items={dummyCartItems} /> */}

        {/* --- Tampilan Detail Buku (menggunakan buku pertama sebagai contoh) --- */}
        {/* <BookDetailPage book={dummyBooks[0]} /> */}

        {/* --- Tampilan Formulir Peminjaman --- */}
        {/* <CheckoutForm /> */}
      </main>
      <Footer />
    </div>
  );
}
