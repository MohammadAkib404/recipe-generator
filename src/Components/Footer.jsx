/* src/Components/Footer.jsx */
import React from "react";
import { ChefHat, Instagram, Twitter, Facebook, Heart } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white border-t border-[#e0d8ce]">
      <div className="max-w-[1200px] mx-auto px-7 pt-10 pb-8 flex flex-col gap-7">
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-5">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-[30px] h-[30px] bg-[#c4714a] rounded-lg flex items-center justify-center text-white shrink-0">
              <ChefHat size={15} strokeWidth={2} />
            </div>
            <span className="font-[family-name:var(--font-display)] text-xl font-semibold text-[#1c1612]">Daily Dish</span>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-1">
            {["Home", "Recipes", "Categories", "Contact"].map((item) => (
              <a
                key={item}
                className="px-3.5 py-1.5 text-sm font-medium text-[#8c7d72] rounded-lg cursor-pointer transition-all duration-200 hover:text-[#1c1612] hover:bg-[#f2ede4]"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-3.5 text-[#8c7d72]">
            {[Facebook, Twitter, Instagram].map((Icon, i) => (
              <Icon key={i} size={17} className="cursor-pointer transition-colors duration-200 hover:text-[#c4714a]" />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#e0d8ce]" />

        {/* Bottom row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-[#8c7d72]">© 2025 Daily Dish. All rights reserved.</p>

          {/* Subscribe */}
          <div className="flex gap-2">
            <input
              aria-label="email"
              placeholder="Your email address"
              className="w-48 px-3.5 py-2 text-sm bg-[#faf7f2] border-[1.5px] border-[#e0d8ce] rounded-lg text-[#1c1612] placeholder-[#8c7d72] outline-none transition-all duration-200 focus:border-[#c4714a]"
            />
            <button className="px-4 py-2 text-sm font-semibold bg-[#c4714a] text-white rounded-lg transition-colors hover:bg-[#9e4f30]">Subscribe</button>
          </div>

          <p className="flex items-center gap-1.5 text-sm text-[#8c7d72]">
            Made with <Heart fill="#c4714a" color="#c4714a" size={12} /> for food lovers
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
