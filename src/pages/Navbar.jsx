// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-purple-600 text-white p-4">
      <ul className="flex space-x-6 justify-center font-semibold">
        <li>
          <Link to="/" className="hover:text-yellow-300 transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-yellow-300 transition">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-yellow-300 transition">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
