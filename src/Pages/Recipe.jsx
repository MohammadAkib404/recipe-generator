import Formatter from "../Formatter";
import { getImages, getRecipe } from '../API_Connection';
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Recipe(props){ // Ingredients, Recipe Title, showRecipe

    const [recipe, setRecipe] = useState("");
    const [imageURL, setImageURL] = useState('https://image.pollinations.ai/prompt/Rice%20and%20Beef%20Stir%20fry?function');

    const [recipeLoading, setRecipeLoading] = useState(false);
    const [imageLoading, setImageLoading] = useState(false);

    const location = useLocation();

    useEffect(() => {
        generateRecipe();
    }, [props.showRecipe])

    const generateRecipe = async () => {
        const recipeTitle = props?.recipeTitle || location.state?.recipeTitle || '';
        const ingredients = props.ingredients || location.state?.ingredients; 
        console.log(ingredients);

        setRecipeLoading(true);
        const recipe = await getRecipe(recipeTitle, ingredients);
        setRecipe(recipe);

        const imageName = recipe.split('/n')[0].replace(/[^a-zA-Z0-9\s]/g, '');
        setRecipeLoading(false);

        setImageLoading(true);
        const imageURL = await getImages(imageName);
        setImageURL(imageURL);
    }

    return (
        <>
            {/* Recipe Display Section */}
            {recipeLoading && (
                <section className="px-5 sm:px-10 py-12 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
                    <div className="max-w-4xl aspect-square mx-auto bg-gradient-to-br from-slate-300/50 to-slate-400/60 animate-pulse rounded-2xl p-8 md:p-12 border-2 border-slate-700/50"></div>
                </section>
            )}
            {!recipeLoading && recipe && (
                <section className="px-5 sm:px-10 py-12 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
                    <div className="max-w-5xl mx-auto bg-slate-800/30 rounded-2xl p-8 md:p-12 border-2 border-slate-700/50">
                        <Formatter displayText={recipe} imageURL={imageURL} imageLoading={imageLoading} setImageLoading={setImageLoading} />
                    </div>
                </section>
            )}

        </>
    )
}