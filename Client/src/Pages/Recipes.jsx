import React from 'react'
import { Star, Clock, Users } from 'lucide-react'

function Recipes() {
    return (
        <div className='pt-25 p-10 flex flex-col items-center gap-3'>
            <h2>
                <span className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800'>Featured </span>
                <span className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent'>Recipes</span>
            </h2>

            <p className='text-sm sm:text-base md:text-lg lg:text-xl text-slate-600'>Hand picked recipes that our community loves most</p>

            <div className='flex'>
                <div className='flex flex-col border-2 h-55 w-85'>
                    <div className='bg-gradient-to-br from-pink-300 to-purple-300 h-6/10 '>f</div>
                    <div className='px-5 py-3'>
                        <h4 className='font-bold'>Creamy Garlic Pasta</h4>
                        <div className='flex gap-3'>
                            <p className='flex items-center gap-1.5'><Clock size={20} /> 25 min</p>
                            <p className='flex items-center gap-1.5'><Users size={20} /> serves 4</p>
                            <p className='flex items-center gap-1.5'><Star size={20} fill='yellow' /> 4.8</p>
                        </div>
                        <button className='bg-gradient-to-r from-orange-500 to-red-600'>View Recipe</button></div>
                </div>
            </div>

        </div>
    )
}

export default Recipes
