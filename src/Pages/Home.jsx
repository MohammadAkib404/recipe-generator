/* src/Pages/Home.jsx */
import React from "react";

const tags = ["Italian", "Asian", "Vegan", "Quick", "Comfort", "Seasonal"];

const stats = [
  { value: "2,400+", label: "Recipes" },
  { value: "180+", label: "Cuisines" },
  { value: "50k", label: "Cooks" },
  { value: "4.9★", label: "Rating" },
];

function Home() {
  return (
    <main className="min-h-[calc(100vh-68px)] bg-[#faf7f2]">
      {/* ── Hero ── */}
      <section className="max-w-[860px] mx-auto px-7 pt-24 pb-18 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 text-xs font-semibold tracking-[.1em] uppercase text-[#c4714a] mb-7">
          <span className="w-1.5 h-1.5 bg-[#c4714a] rounded-full animate-pulse-dot" />
          Fresh recipes, every day
        </div>

        {/* Title */}
        <h1 className="font-[family-name:var(--font-display)] text-[clamp(3.2rem,9vw,7rem)] font-bold leading-[1.0] tracking-[-0.02em] text-[#1c1612] mb-7">
          Discover
          <br />
          <em className="italic text-[#c4714a]">Amazing</em>
          <br />
          Recipes Daily
        </h1>

        {/* Sub */}
        <p className="max-w-[520px] text-[clamp(.95rem,2.2vw,1.15rem)] text-[#8c7d72] leading-[1.75] mb-10">
          From quick weeknight dinners to elaborate weekend feasts — explore recipes that inspire your culinary journey.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-14">
          <button className="px-8 py-3.5 bg-[#c4714a] text-white text-[.95rem] font-semibold rounded-[14px] border-none cursor-pointer transition-all duration-200 shadow-[0_4px_14px_rgba(196,113,74,.30)] hover:bg-[#9e4f30] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(196,113,74,.35)]">
            Explore Recipes
          </button>
          <button className="px-8 py-3.5 bg-transparent text-[#4a3f35] text-[.95rem] font-medium rounded-[14px] border-[1.5px] border-[#e0d8ce] cursor-pointer transition-all duration-200 hover:bg-[#f2ede4] hover:border-[#8c7d72] hover:-translate-y-0.5">
            Watch Videos
          </button>
        </div>

        {/* Tag cloud */}
        <div className="flex flex-wrap gap-2 justify-center">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 bg-white border border-[#e0d8ce] rounded-full text-xs font-medium text-[#4a3f35] tracking-[.02em] cursor-pointer transition-all duration-200 hover:bg-[#c4714a] hover:border-[#c4714a] hover:text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="bg-white border-t border-b border-[#e0d8ce] flex justify-center flex-wrap">
        {stats.map(({ value, label }, i) => (
          <div
            key={label}
            className={`flex flex-col items-center px-6 py-8 flex-1 min-w-[120px] max-w-[200px]
              ${i < stats.length - 1 ? "border-r border-[#e0d8ce]" : ""}`}
          >
            <span className="font-[family-name:var(--font-display)] text-[2rem] font-semibold text-[#1c1612] tracking-[-0.02em]">{value}</span>
            <span className="text-[.78rem] font-medium uppercase tracking-[.08em] text-[#8c7d72] mt-1">{label}</span>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Home;
