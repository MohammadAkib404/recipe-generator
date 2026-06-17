/* src/Components/Footer.jsx */
import React from "react";
import { ChefHat, Instagram, Twitter, Facebook, Heart } from "lucide-react";

function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-[#3b3129] bg-ink text-[#f5efe8]">
      <div className="relative max-w-300 mx-auto px-7 py-16">
        {/* Top */}
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-5">
              <div>
                <h2 className="font-display text-3xl font-semibold tracking-wide">Daily Dish</h2>

                <p className="text-sm text-[#b7a89a]">Recipes crafted with warmth</p>
              </div>
            </div>

            <p className="leading-7 text-[#b7a89a]">Discover comforting meals, elegant desserts, and simple recipes designed for everyday cooking.</p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#e7d6c8]">Navigation</h3>

              <div className="flex flex-col gap-3 text-[#b7a89a]">
                {["Home", "Recipes", "Categories", "Contact"].map((item) => (
                  <a key={item} href="#" className="transition-all duration-200 hover:translate-x-1 hover:text-white">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#e7d6c8]">Categories</h3>

              <div className="flex flex-col gap-3 text-[#b7a89a]">
                {["Breakfast", "Dinner", "Desserts", "Healthy"].map((item) => (
                  <a key={item} href="#" className="transition-all duration-200 hover:translate-x-1 hover:text-white">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#e7d6c8]">Follow</h3>

              <div className="flex gap-3">
                {[Facebook, Twitter, Instagram].map((Icon, i) => (
                  <button
                    key={i}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#3b3129] bg-[#241d18] text-[#b7a89a] transition-all duration-300 hover:-translate-y-1 hover:border-clay hover:bg-clay hover:text-white"
                  >
                    <Icon size={18} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-14 rounded-3xl border border-[#3b3129] bg-[#241d18]/80 p-7 backdrop-blur">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-display text-3xl font-semibold">Join our newsletter</h3>

              <p className="mt-2 text-[#b7a89a]">Weekly recipes, cooking inspiration, and kitchen tips.</p>
            </div>

            <div className="flex w-full max-w-md gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl border border-[#3b3129] bg-ink px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-[#7d7065] focus:border-clay"
              />

              <button className="rounded-xl bg-clay px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-clay-dark hover:shadow-lg hover:shadow-clay/30">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-[#3b3129] pt-6 text-sm text-[#8f8175] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 Daily Dish. All rights reserved.</p>

          <p className="flex items-center gap-1.5">
            Made with
            <Heart size={13} fill="#c4714a" color="#c4714a" />
            for food lovers
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
