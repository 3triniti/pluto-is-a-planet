import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 text-gray-400 border-b border-solid border-gray-50/10">
      <h2 className="title text-gray-500 font-antonio text-2xl">THE PLANETS</h2>
      <div className="flex gap-5 font-league spartan text-xs">
        <Link to="/Mercury">MERCURY</Link>
        <Link to="/Venus">VENUS</Link>
        <Link to="/Earth">EARTH</Link>
        <Link to="/Mars">MARS</Link>
        <Link to="/Jupiter">JUPITER</Link>
        <Link to="/Saturn">SATURN</Link>
        <Link to="/Uranus">URANUS</Link>
        <Link to="/Neptune">NEPTUNE</Link>
      </div>
    </nav>
  );
}

export default Navbar;
