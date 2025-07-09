// src/hooks/useBook.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useBook() {
  // Nama fungsi hook sekarang useBook
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [borrowReceipt, setBorrowReceipt] = useState(null);

  const navigate = useNavigate();

  // Load dari localStorage saat awal
  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Simpan ke localStorage setiap kali cart berubah dan update document title
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

  return {
    cartItems,
    setCartItems,
    searchQuery,
    setSearchQuery,
    selectedBook,
    setSelectedBook,
    borrowReceipt,
    setBorrowReceipt,
    handleAddToCart,
    handleRemoveFromCart,
    handleClearCart,
    handleViewBookDetail,
    handleSubmitBorrow,
    navigate,
  };
}
