import React from "react";

export default function CheckoutForm() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Formulir Peminjaman Buku
      </h2>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nama Lengkap:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan nama lengkap Anda"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan email Anda"
          />
        </div>
        <div>
          <label
            htmlFor="pickupDate"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Tanggal Pengambilan yang Diinginkan:
          </label>
          <input
            type="date"
            id="pickupDate"
            name="pickupDate"
            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#00CFFF]"
          />
        </div>
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-[#7f00ff] hover:bg-[#6f00e6] text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md text-lg"
          >
            Ajukan Peminjaman
          </button>
        </div>
      </form>
    </div>
  );
}
