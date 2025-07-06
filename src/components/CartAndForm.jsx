// components/CartAndForm.jsx
import React, { useState } from "react";

export default function CartAndForm({
  items,
  onRemoveItem,
  onClearCart,
  onSubmitBorrow, // Terima prop onSubmitBorrow
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [pickupTime, setPickupTime] = useState(""); // Tambahkan state untuk waktu

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !date || !pickupTime) {
      // Validasi waktu juga
      alert("Mohon lengkapi semua data.");
      return;
    }

    // Panggil fungsi onSubmitBorrow dari App.jsx
    onSubmitBorrow({
      name,
      email,
      pickupDate: date,
      pickupTime: pickupTime,
    });

    // Reset form
    setName("");
    setEmail("");
    setDate("");
    setPickupTime("");
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-xl font-semibold mb-3">📚 Buku Dipinjam</h3>
      {items.length === 0 ? (
        <p className="text-gray-500">Belum ada buku di keranjang.</p>
      ) : (
        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between border-b pb-2"
            >
              <span className="text-sm">{item.title}</span>
              <button
                onClick={() => onRemoveItem(item.id)}
                className="bg-[#ed5a9a] hover:bg-[#cb3476] text-white font-bold py-2 px-4 rounded-md"
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-3">
        <input
          type="text"
          placeholder="Nama Lengkap"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded px-3 py-2 text-sm"
          required // Tambahkan atribut required
        />
        <input
          type="email"
          placeholder="Alamat Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded px-3 py-2 text-sm"
          required
        />
        <label
          htmlFor="pickupDate"
          className="block text-gray-700 text-sm font-bold mt-2"
        >
          Tanggal Pengambilan:
        </label>
        <input
          id="pickupDate"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border rounded px-3 py-2 text-sm"
          required
        />
        <label
          htmlFor="pickupTime"
          className="block text-gray-700 text-sm font-bold mt-2"
        >
          Waktu Pengambilan:
        </label>
        <input
          id="pickupTime"
          type="time"
          value={pickupTime}
          onChange={(e) => setPickupTime(e.target.value)}
          className="w-full border rounded px-3 py-2 text-sm"
          required
        />
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Ajukan Peminjaman
        </button>
      </form>
    </div>
  );
}
