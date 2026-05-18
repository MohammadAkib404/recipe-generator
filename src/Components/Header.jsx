/* src/Components/Header.jsx */
import React, { useState } from "react";
import { Menu, X, ChefHat } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Recipes", to: "/recipe-generator" },
  { label: "Categories", to: "/categories" },
  { label: "Products", to: "/products" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#faf7f2]/90 backdrop-blur-md border-b border-[#e0d8ce]">
      <div className="max-w-[1200px] mx-auto px-7 h-[68px] flex items-center justify-between gap-6">
        {/* Logo */}
        <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 bg-[#c4714a] rounded-[10px] flex items-center justify-center text-white shrink-0">
            <ChefHat size={18} strokeWidth={2} />
          </div>
          <span className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#1c1612] tracking-tight">Daily Dish</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-0.5 flex-1 justify-center">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="px-4 py-1.5 text-sm font-medium text-[#4a3f35] rounded-lg transition-all duration-200 hover:bg-[#f2ede4] hover:text-[#1c1612]"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/get-started"
            className="hidden md:inline-block px-5 py-2 bg-[#c4714a] text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:bg-[#9e4f30] hover:-translate-y-px"
          >
            Get Started
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9 border border-[#e0d8ce] rounded-lg text-[#4a3f35] transition-colors hover:bg-[#f2ede4]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-[#faf7f2] border-t border-[#e0d8ce]
          ${isOpen ? "max-h-80 opacity-100 py-4 px-4" : "max-h-0 opacity-0 py-0 px-4"}`}
      >
        <div className="flex flex-col gap-1">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 text-sm font-medium text-[#4a3f35] rounded-lg transition-colors hover:bg-[#f2ede4]"
            >
              {label}
            </Link>
          ))}
          <Link
            to="/get-started"
            onClick={() => setIsOpen(false)}
            className="mt-2 px-5 py-3 bg-[#c4714a] text-white text-sm font-semibold rounded-lg text-center transition-colors hover:bg-[#9e4f30]"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
