// src/components/Notification.jsx
import React, { useEffect, useState } from "react";

// Tipe notifikasi: 'success', 'warning', 'error'
export default function Notification({ message, type, onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  // Otomatis sembunyikan notifikasi setelah beberapa detik
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) {
        onClose(); // Panggil onClose callback jika disediakan
      }
    }, 3000); // Notifikasi akan hilang setelah 3 detik

    return () => clearTimeout(timer); // Cleanup timer
  }, [onClose]);

  if (!isVisible || !message) {
    return null; // Jangan tampilkan jika tidak terlihat atau tidak ada pesan
  }

  // Menentukan warna latar belakang dan teks berdasarkan tipe
  let bgColorClass = "";
  let textColorClass = "text-white";
  switch (type) {
    case "success":
      bgColorClass = "bg-green-500";
      break;
    case "warning":
      bgColorClass = "bg-yellow-500";
      textColorClass = "text-gray-800"; // Untuk visibilitas lebih baik di latar kuning
      break;
    case "error":
      bgColorClass = "bg-red-600";
      break;
    default:
      bgColorClass = "bg-gray-700"; // Default warna
      break;
  }

  return (
    <div
      className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 transition-all duration-300 transform ${bgColorClass} ${textColorClass} flex items-center justify-between`}
    >
      <span>{message}</span>
      <button
        onClick={() => {
          setIsVisible(false);
          if (onClose) onClose();
        }}
        className="ml-4 text-white text-xl font-bold leading-none hover:text-gray-200"
      >
        &times; {/* Tanda 'x' untuk menutup */}
      </button>
    </div>
  );
}
