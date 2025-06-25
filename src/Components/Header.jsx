import React, { useState } from 'react'
import { Menu, ChefHat } from 'lucide-react'
import { Link } from 'react-router-dom';

function Header() {
    const [isMenu, setIsMenuOpen] = useState(false);

    return (
        <header className='fixed h-25 top-0 right-0 left-0 text-white bg-gradient-to-r from-slate-800 to-slate-900 py-4 md:py-4.5 lg:py-5 border-b-10 z-50'>
            <div className='max-w-7xl mx-auto flex justify-between items-center px-6 md:px-8 lg:px-10'>
                <div className='flex items-center'>
                    <div className='relative'>
                        <div className='bg-orange-500 p-3 rounded-xl mr-3'>
                            <ChefHat color='white' size={25} />
                        </div>
                        <div className='absolute -top-0.5 right-2 bg-green-400 h-4 w-4 rounded-full animate-pulse'></div>
                    </div>
                    <div className='flex flex-col'>
                        <strong className='text-2xl md:text-3xl lg:text-4xl sm bg-gradient-to-r from-white via-orange-200 to-orange-300 bg-clip-text text-transparent'>Daily Dish</strong>
                        <small className='text-gray-300'>Fresh Recipes Daily</small>
                    </div>
                </div>

                <nav className='flex gap-3'>
                    <div className='hidden lg:block'>
                        <Link to="/" onClick={() => setIsMenuOpen(false)} className='relative px-4 xl:px-6 py-2.5 xl:py-3 text-slate-200 font-medium text-sm xl:text-base tracking-wide hover:text-white transition-all duration-300 group'>
                            <span className='relative z-10'>Home</span>
                            <div className='absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300'></div>
                            <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                        </Link>

                        <Link to="/recipe-generator" onClick={() => setIsMenuOpen(false)} className='relative px-4 xl:px-6 py-2.5 xl:py-3 text-slate-200 font-medium text-sm xl:text-base tracking-wide hover:text-white transition-all duration-300 group'>
                            <span className='relative z-10'>Recipes</span>
                            <div className='absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300'></div>
                            <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                        </Link>

                        <Link to="/categories" onClick={() => setIsMenuOpen(false)} className='relative px-4 xl:px-6 py-2.5 xl:py-3 text-slate-200 font-medium text-sm xl:text-base tracking-wide hover:text-white transition-all duration-300 group'>
                            <span className='relative z-10'>Categories</span>
                            <div className='absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300'></div>
                            <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                        </Link>

                        <Link to="/products" onClick={() => setIsMenuOpen(false)} className='relative px-4 xl:px-6 py-2.5 xl:py-3 text-slate-200 font-medium text-sm xl:text-base tracking-wide hover:text-white transition-all duration-300 group'>
                            <span className='relative z-10'>Products</span>
                            <div className='absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300'></div>
                            <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                        </Link>

                        <Link to="/get-started" onClick={() => setIsMenuOpen(false)} className='bg-gradient-to-r from-orange-500 to-red-600 rounded-xl px-4 xl:px-6 py-2.5 xl:py-3 inline-block'>
                            Get Started
                        </Link>
                    </div>

                    <div onClick={() => setIsMenuOpen(!isMenu)} className='flex items-center lg:hidden cursor-pointer'>
                        <Menu size={30} />
                    </div>
                </nav>
            </div>

            <nav className={`lg:hidden absolute top-full w-full flex flex-col gap-5 p-5 transform transition-all duration-300 bg-gradient-to-r from-slate-800 to-slate-900 ${isMenu ? "max-h-80 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
                <Link to="/" onClick={() => setIsMenuOpen(false)} className='relative px-4 py-2.5 text-slate-200 font-medium text-sm tracking-wide hover:text-white transition-all duration-300 group'>
                    <span className='relative z-10'>Home</span>
                    <div className='absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300'></div>
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                </Link>

                <Link to="/recipe-generator" onClick={() => setIsMenuOpen(false)} className='relative px-4 py-2.5 text-slate-200 font-medium text-sm tracking-wide hover:text-white transition-all duration-300 group'>
                    <span className='relative z-10'>Recipes</span>
                    <div className='absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300'></div>
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                </Link>

                <Link to="/categories" onClick={() => setIsMenuOpen(false)} className='relative px-4 py-2.5 text-slate-200 font-medium text-sm tracking-wide hover:text-white transition-all duration-300 group'>
                    <span className='relative z-10'>Categories</span>
                    <div className='absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300'></div>
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                </Link>

                <Link to="/products" onClick={() => setIsMenuOpen(false)} className='relative px-4 py-2.5 text-slate-200 font-medium text-sm tracking-wide hover:text-white transition-all duration-300 group'>
                    <span className='relative z-10'>Products</span>
                    <div className='absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300'></div>
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                </Link>

                <Link to="/get-started" onClick={() => setIsMenuOpen(false)} className='bg-gradient-to-r from-orange-500 to-red-600 rounded-xl px-4 py-2.5 text-center'>
                    Get Started
                </Link>
            </nav>
        </header>
    );
}

export default Header;
