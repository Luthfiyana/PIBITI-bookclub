import React from "react";
import BookclubLogo from "../assets/BookclubLogo.png";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#7F00FF] to-[#E100FF] text-white p-4 shadow-lg rounded-b-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold tracking-tight">
          <a
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity duration-300"
          >
            <img src={BookclubLogo} alt="Bookclub Logo" className="h-10 mr-3" />
            <span className="sr-only">PerpusOnline</span>
          </a>
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="/"
                className="hover:text-[#00CFFF] transition-colors duration-300 text-lg"
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                href="/books"
                className="hover:text-[#00CFFF] transition-colors duration-300 text-lg"
              >
                Buku
              </a>
            </li>
            <li>
              <a
                href="/cart"
                className="hover:text-[#00CFFF] transition-colors duration-300 text-lg"
              >
                Keranjang
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-[#00CFFF] transition-colors duration-300 text-lg"
              >
                Tentang
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
