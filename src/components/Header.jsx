// components/Header.jsx
import React from "react";
import BookclubLogo from "../assets/BookclubLogo.png";
import { Link } from "react-router-dom"; // Import Link

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#7F00FF] to-[#E100FF] text-white p-4 shadow-lg rounded-b-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold tracking-tight">
          <Link // Gunakan Link
            to="/" // Gunakan prop 'to' sebagai tujuan
            className="flex items-center hover:opacity-80 transition-opacity duration-300"
          >
            <img src={BookclubLogo} alt="Bookclub Logo" className="h-10 mr-3" />
            <span className="sr-only">PerpusOnline</span>
          </Link>
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link // Gunakan Link
                to="/"
                className="hover:text-[#00CFFF] transition-colors duration-300 text-lg"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link // Gunakan Link
                to="/books"
                className="hover:text-[#00CFFF] transition-colors duration-300 text-lg"
              >
                Buku
              </Link>
            </li>
            <li>
              <Link // Gunakan Link
                to="/cart"
                className="hover:text-[#00CFFF] transition-colors duration-300 text-lg"
              >
                Keranjang
              </Link>
            </li>
            <li>
              <Link // Gunakan Link
                to="/about"
                className="hover:text-[#00CFFF] transition-colors duration-300 text-lg"
              >
                Tentang
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
