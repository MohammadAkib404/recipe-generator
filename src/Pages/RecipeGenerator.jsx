import React from 'react'
import { ChefHat, Sparkles, Clock, Users, Search, Plus } from 'lucide-react'

function RecipeGenerator() {
    return (
        <section className='pt-25 p-10 flex flex-col items-center text-white bg-gradient-to-r from-slate-800 to-slate-900'>
            <div className='flex items-center mt-15'>
                <div className='bg-orange-500 p-3 rounded-xl mr-5 animate-bounce'>
                    <ChefHat color='white' size={25} />
                </div>
                <div className='animate-pulse'>
                    <Sparkles color='orange' size={32} />
                </div>
            </div>

            <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl mt-2.5 mb-2 sm:mb-3 sm:mt-3 md:mb-4 md:mt-4 lg:mb-5 lg:mt-5 font-bold bg-gradient-to-r from-orange-400 via-orange-450 to-orange-500 bg-clip-text text-transparent p-3'>
                Recipe Generator
            </h3>

            <p className='text-center text-sm sm:text-base md:text-lg text-slate-300 max-w-xl'>
                Transform your ingredients into a culinary masterpiece with AI-powered suggestions
            </p>

            <div className='w-full rounded-3xl p-5 bg-slate-800/50 border border-slate-700/50 flex flex-col gap-4 mt-5'>

                <form>
                    <h5 className='text-orange-300 font-semibold pb-2 pl-0.5'>What ingredients do you have?</h5>
                    <div className='flex gap-3'>
                        <input type="text" placeholder='Enter an ingredient' className='w-full bg-slate-700/50 text-white px-4 py-3 rounded-xl border-2 border-slate-600 focus:border-orange-500 focus:outline-none transition-all duration-300 placeholder-slate-400' />
                        <button type='submit' aria-label='Add ingredient' className='bg-gradient-to-r from-orange-400 to-orange-700 p-3.5 rounded-xl'>
                            <Plus />
                        </button>
                    </div>
                </form>

                <div>
                    <h6 className='text-orange-300 font-semibold text-center mb-2'>Cuisine Type</h6>
                    <select className='w-full bg-slate-700/50 text-white px-4 py-3 rounded-xl border-2 border-slate-600 focus:border-orange-500 focus:outline-none transition-all duration-300'>
                        <option value="0">Asian</option>
                        <option value="1">Mexican</option>
                        <option value="2">Italian</option>
                    </select>
                </div>

                <div>
                    <h6 className='text-orange-300 font-semibold text-center mb-2'>Cooking Time</h6>
                    <select className='w-full bg-slate-700/50 text-white px-4 py-3 rounded-xl border-2 border-slate-600 focus:border-orange-500 focus:outline-none transition-all duration-300'>
                        <option value="0">Any Time</option>
                        <option value="1">Under 15 mins</option>
                        <option value="2">Under 30 mins</option>
                        <option value="3">Under 1 hour</option>
                        <option value="4">1 - 2 hours</option>
                    </select>
                </div>

                <div>
                    <h6 className='text-orange-300 font-semibold text-center mb-2'>Dietary Needs</h6>
                    <select className='w-full bg-slate-700/50 text-white px-4 py-3 rounded-xl border-2 border-slate-600 focus:border-orange-500 focus:outline-none transition-all duration-300'>
                        <option value="0">No Restrictions</option>
                        <option value="1">Vegetarian</option>
                        <option value="2">Vegan</option>
                        <option value="3">Gluten free</option>
                        <option value="4">Keto</option>
                        <option value="5">Paleo</option>
                    </select>
                </div>

                <button className='flex bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl p-4 justify-center gap-3'>
                    <Search />
                    <p className='font-bold'>Generate Recipe</p>
                    <Sparkles />
                </button>
            </div>
        </section>
    )
}

export default RecipeGenerator
