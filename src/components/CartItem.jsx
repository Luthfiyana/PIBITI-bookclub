import React from "react";

export default function CartItem({ item }) {
  return (
    <div className="flex items-center bg-white p-4 rounded-lg shadow-md mb-4">
      <img
        src={item.cover}
        alt={`Cover ${item.title}`}
        className="w-20 h-24 object-cover rounded-md mr-4"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://placehold.co/100x150/cccccc/333333?text=No+Cover`;
        }}
      />
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
        <p className="text-gray-600 text-sm">Oleh: {item.author}</p>
        <p className="text-gray-700 mt-1">Jumlah: {item.quantity}</p>
      </div>
      <button className="bg-[#E100FF] hover:bg-[#c100dd] text-white font-bold py-2 px-3 rounded-md transition-colors duration-300 shadow-sm">
        Hapus
      </button>
    </div>
  );
}
