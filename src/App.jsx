// App.jsx
import React from "react";
import "./index.css";

// Import dari folder components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import BookList from "./components/BookList";
import CartAndForm from "./components/CartAndForm";
import Notification from "./components/Notification"; // Import komponen Notification

// Import dari folder pages
import BookDetailPage from "./pages/BookDetailPage";
import ReceiptPage from "./pages/ReceiptPage";

// Import hook dari
import useBook from "./hooks/useBook";

import { Routes, Route } from "react-router-dom";

export default function App() {
  const {
    cartItems,
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
    notification, // Dapatkan state notifikasi dari hook
    showNotification, // Dapatkan fungsi showNotification dari hook
  } = useBook();

  return (
    <Layout>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route
            path="/"
            element={
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full">
                <div className="lg:col-span-3 flex flex-col min-h-0">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Daftar Buku Tersedia
                  </h2>
                  <BookList
                    books={books}
                    onAddToCart={handleAddToCart}
                    onViewDetail={handleViewBookDetail}
                    searchQuery={searchQuery}
                    onSearch={setSearchQuery}
                    loading={loading}
                    error={error}
                  />
                </div>
                <div className="lg:col-span-1 flex flex-col min-h-0">
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
            element={<BookDetailPage onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/receipt"
            element={<ReceiptPage receipt={borrowReceipt} />}
          />
        </Routes>
      </main>
      <Footer />
      {/* Tampilkan notifikasi jika ada */}
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)} // Reset state notifikasi saat ditutup
        />
      )}
    </Layout>
  );
}
