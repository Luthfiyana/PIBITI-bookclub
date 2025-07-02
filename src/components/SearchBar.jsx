import React from "react";

export default function SearchBar() {
  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Cari buku berdasarkan judul atau penulis..."
        className="w-full max-w-lg p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00CFFF] transition-all duration-200"
      />
      <button className="ml-3 bg-[#E100FF] hover:bg-[#c100dd] text-white font-bold py-2 px-4 rounded-lg shadow-md transition-colors duration-300">
        Cari
      </button>
    </div>
  );
}
