// components/Header.jsx
import React from "react";
import BookclubLogo from "../assets/BookclubLogo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#7F00FF] to-[#E100FF] text-white p-4 shadow-lg rounded-b-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold tracking-tight">
          <Link
            to="/" // Link logo ke halaman Beranda
            className="flex items-center hover:opacity-80 transition-opacity duration-300"
          >
            <img src={BookclubLogo} alt="Bookclub Logo" className="h-10 mr-3" />
            <span>BookClub</span>
          </Link>
        </h1>
      </div>
    </header>
  );
}
