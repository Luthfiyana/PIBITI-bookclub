// src/hooks/useBook.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

export default function useBook() {
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [borrowReceipt, setBorrowReceipt] = useState(null);

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // --- State baru untuk notifikasi ---
  const [notification, setNotification] = useState(null); // { message: string, type: 'success' | 'warning' | 'error' }

  const navigate = useNavigate();

  // Fungsi untuk menampilkan notifikasi
  const showNotification = (message, type = "success") => {
    setNotification({ message, type });
    // Notifikasi akan otomatis hilang via komponen Notification itu sendiri
    // Tapi kita perlu reset state di sini agar bisa tampil lagi
    // Timeout ini agar ada jeda sebelum notifikasi bisa muncul lagi, jika ingin
    setTimeout(() => setNotification(null), 3500); // Setelah notifikasi hilang + sedikit jeda
  };

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

  // --- useEffect untuk Fetch Buku dari Fake API ---
  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await api.get(`/books?q=${searchQuery}`);
        setBooks(response.data);
      } catch (err) {
        console.error("Error fetching books:", err);
        setError("Gagal mengambil buku. Pastikan JSON server sedang berjalan.");
        showNotification("Gagal memuat daftar buku.", "error"); // Notifikasi error API
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [searchQuery]);

  function handleAddToCart(book) {
    const alreadyInCart = cartItems.some((item) => item.id === book.id);
    if (!alreadyInCart) {
      setCartItems((prev) => [...prev, book]);
      showNotification(
        `"${book.title}" berhasil ditambahkan ke keranjang!`,
        "success"
      ); // Notifikasi sukses
    } else {
      showNotification(`"${book.title}" sudah ada di keranjang.`, "warning"); // Notifikasi peringatan
    }
  }

  function handleRemoveFromCart(itemId) {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
    showNotification("Buku berhasil dihapus dari keranjang.", "success");
  }

  function handleClearCart() {
    setCartItems([]);
    showNotification("Keranjang berhasil dikosongkan.", "success");
  }

  function handleViewBookDetail(bookId) {
    navigate(`/book/${bookId}`);
  }

  function handleSubmitBorrow(borrowerInfo) {
    if (cartItems.length === 0) {
      // Mengganti alert() yang polos
      showNotification(
        "Keranjang peminjaman kosong! Silakan tambah buku terlebih dahulu.",
        "error"
      );
      return;
    }

    const receiptData = {
      ...borrowerInfo,
      borrowedBooks: [...cartItems],
      borrowDate: new Date().toLocaleDateString(),
      transactionId: `TX-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    };
    setBorrowReceipt(receiptData);
    handleClearCart(); // Kosongkan keranjang setelah pengajuan
    showNotification("Peminjaman berhasil diajukan!", "success"); // Notifikasi sukses pengajuan
    navigate("/receipt");
  }

  return {
    cartItems,
    setCartItems,
    searchQuery,
    setSearchQuery,
    borrowReceipt,
    setBorrowReceipt,
    handleAddToCart,
    handleRemoveFromCart,
    handleClearCart,
    handleViewBookDetail,
    handleSubmitBorrow,
    books,
    loading,
    error,
    notification, // Kembalikan state notifikasi
    showNotification, // Kembalikan fungsi untuk menampilkan notifikasi (jika ada komponen lain yang butuh)
  };
}
