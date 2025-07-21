import React, { useState } from 'react'
import { ChefHat, Sparkles, X, Search, Plus, Package } from 'lucide-react'
import Markdown from 'react-markdown';
import { getImages, getRecipe } from '../API_Connection';


function RecipeGenerator() {

    const [input, setInput] = useState("");
    const [ingredients, setIngredients] = useState([]);

    const [recipe, setRecipe] = useState("");
    const [imageURL, setImageURL] = useState('https://image.pollinations.ai/prompt/Rice%20and%20Beef%20Stir%20fry?function');

    const [recipeLoading, setRecipeLoading] = useState(false);
    const [imageLoading, setImageLoading] = useState(false);

    const addIngredients = (e) => {
        e.preventDefault();
        setIngredients((prev) => ([
            ...prev,
            input
        ]))
        setInput('');
    }

    const generateRecipe = async () => {
        setRecipeLoading(true);
        const recipe = await getRecipe(ingredients);
        setRecipe(recipe);

        const imageName = recipe.split('/n')[0].replace(/[^a-zA-Z0-9\s]/g, '');
        setRecipeLoading(false);

        setImageLoading(true);
        const imageURL = await getImages(imageName);
        setImageURL(imageURL);
    }

    const removeIngredient = (indexToRemove) => {
        const updated = ingredients.filter((_, index) => index !== indexToRemove);
        setIngredients(updated);
    }


    return (
        <>
            <section className='pt-25 px-5 sm:px-10 flex flex-col items-center text-white bg-gradient-to-r from-slate-800 to-slate-900'>


                {/* HeroSection  */}
                <div className='flex flex-col items-center'>
                    <div className='flex items-center mt-15'>
                        <div className='bg-orange-500 p-3 rounded-xl mr-5 animate-bounce'>
                            <ChefHat color='white' size={25} />
                        </div>
                        <div className='animate-pulse'>
                            <Sparkles color='orange' size={32} />
                        </div>
                    </div>

                    <div>
                        <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl mt-2.5 mb-2 sm:mb-3 sm:mt-3 md:mb-4 md:mt-4 lg:mb-5 lg:mt-5 font-bold bg-gradient-to-r from-orange-400 via-orange-450 to-orange-500 bg-clip-text text-transparent p-3'>
                            Recipe Generator
                        </h3>

                        <p className='text-center text-sm sm:text-base md:text-lg text-slate-300 max-w-xl'>
                            Transform your ingredients into a culinary masterpiece with AI-powered suggestions
                        </p>
                    </div>
                </div>

                {/* InputContainer  */}
                <div className='max-w-2xl w-full rounded-3xl p-10 bg-slate-800/50 border-2 border-slate-700/50 flex flex-col gap-6 mt-5'>
                    <form onSubmit={addIngredients}>
                        <h5 className='text-orange-300 font-semibold pb-2 pl-0.5'>What ingredients do you have?</h5>

                        <div className='flex gap-3'>
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                type='text'
                                placeholder='Enter an ingredient'
                                className='w-full bg-slate-700/50 text-white px-4 py-3 rounded-xl border-2 border-slate-600 focus:border-orange-500 focus:outline-none transition-all duration-300 placeholder-slate-400'
                            />
                            <button
                                type='submit'
                                aria-label='Add ingredient'
                                className='bg-gradient-to-r from-orange-400 to-orange-700 p-3.5 rounded-xl'
                            >
                                <Plus />
                            </button>
                        </div>

                        {ingredients.length > 0 && (
                            <div className='flex flex-wrap gap-3 mt-4'>
                                {ingredients.map((item, index) => (
                                    <span
                                        key={index}
                                        className='bg-slate-700/60 text-white px-4 py-2 rounded-full border border-orange-500 flex items-center gap-2 text-sm'
                                    >
                                        {item}
                                        <button
                                            type='button'
                                            className='text-orange-300 hover:text-red-400 transition'
                                            onClick={() => removeIngredient(index)}
                                        >
                                            <X className='w-4 h-4' />
                                        </button>
                                    </span>
                                ))}
                            </div>
                        )}
                    </form>

                    <div>
                        <h6 className='text-orange-300 font-semibold text-center mb-2'>Cuisine Type</h6>
                        <select className='w-full bg-slate-700/50 text-white px-4 py-3 rounded-xl border-2 border-slate-600 focus:border-orange-500 focus:outline-none transition-all duration-300'>
                            <option value='0'>Asian</option>
                            <option value='1'>Mexican</option>
                            <option value='2'>Italian</option>
                        </select>
                    </div>

                    <div>
                        <h6 className='text-orange-300 font-semibold text-center mb-2'>Cooking Time</h6>
                        <select className='w-full bg-slate-700/50 text-white px-4 py-3 rounded-xl border-2 border-slate-600 focus:border-orange-500 focus:outline-none transition-all duration-300'>
                            <option value='0'>Any Time</option>
                            <option value='1'>Under 15 mins</option>
                            <option value='2'>Under 30 mins</option>
                            <option value='3'>Under 1 hour</option>
                            <option value='4'>1 - 2 hours</option>
                        </select>
                    </div>

                    <div>
                        <h6 className='text-orange-300 font-semibold text-center mb-2'>Dietary Needs</h6>
                        <select className='w-full bg-slate-700/50 text-white px-4 py-3 rounded-xl border-2 border-slate-600 focus:border-orange-500 focus:outline-none transition-all duration-300'>
                            <option value='0'>No Restrictions</option>
                            <option value='1'>Vegetarian</option>
                            <option value='2'>Vegan</option>
                            <option value='3'>Gluten free</option>
                            <option value='4'>Keto</option>
                            <option value='5'>Paleo</option>
                        </select>
                    </div>

                    <button
                        onClick={generateRecipe}
                        className='flex bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl p-4 justify-center gap-3'
                    >
                        <Search />
                        <p className='font-bold'>Generate Recipe</p>
                        <Sparkles />
                    </button>
                </div>



            </section>


            {/* Recipe Display Section */}
            {recipeLoading && (
                <section className="px-5 sm:px-10 py-12 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
                    <div className="max-w-4xl aspect-square mx-auto bg-gradient-to-br from-slate-300/50 to-slate-400/60 animate-pulse rounded-2xl p-8 md:p-12 border-2 border-slate-700/50"></div>
                </section>
            )}
            {!recipeLoading && recipe && (
                <section className="px-5 sm:px-10 py-12 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
                    <div className="max-w-5xl mx-auto bg-slate-800/30 rounded-2xl p-8 md:p-12 border-2 border-slate-700/50">
                        <Markdown
                            components={{
                                h1: ({ children }) => (
                                    <>
                                        <h1 className="text-3xl text-center md:text-4xl font-bold mb-6 text-orange-400 border-b-2 border-orange-400 pb-3">
                                            {children}
                                        </h1>
                                        {imageURL && (
                                            <>
                                                {imageLoading && (
                                                    <div className='rounded-3xl bg-gradient-to-br from-gray-600 via-gray-500 to-gray-700 animate-pulse aspect-square w-full'></div>
                                                )}

                                                <div className="my-6">
                                                    <img
                                                        src={imageURL}
                                                        alt="Recipe"
                                                        width={200}
                                                        className={`${imageLoading ? 'hidden' : 'block'} w-full h-auto object-cover rounded-3xl`}
                                                        onLoad={() => setImageLoading(false)}
                                                        style={{ opacity: imageLoading ? 0 : 1, transition: 'opacity 0.5s ease' }}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    </>
                                ),
                                h2: ({ children }) => <h2 className="text-2xl md:text-3xl font-semibold mb-4 mt-8 text-orange-300">{children}</h2>,
                                h3: ({ children }) => <h3 className="text-xl md:text-2xl font-semibold mb-3 mt-6 text-orange-200">{children}</h3>,
                                p: ({ children }) => <p className="mb-4 text-slate-300 font-semibold leading-relaxed text-base md:text-lg">{children}</p>,
                                ul: ({ children }) => <ul className="mb-6 space-y-2 ml-4">{children}</ul>,
                                ol: ({ children }) => <ol className="mb-6 space-y-3 ml-4 list-decimal list-inside">{children}</ol>,
                                li: ({ children }) => <li className="text-slate-300 leading-relaxed mb-2">{children}</li>,
                                em: ({ children }) => <em className="text-slate-300 italic text-sm block mb-2">{children}</em>,
                                strong: ({ children }) => <strong className="text-orange-300 font-semibold">{children}</strong>,
                                code: ({ children }) => <code className="bg-slate-700 text-orange-300 px-2 py-1 rounded text-sm font-mono">{children}</code>,
                                hr: () => <hr className="border-slate-600 my-8" />
                            }}
                        >
                            {recipe}
                        </Markdown>
                    </div>
                </section>
            )}

        </>
    )
}

export default RecipeGenerator
