import Formatter from "../Formatter";
import { getImages, getRecipe } from '../API_Connection';
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Recipe(props){ // Ingredients, Recipe Title, showRecipe

    const [recipe, setRecipe] = useState("");
    const [imageURL, setImageURL] = useState(null);

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
        console.log("fdkfkdl",imageName);
        setRecipeLoading(false);

        setImageLoading(true);
        const imageURL = await getImages(imageName);
        console.log(imageURL);
        setImageURL(imageURL);
    }

    return (
        <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white pt-15 p-10">
            {/* Recipe Display Section */}

            {location.state !== null && 
                <div className='text-center space-y-3'>
                    <h2>
                        <span className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-300'>Your </span>
                        <span className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent'>Choice</span>
                    </h2>
                    <p className='text-sm sm:text-base md:text-lg lg:text-xl text-slate-400'>A delightful recipe for someone as delightful as You.</p>
                </div>
            }
            
            {recipeLoading && (
                <section className="px-5 sm:px-10 py-12">
                    <div className="max-w-4xl aspect-square mx-auto bg-gradient-to-br from-slate-300/50 to-slate-400/60 animate-pulse rounded-2xl p-8 md:p-12 border-2 border-slate-700/50"></div>
                </section>
            )}
            {!recipeLoading && recipe && (
                <section className="px-5 sm:px-10 py-12">
                    <div className="max-w-5xl mx-auto bg-slate-800/30 rounded-2xl p-8 md:p-12 border-2 border-slate-700/50">
                        <Formatter displayText={recipe} imageURL={imageURL} imageLoading={imageLoading} setImageLoading={setImageLoading} />
                    </div>
                </section>
            )}

        </section>
    )
}