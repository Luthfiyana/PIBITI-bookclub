// App.jsx
import React, { useState, useEffect } from "react";
import "./App.css";

import { Routes, Route, useNavigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import BookList from "./components/BookList";
import CartAndForm from "./components/CartAndForm"; // Tetap import
import BookDetailPage from "./components/BookDetailPage";
import ReceiptPage from "./components/ReceiptPage";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [borrowReceipt, setBorrowReceipt] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    document.title = `BookClub (${cartItems.length})`;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  function handleAddToCart(book) {
    const alreadyInCart = cartItems.some((item) => item.id === book.id);
    if (!alreadyInCart) {
      setCartItems((prev) => [...prev, book]);
    }
  }

  function handleRemoveFromCart(itemId) {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  }

  function handleClearCart() {
    setCartItems([]);
  }

  function handleViewBookDetail(book) {
    setSelectedBook(book);
    navigate(`/book/${book.id}`);
  }

  function handleSubmitBorrow(borrowerInfo) {
    if (cartItems.length === 0) {
      alert("Keranjang peminjaman kosong!");
      return;
    }

    const receiptData = {
      ...borrowerInfo,
      borrowedBooks: [...cartItems],
      borrowDate: new Date().toLocaleDateString(),
      transactionId: `TX-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    };
    setBorrowReceipt(receiptData);
    handleClearCart();
    navigate("/receipt");
  }

  const dummyBooks = [
    // ... (data dummyBooks tetap sama)
    {
      id: "1",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      cover: "https://placehold.co/150x200/cccccc/333333?text=Gatsby",
      description: "Sebuah novel tentang era dua puluhan yang gemerlap.",
    },
    {
      id: "2",
      title: "1984",
      author: "George Orwell",
      cover: "https://placehold.co/150x200/cccccc/333333?text=1984",
      description: "Sebuah novel fiksi ilmiah sosial distopia.",
    },
    {
      id: "3",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      cover: "https://placehold.co/150x200/cccccc/333333?text=Mockingbird",
      description:
        "Sebuah novel tentang isu-isu serius pemerkosaan dan ketidaksetaraan rasial.",
    },
    {
      id: "4",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      cover:
        "https://placehold.co/150x200/cccccc/333333?text=Pride%26Prejudice",
      description:
        "Sebuah novel romantis tentang tata krama yang ditulis oleh Jane Austen.",
    },
    {
      id: "5",
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      cover: "https://placehold.co/150x200/cccccc/333333?text=Catcher",
      description: "Sebuah novel tentang kecemasan dan keterasingan remaja.",
    },
    {
      id: "6",
      title: "Moby Dick",
      author: "Herman Melville",
      cover: "https://placehold.co/150x200/cccccc/333333?text=MobyDick",
      description: "Kisah petualangan ekspedisi perburuan paus.",
    },
    {
      id: "7",
      title: "War and Peace",
      author: "Leo Tolstoy",
      cover: "https://placehold.co/150x200/cccccc/333333?text=War%26Peace",
      description: "Sebuah novel sejarah epik karya Leo Tolstoy.",
    },
    {
      id: "8",
      title: "The Odyssey",
      author: "Homer",
      cover: "https://placehold.co/150x200/cccccc/333333?text=Odyssey",
      description:
        "Sebuah puisi epik tentang perjalanan panjang pahlawan Odysseus pulang ke rumah.",
    },
    {
      id: "9",
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      cover:
        "https://placehold.co/150x200/cccccc/333333?text=Crime%26Punishment",
      description:
        "Sebuah novel psikologis yang menyelami dilema moral seorang mantan mahasiswa.",
    },
    {
      id: "10",
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      cover: "https://placehold.co/150x200/cccccc/333333?text=Hobbit",
      description: "Sebuah novel fantasi tentang petualangan Bilbo Baggins.",
    },
    {
      id: "11",
      title: "Alice's Adventures in Wonderland",
      author: "Lewis Carroll",
      cover: "https://placehold.co/150x200/cccccc/333333?text=Alice",
      description:
        "Kisah aneh tentang seorang gadis yang jatuh ke dunia ajaib.",
    },
    {
      id: "12",
      title: "Frankenstein",
      author: "Mary Shelley",
      cover: "https://placehold.co/150x200/cccccc/333333?text=Frankenstein",
      description:
        "Sebuah novel Gotik yang mengeksplorasi tema penciptaan dan keberadaan.",
    },
    {
      id: "13",
      title: "The Picture of Dorian Gray",
      author: "Oscar Wilde",
      cover: "https://placehold.co/150x200/cccccc/333333?text=DorianGray",
      description:
        "Sebuah novel filosofis tentang seorang pria yang menjual jiwanya untuk keabadian muda.",
    },
    {
      id: "14",
      title: "Brave New World",
      author: "Aldous Huxley",
      cover: "https://placehold.co/150x200/cccccc/333333?text=BraveNewWorld",
      description:
        "Sebuah novel distopia yang menggambarkan masyarakat masa depan yang dikendalikan oleh teknologi dan pengondisian.",
    },
    {
      id: "15",
      title: "Don Quixote",
      author: "Miguel de Cervantes",
      cover: "https://placehold.co/150x200/cccccc/333333?text=DonQuixote",
      description:
        "Sebuah karya fundamental sastra Barat modern, sebuah satir petualangan.",
    },
  ];

  return (
    <Layout>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hapus grid lg:grid-cols-4 dan lg:col-span-1 dari sini */}
        <Routes>
          <Route
            path="/"
            element={
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {" "}
                {/* Tambahkan grid di sini */}
                <div className="lg:col-span-3">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Daftar Buku Tersedia
                  </h2>
                  <BookList
                    books={dummyBooks}
                    onAddToCart={handleAddToCart}
                    onViewDetail={handleViewBookDetail}
                    searchQuery={searchQuery}
                    onSearch={setSearchQuery}
                  />
                </div>
                <div className="lg:col-span-1">
                  {" "}
                  {/* Ini akan menjadi sidebar di halaman utama */}
                  <CartAndForm
                    items={cartItems}
                    onRemoveItem={handleRemoveFromCart}
                    onClearCart={handleClearCart}
                    onSubmitBorrow={handleSubmitBorrow}
                  />
                </div>
              </div>
            }
          />
          <Route
            path="/book/:id"
            element={
              <BookDetailPage
                book={selectedBook}
                onAddToCart={handleAddToCart}
              />
            }
          />
          <Route
            path="/receipt"
            element={<ReceiptPage receipt={borrowReceipt} />}
          />
          <Route path="/about" element={<p>Halaman Tentang Kami</p>} />
          {/* Rute /books dan /cart tidak lagi perlu ada jika kontennya sama dengan / */}
          {/* Atau jika Anda ingin /books hanya menampilkan BookList tanpa CartAndForm, Anda bisa mempertahankan rute ini */}
          <Route
            path="/books"
            element={
              <>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Daftar Buku Tersedia
                </h2>
                <BookList
                  books={dummyBooks}
                  onAddToCart={handleAddToCart}
                  onViewDetail={handleViewBookDetail}
                  searchQuery={searchQuery}
                  onSearch={setSearchQuery}
                />
              </>
            }
          />
          {/* Hapus rute /cart jika Anda tidak memerlukannya sebagai halaman terpisah */}
          {/* <Route
            path="/cart"
            element={
              <CartAndForm
                items={cartItems}
                onRemoveItem={handleRemoveFromCart}
                onClearCart={handleClearCart}
                onSubmitBorrow={handleSubmitBorrow}
              />
            }
          /> */}
        </Routes>
      </main>
      <Footer />
    </Layout>
  );
}
