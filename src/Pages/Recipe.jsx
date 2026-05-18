/* src/Pages/Recipe.jsx */
import Formatter from "../Formatter";
import { getImages, getRecipe } from "../API_Connection";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Recipe({ ingredients, showRecipe }) {
  const [recipe, setRecipe] = useState("");
  const [imageURL, setImageURL] = useState(null);
  const [recipeLoading, setRecipeLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    generateRecipe();
  }, [showRecipe]);

  const generateRecipe = async () => {
    setRecipeLoading(true);
    const result = await getRecipe(ingredients);
    setRecipe(result);

    const imageName = result.split("/n")[0].replace(/[^a-zA-Z0-9\s]/g, "");
    setRecipeLoading(false);

    setImageLoading(true);
    const url = await getImages(imageName);
    setImageURL(url);
  };

  return (
    <section className="bg-[#f2ede4] border-t border-[#e0d8ce] px-5 pt-18 pb-20 flex flex-col items-center gap-10">
      {/* Intro */}
      {location.state !== null && (
        <div className="text-center flex flex-col gap-2.5">
          <p className="text-[.8rem] font-semibold tracking-[.1em] uppercase text-[#c4714a]">Your Choice</p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.6rem,4vw,2.8rem)] font-semibold text-[#1c1612]">
            A delightful recipe crafted just for you.
          </h2>
        </div>
      )}

      {/* Skeleton */}
      {recipeLoading && (
        <div className="w-full max-w-[720px] flex flex-col gap-6">
          <div className="w-full aspect-[16/7] rounded-[22px] animate-shimmer" />
          <div className="flex flex-col gap-3">
            {[80, 60, 70, 50, 65].map((w, i) => (
              <div key={i} className="h-4 rounded-md animate-shimmer" style={{ width: `${w}%` }} />
            ))}
          </div>
        </div>
      )}

      {/* Recipe card */}
      {!recipeLoading && recipe && (
        <div className="w-full max-w-[720px] bg-white border border-[#e0d8ce] rounded-[22px] px-12 py-12 shadow-[0_12px_48px_rgba(28,22,18,.10)]">
          <Formatter displayText={recipe} imageURL={imageURL} imageLoading={imageLoading} setImageLoading={setImageLoading} />
        </div>
      )}
    </section>
  );
}
