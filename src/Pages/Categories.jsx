import React from 'react'
import { Star, Clock, Users } from 'lucide-react'
import { getRecipe } from '../API_Connection'

function Recipes() {

    const showRecipe = async (ingredients) => {
        const recipe = await getRecipe(ingredients);
    }

    return (
        <div className='pt-25 p-10 flex flex-col items-center gap-3 bg-gradient-to-r from-slate-800 to-slate-900 text-slate-300'>
            <h2>
                <span className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-300'>Featured </span>
                <span className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent'>Recipes</span>
            </h2>

            <p className='text-sm sm:text-base md:text-lg lg:text-xl text-slate-400'>Hand picked recipes that our community loves most</p>

            <div className='flex gap-5'>
                <div className='flex flex-col h-95 w-100 rounded-2xl shadow-2xl overflow-hidden'>
                    <img src='./image_2.png' className=' w-full h-11/20'></img>
                    <div className='flex flex-col justify-center gap-3 bg-slate-800 px-6 h-9/20'>
                        <h3 className='text-2xl font-bold'>Creamy Garlic Pasta</h3>
                        <div className='flex gap-3'>
                            <p className='flex items-center gap-1.5'><Clock size={20} /> 25 min</p>
                            <p className='flex items-center gap-1.5'><Users size={20} /> serves 4</p>
                            <p className='flex items-center gap-1.5'><Star size={20} fill={`yellow`} color='white' /> 4.8</p>
                        </div>
                        <button className='rounded-md text-white font-bold bg-gradient-to-r from-orange-500 to-red-600 hover:opacity-900 transition py-2'>View Recipe</button></div>
                </div>
            </div>

        </div>
    )
}

export default Recipes
