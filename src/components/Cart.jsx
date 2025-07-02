import React from "react";
import CartItem from "./CartItem";

export default function Cart({ items }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Keranjang Peminjaman Anda
      </h2>
      {items.length === 0 ? (
        <p className="text-center text-gray-600">Keranjang Anda kosong.</p>
      ) : (
        <div>
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="mt-6 text-right">
            <button className="bg-[#00CFFF] hover:bg-[#00b8e0] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md text-lg">
              Lanjutkan ke Peminjaman
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
