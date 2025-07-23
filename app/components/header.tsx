"use client";
import React, { useEffect, useState } from "react";
import { icons } from "../assets/icons";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const Crown = icons.crown;
  const textColor = isScrolled ? "text-black" : "text-white";
  const iconFill = isScrolled ? "fill-black" : "fill-white";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-5 md:px-10">
        {/* Logo */}
        <div className={`flex items-center gap-3 ${textColor}`}>
          <Crown className={`w-8 h-8 ${iconFill}`} />
          <h2 className="text-xl font-bold pt-1">Salient</h2>
        </div>

        {/* Desktop Nav */}
        <nav className={`hidden md:flex gap-10 font-medium ${textColor}`}>
          <a href="#">Home</a>
          <a href="#">News</a>
          <a href="#">Demos</a>
          <a href="#">Contact</a>
        </nav>

        <button
          onClick={toggleMenu}
          className={`md:hidden sm:flex z-50 ${
            isScrolled ? "text-black" : "text-white"
          } font-bold`}
          aria-label="Toggle Menu"
        >
          {!isMenuOpen ? "☰" : "X"}
        </button>
      </div>

      <div
        className={`md:hidden transition-all duration-300 bg-white shadow-md ${
          isMenuOpen ? "max-h-60 py-4 px-6" : "max-h-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col gap-4 text-black font-medium">
          <a href="#">Home</a>
          <a href="#">News</a>
          <a href="#">Demos</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
