import React from 'react'

function Home() {
    return (
        <main className='pt-25 pb-15 px-10 flex flex-col items-center text-white bg-gradient-to-r from-slate-800 to-slate-900'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mt-3 mb-2 sm:mb-3 sm:mt-6 md:mb-4 md:mt-9 lg:mb-5 lg:mt-14 font-bold bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent p-3'>Discover Amazing</h2>
            <h4 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold'>Recipes Daily</h4>
            
            <p className='max-w-160 mt-7 text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-200 text-center '>From quick weeknight dinners to elaborate weekend feasts, explore our collection of carefully curated recipes that will inspire your culinary journey.</p>

            <div class="flex flex-col mt-6 sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center px-4"><button class="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-sm sm:text-base md:text-lg rounded-xl hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-orange-500/25">Explore Recipes</button><button class="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 border-2 border-white/20 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm">Watch Videos</button></div>
        </main>
    )
}

export default Home
