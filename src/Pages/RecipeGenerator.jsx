/* src/Pages/RecipeGenerator.jsx */
import React, { useState } from "react";
import { Plus, X, Sparkles } from "lucide-react";
import Recipe from "./Recipe";

const SELECT_FIELDS = [
  {
    label: "Cuisine Type",
    options: ["Any Cuisine", "Asian", "Mexican", "Italian", "Mediterranean", "Indian"],
  },
  {
    label: "Cooking Time",
    options: ["Any Time", "Under 15 mins", "Under 30 mins", "Under 1 hour", "1–2 hours"],
  },
  {
    label: "Dietary Needs",
    options: ["No Restrictions", "Vegetarian", "Vegan", "Gluten Free", "Keto", "Paleo"],
  },
];

function RecipeGenerator() {
  const [input, setInput] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [showRecipe, setShowRecipe] = useState(false);

  const addIngredient = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setIngredients((prev) => [...prev, input.trim()]);
    setInput("");
  };

  const removeIngredient = (i) => {
    setIngredients((prev) => prev.filter((_, idx) => idx !== i));
  };

  return (
    <>
      <main className="min-h-[calc(100vh-68px)] bg-[#faf7f2] px-5 pt-20 pb-20 flex flex-col items-center gap-12">
        {/* Page header */}
        <div className="flex flex-col items-center gap-3.5 text-center">
          <span className="inline-block px-3.5 py-1.5 bg-[#f2ede4] border border-[#e0d8ce] rounded-full text-[.75rem] font-semibold tracking-[.1em] uppercase text-[#c4714a]">
            AI-Powered
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.4rem,6vw,4.5rem)] font-bold text-[#1c1612] tracking-[-0.02em] leading-[1.1]">
            Recipe Generator
          </h1>
          <p className="text-base text-[#8c7d72] max-w-[380px] leading-[1.7]">Tell us what's in your kitchen — we'll handle the rest.</p>
        </div>

        {/* Card */}
        <div className="w-full max-w-[560px] bg-white border border-[#e0d8ce] rounded-[22px] px-9 py-9 shadow-[0_4px_20px_rgba(28,22,18,.08)] flex flex-col gap-7">
          {/* Ingredients */}
          <section className="flex flex-col gap-2.5">
            <label className="text-[.82rem] font-semibold tracking-[.06em] uppercase text-[#4a3f35]">Ingredients you have</label>
            <form onSubmit={addIngredient} className="flex gap-2.5">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="e.g. chicken, garlic, lemon…"
                className="flex-1 px-4 py-2.5 bg-[#faf7f2] border-[1.5px] border-[#e0d8ce] rounded-lg text-sm text-[#1c1612] placeholder-[#8c7d72] outline-none transition-all duration-200 focus:border-[#c4714a] focus:shadow-[0_0_0_3px_rgba(196,113,74,.12)]"
              />
              <button
                type="submit"
                aria-label="Add ingredient"
                className="w-11 h-11 shrink-0 bg-[#c4714a] text-white rounded-lg flex items-center justify-center border-none cursor-pointer transition-all duration-200 hover:bg-[#9e4f30] hover:scale-[1.06]"
              >
                <Plus size={18} strokeWidth={2.5} />
              </button>
            </form>

            {ingredients.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-1">
                {ingredients.map((item, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f2ede4] border border-[#e0d8ce] rounded-full text-[.83rem] font-medium text-[#4a3f35]"
                  >
                    {item}
                    <button
                      type="button"
                      onClick={() => removeIngredient(i)}
                      aria-label="Remove"
                      className="flex items-center text-[#8c7d72] transition-colors duration-150 hover:text-[#9e4f30] bg-transparent border-none cursor-pointer p-0"
                    >
                      <X size={13} strokeWidth={2.5} />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </section>

          {/* Divider */}
          <div className="h-px bg-[#e0d8ce]" />

          {/* Selects */}
          <section className="flex flex-col gap-5">
            {SELECT_FIELDS.map(({ label, options }) => (
              <div key={label} className="flex flex-col gap-2.5">
                <label className="text-[.82rem] font-semibold tracking-[.06em] uppercase text-[#4a3f35]">{label}</label>
                <select
                  className="w-full px-4 py-2.5 bg-[#faf7f2] border-[1.5px] border-[#e0d8ce] rounded-lg text-sm text-[#1c1612] outline-none cursor-pointer transition-all duration-200 focus:border-[#c4714a] focus:shadow-[0_0_0_3px_rgba(196,113,74,.12)] appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M1 4l5 5 5-5' stroke='%238c7d72' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 14px center",
                    paddingRight: "36px",
                  }}
                >
                  {options.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            ))}
          </section>

          {/* Divider */}
          <div className="h-px bg-[#e0d8ce]" />

          {/* Generate button */}
          <button
            onClick={() => setShowRecipe(true)}
            className="w-full flex items-center justify-center gap-2.5 py-4 bg-[#c4714a] text-white text-base font-semibold rounded-[14px] border-none cursor-pointer tracking-[.01em] transition-all duration-200 shadow-[0_4px_14px_rgba(196,113,74,.30)] hover:bg-[#9e4f30] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(196,113,74,.35)]"
          >
            <Sparkles size={18} strokeWidth={2} />
            Generate Recipe
          </button>
        </div>
      </main>

      {showRecipe && <Recipe ingredients={ingredients} showRecipe={showRecipe} />}
    </>
  );
}

export default RecipeGenerator;
