import React from 'react'
import { ChefHat, Pin } from 'lucide-react'
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, PinIcon, Heart } from 'lucide-react'

function Footer() {
    return (
        <footer className='bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white'>
            {/* Review Section */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 p-10 sm:p-15 bg-gradient-to-r from-orange-500 to-red-600 text-white text-center'>
                <div>
                    <p className='font-bold text-3xl sm:text-4xl md:text-5xl'>500+</p>
                    <small className='text-sm sm:text-base'>Recipes</small>
                </div>
                <div>
                    <p className='font-bold text-3xl sm:text-4xl md:text-5xl'>50K+</p>
                    <small className='text-sm sm:text-base'>Happy Cooks</small>
                </div>
                <div>
                    <p className='font-bold text-3xl sm:text-4xl md:text-5xl'>4.9</p>
                    <small className='text-sm sm:text-base'>Average Rating</small>
                </div>
                <div>
                    <p className='font-bold text-3xl sm:text-4xl md:text-5xl'>24/7</p>
                    <small className='text-sm sm:text-base'>Support</small>
                </div>
            </div>

            {/* NewsLetter Section */}
            <div className='w-full text-white'>
                <div className='max-w-7xl mx-auto px-10 lg:px-25 py-10 md:p-10 lg:15 flex flex-col gap-5 md:gap-10'>
                    <div className='flex flex-col items-center gap-3 text-center'>
                        <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3'>Stay Updated with <span className='bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent'>Daily Recipes</span></h3>

                        <p className='text-slate-300 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>Get the latest recipes, cooking tips, and culinary inspiration delivered to your inbox</p>
                    </div>
                    <div className='grid grid-row-2 place-items-center md:flex md:justify-center gap-5'>
                        <input
                            className='border border-slate-600 rounded-2xl px-5 py-4 w-full max-w-90 md:max-w-75'
                            type="email"
                            placeholder='Enter your email'
                        />
                        <button className='px-8 py-4 font-bold w-full max-w-90 md:max-w-32 text-base rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 text-white'>Subscribe</button>
                    </div>
                </div>
            </div>

            {/* MainFooter Section */}
            <div className='border-t border-slate-700/50 px-10 py-15 grid place-items-start grid-cols-1 xl:place-items-center sm:grid-cols-2 gap-12 xl:grid-cols-4 text-slate-400'>
                <div className='flex flex-col gap-5'>
                    <div className='flex items-center gap-3'>
                        <div className='bg-orange-500 p-2 rounded-xl'>
                            <ChefHat color='white' size={22} />
                        </div>
                        <strong className='text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-white via-orange-200 to-orange-300 bg-clip-text text-transparent'>Daily Dish</strong>
                    </div>
                    <p className='max-w-80'>Your daily source for delicious recipes, cooking tips, and culinary inspiration. Making every meal memorable.</p>
                    <div className='flex gap-3'>
                        <span className='bg-slate-700/50 p-2 rounded-lg'><Facebook color='white' size={20} /></span>
                        <span className='bg-slate-700/50 p-2 rounded-lg'><Twitter color='white' size={20} /></span>
                        <span className='bg-slate-700/50 p-2 rounded-lg'><Instagram color='white' size={20} /></span>
                        <span className='bg-slate-700/50 p-2 rounded-lg'><Youtube color='white' size={20} /></span>
                    </div>
                </div>
                <div>
                    <h5 className='text-white font-bold text-xl mb-5'>Quick Links</h5>
                    <ul className='flex flex-col gap-3'>
                        <li>Home</li>
                        <li>Recipes</li>
                        <li>Categories</li>
                        <li>About Us</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h5 className='text-white font-bold text-xl mb-5'>Categories</h5>
                    <ul className='flex flex-col gap-3'>
                        <li>Breakfast</li>
                        <li>Lunch</li>
                        <li>Dinner</li>
                        <li>Desserts</li>
                        <li>Beverages</li>
                        <li>Snacks</li>
                    </ul>
                </div>
                <div>
                    <h5 className='text-white font-bold text-xl mb-5'>Get in Touch</h5>
                    <div className='flex flex-col gap-5'>
                        <div className='flex gap-2'><Mail color='orange' /> <div><p>hello@dailydish.com</p> <p>support@dailydish.com</p></div></div>
                        <div className='flex gap-2'><Phone color='orange' /> <div><p>+1 (555) 123-456</p> <p>Mon-Fri 9AM-6PM</p></div></div>
                        <div className='flex gap-2'><PinIcon color='orange' /> <div><p>123 Culinary Street</p> <p>Food City, FC 12345</p></div></div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className='flex flex-col lg:flex-row items-center gap-5 text-slate-400 px-2 md:px-7 py-7 border-t border-slate-700/50'>
                <p>© 2025 Daily Dish. All rights reserved.</p>
                <div className='flex gap-5'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>

                <p className='lg:ml-auto flex'>Made with <Heart fill='red' color='black' className='mx-2 animate-pulse' /> Love for Food Lovers </p>

            </div>

        </footer>
    )
}

export default Footer
