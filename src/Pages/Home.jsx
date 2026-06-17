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
    <main className="min-h-[calc(100vh-68px)] bg-cream">
      {/* ── Hero ── */}
      <section className="max-w-[1240px] mx-auto px-7 pt-20 pb-18 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Left: text */}
        <div className="flex flex-col items-start text-left mt-10">
          {/* Title */}
          <h1 className="space-x-3 font-display text-[clamp(2.6rem,6vw,5rem)] font-bold leading-[1.0] tracking-[-0.02em] text-ink mb-7">
            <span>Find Your Next</span>
            <em className="text-clay">Meal</em>
          </h1>
          {/* Sub */}
          <p className="max-w-[480px] text-[clamp(.95rem,2.2vw,1.15rem)] text-ink-muted leading-[1.75] mb-10">
            From quick weeknight dinners to elaborate weekend feasts — explore recipes that inspire your culinary journey.
          </p>
          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mb-14">
            <button className="px-8 py-3.5 bg-clay text-white text-[.95rem] font-semibold rounded-[14px] border-none cursor-pointer transition-all duration-200 shadow-[0_4px_14px_rgba(196,113,74,.30)] hover:bg-clay-dark hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(196,113,74,.35)]">
              Explore Recipes
            </button>
            <button className="px-8 py-3.5 bg-transparent text-ink-soft text-[.95rem] font-medium rounded-[14px] border-[1.5px] border-border cursor-pointer transition-all duration-200 hover:bg-cream hover:border-ink-muted hover:-translate-y-0.5">
              Watch Videos
            </button>
          </div>
          {/* Tag cloud */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 bg-white border border-border rounded-full text-xs font-medium text-ink-soft tracking-[.02em] cursor-pointer transition-all duration-200 hover:bg-clay hover:border-clay hover:text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right: image */}
        <div className="relative w-full aspect-[4/5] lg:aspect-[28/17]">
          <div className="absolute -inset-4 bg-clay/10 rounded-[32px] rotate-3" />
          <img src="/hero.png" alt="Featured recipe dish" className="relative w-full h-full object-cover rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,.12)]" />
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="bg-white border-t border-b border-border flex justify-center flex-wrap">
        {stats.map(({ value, label }, i) => (
          <div
            key={label}
            className={`flex flex-col items-center px-6 py-8 flex-1 min-w-[120px] max-w-[200px]
              ${i < stats.length - 1 ? "border-r border-border" : ""}`}
          >
            <span className="font-display text-[2rem] font-semibold text-ink tracking-[-0.02em]">{value}</span>
            <span className="text-[.78rem] font-medium uppercase tracking-[.08em] text-ink-muted mt-1">{label}</span>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Home;
