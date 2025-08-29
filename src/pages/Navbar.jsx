import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-purple-600 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">My Portfolio</h1>
      <ul className="flex space-x-6 font-semibold">
        <li>
          <Link to="/" className="hover:text-yellow-300">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-yellow-300">About</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
