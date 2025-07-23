import React, { useState } from 'react'
import { ChefHat, Sparkles, X, Search, Plus, Package } from 'lucide-react'
import Recipe from './Recipe';


function RecipeGenerator() {

    const [input, setInput] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [showRecipe, setShowRecipe] = useState(false);

    const addIngredients = (e) => {
        e.preventDefault();
        setIngredients((prev) => ([
            ...prev,
            input
        ]))
        setInput('');
    }

    const removeIngredient = (indexToRemove) => {
        const updated = ingredients.filter((_, index) => index !== indexToRemove);
        setIngredients(updated);
    }
        

    return (
        <>
            <section className='pt-25 px-5 sm:px-10 flex flex-col items-center text-white bg-gradient-to-r from-slate-800 to-slate-900'>
                {/* HeroSection  */}
                <div className='flex flex-col items-center mt-10 py-5'>
                    <div className='flex items-center'>
                        <div className='bg-orange-500 p-3 rounded-xl mr-5 animate-bounce'>
                            <ChefHat color='white' size={25} />
                        </div>
                        <div className='animate-pulse'>
                            <Sparkles color='orange' size={32} />
                        </div>
                    </div>

                    <div className='flex flex-col items-center'>
                        <h3 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl mt-2.5 mb-2 sm:mb-3 sm:mt-3 md:mb-4 md:mt-4 lg:mb-5 lg:mt-5 font-bold bg-gradient-to-r from-orange-400 via-orange-450 to-orange-500 bg-clip-text text-transparent p-3'>
                            Recipe Generator
                        </h3>

                        <p className='text-center text-sm sm:text-base md:text-lg text-slate-300 max-w-xl'>
                            Transform your ingredients into a culinary masterpiece with AI-powered suggestions
                        </p>
                    </div>
                </div>

                {/* InputContainer  */}
                <div className='max-w-2xl w-full rounded-3xl px-5 py-10 bg-slate-800/50 border-2 border-slate-700/50 flex flex-col gap-6 mt-5'>
                    <form onSubmit={addIngredients}>
                        <h5 className='text-orange-300 font-semibold pb-2 pl-0.5'>What ingredients do you have?</h5>

                        <div className='flex gap-3'>
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                type='text'
                                placeholder='Enter an ingredient'
                                className='w-full bg-slate-700/50 text-white px-4 py-2.5 sm:py-3 rounded-xl border-2 border-slate-600 focus:border-orange-500 focus:outline-none transition-all duration-300 placeholder-slate-400'
                            />
                            <button
                                type='submit'
                                aria-label='Add ingredient'
                                className='bg-gradient-to-r from-orange-400 to-orange-700 p-3 rounded-xl'
                            >
                                <Plus />
                            </button>
                        </div>

                        {ingredients.length > 0 && (
                            <div className='flex flex-wrap gap-2 sm:gap-3 mt-4'>
                                {ingredients.map((item, index) => (
                                    <span
                                        key={index}
                                        className='bg-slate-700/60 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-full border border-orange-500 flex gap-1 sm:gap-2 items-center text-xs sm:text-sm'
                                    >
                                        {item}
                                        <button
                                            type='button'
                                            className='text-orange-300 hover:text-red-400 transition'
                                            onClick={() => removeIngredient(index)}
                                        >
                                            <X className='w-3 h-3 sm:w-4 sm:h-4' />
                                        </button>
                                    </span>
                                ))}
                            </div>
                        )}
                    </form>

                    <div>
                        <h6 className='text-orange-300 font-semibold text-center mb-2'>Cuisine Type</h6>
                        <select className='w-full bg-slate-700/50 text-white px-4 py-2.5 sm:py-3 rounded-xl border-2 border-slate-600 focus:border-orange-500 focus:outline-none transition-all duration-300'>
                            <option value='0'>Asian</option>
                            <option value='1'>Mexican</option>
                            <option value='2'>Italian</option>
                        </select>
                    </div>

                    <div>
                        <h6 className='text-orange-300 font-semibold text-center mb-2'>Cooking Time</h6>
                        <select className='w-full bg-slate-700/50 text-white px-4 py-2.5 sm:py-3 rounded-xl border-2 border-slate-600 focus:border-orange-500 focus:outline-none transition-all duration-300'>
                            <option value='0'>Any Time</option>
                            <option value='1'>Under 15 mins</option>
                            <option value='2'>Under 30 mins</option>
                            <option value='3'>Under 1 hour</option>
                            <option value='4'>1 - 2 hours</option>
                        </select>
                    </div>

                    <div>
                        <h6 className='text-orange-300 font-semibold text-center mb-2'>Dietary Needs</h6>
                        <select className='w-full bg-slate-700/50 text-white px-4 py-2.5 sm:py-3 rounded-xl border-2 border-slate-600 focus:border-orange-500 focus:outline-none transition-all duration-300'>
                            <option value='0'>No Restrictions</option>
                            <option value='1'>Vegetarian</option>
                            <option value='2'>Vegan</option>
                            <option value='3'>Gluten free</option>
                            <option value='4'>Keto</option>
                            <option value='5'>Paleo</option>
                        </select>
                    </div>

                    <button
                        onClick={() => setShowRecipe(true)}
                        className='flex bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl p-4 justify-center gap-3'
                    >
                        <Search />
                        <p className='font-bold'>Generate Recipe</p>
                        <Sparkles />
                    </button>
                </div>
                
            </section>
            {showRecipe && 
                <Recipe ingredients={ingredients} />
            }
        </>
    )
}

export default RecipeGenerator
