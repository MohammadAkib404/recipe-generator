/* src/Components/Header.jsx */
import React, { useState } from "react";
import { Menu, X, ChefHat } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Recipes", to: "/recipe-generator" },
  { label: "Categories", to: "/recipe-generator" },
  { label: "Products", to: "/recipe-generator" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-border">
      <div className="max-w-300 mx-auto px-7 h-17 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2.5 shrink-0">
          <span className="font-display text-2xl font-bold text-ink tracking-tight">Daily Dish</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-0.5 flex-1 justify-center">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="px-4 py-1.5 text-sm font-medium text-ink-soft rounded-lg transition-all duration-200 hover:bg-cream hover:text-ink"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/get-started"
            className="hidden md:inline-block px-5 py-2 bg-clay text-sm font-semibold rounded-lg transition-all duration-200 hover:bg-clay-dark hover:-translate-y-px"
          >
            <span className="text-gray-100">Try Out</span>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9 border border-border rounded-lg text-ink-soft transition-colors hover:bg-cream"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-cream border-t border-border
          ${isOpen ? "max-h-80 opacity-100 py-4 px-4" : "max-h-0 opacity-0 py-0 px-4"}`}
      >
        <div className="flex flex-col gap-1">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 text-sm font-medium text-ink-soft rounded-lg transition-colors hover:bg-cream"
            >
              {label}
            </Link>
          ))}
          <Link
            to="/get-started"
            onClick={() => setIsOpen(false)}
            className="mt-2 px-5 py-3 bg-clay text-white text-sm font-semibold rounded-lg text-center transition-colors hover:bg-clay-dark"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
