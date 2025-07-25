import React, { useState } from 'react'
import { Star, Clock, Users } from 'lucide-react'
import Recipe from './Recipe'
import { useNavigate } from 'react-router-dom'

function Categories() {
    const [showRecipe, setShowRecipe] = useState(false)
    const [selectedRecipe, setSelectedRecipe] = useState(null)

    const navigate = useNavigate();

    const cardData = [
        {
            cardTitle: 'Banana Milkshake',
            imageUrl: 'image_2.png',
            ingredients: ['banana', 'milk'],
            time: '25',
            serves: '4',
            rating: '4.8'
        },
        {
            cardTitle: 'Spicy Veggie Wrap',
            imageUrl: 'image_2.png',
            ingredients: ['tortilla', 'bell pepper', 'onion', 'carrot', 'spices'],
            time: '15',
            serves: '2',
            rating: '4.6'
        },
        {
            cardTitle: 'Creamy Alfredo Pasta',
            imageUrl: 'image_2.png',
            ingredients: ['pasta', 'cream', 'garlic', 'parmesan', 'butter'],
            time: '30',
            serves: '3',
            rating: '4.9'
        },
        {
            cardTitle: 'Grilled Chicken Salad',
            imageUrl: 'image_2.png',
            ingredients: ['grilled chicken', 'lettuce', 'cucumber', 'tomato', 'vinaigrette'],
            time: '20',
            serves: '2',
            rating: '4.7'
        },
        {
            cardTitle: 'Mango Lassi',
            imageUrl: 'image_2.png',
            ingredients: ['mango', 'yogurt', 'sugar', 'cardamom'],
            time: '10',
            serves: '1',
            rating: '4.5'
        },
        {
            cardTitle: 'Chicken Biryani',
            imageUrl: 'image_2.png',
            ingredients: ['chicken', 'basmati rice', 'yogurt', 'onion', 'spices'],
            time: '35',
            serves: '5',
            rating: '4.9'
        },
        {
            cardTitle: 'Paneer Tikka',
            imageUrl: 'image_2.png',
            ingredients: ['paneer', 'yogurt', 'spices', 'capsicum', 'onion'],
            time: '25',
            serves: '3',
            rating: '4.8'
        },
        {
            cardTitle: 'Avocado Toast',
            imageUrl: 'image_2.png',
            ingredients: ['bread', 'avocado', 'salt', 'pepper', 'lemon juice'],
            time: '10',
            serves: '1',
            rating: '4.3'
        },
        {
            cardTitle: 'Masala Dosa',
            imageUrl: 'image_2.png',
            ingredients: ['dosa batter', 'potato', 'onion', 'mustard seeds', 'curry leaves'],
            time: '20',
            serves: '2',
            rating: '4.6'
        },
        {
            cardTitle: 'Fruit Salad Bowl',
            imageUrl: 'image_2.png',
            ingredients: ['apple', 'banana', 'grapes', 'orange', 'mint'],
            time: '8',
            serves: '2',
            rating: '4.2'
        },
        {
            cardTitle: 'Egg Fried Rice',
            imageUrl: 'image_2.png',
            ingredients: ['rice', 'egg', 'soy sauce', 'vegetables', 'oil'],
            time: '15',
            serves: '2',
            rating: '4.7'
        },
        {
            cardTitle: 'Tomato Soup',
            imageUrl: 'image_2.png',
            ingredients: ['tomato', 'garlic', 'onion', 'cream', 'salt'],
            time: '12',
            serves: '3',
            rating: '4.5'
        },
        {
            cardTitle: 'Chocolate Brownie',
            imageUrl: 'image_2.png',
            ingredients: ['cocoa powder', 'flour', 'sugar', 'butter', 'eggs'],
            time: '25',
            serves: '4',
            rating: '4.9'
        },
        {
            cardTitle: 'Spring Rolls',
            imageUrl: 'image_2.png',
            ingredients: ['spring roll wrappers', 'cabbage', 'carrot', 'noodles', 'soy sauce'],
            time: '18',
            serves: '2',
            rating: '4.4'
        },
        {
            cardTitle: 'Peanut Butter Smoothie',
            imageUrl: 'image_2.png',
            ingredients: ['peanut butter', 'banana', 'milk', 'honey'],
            time: '7',
            serves: '1',
            rating: '4.6'
        },
        {
            cardTitle: 'Stuffed Paratha',
            imageUrl: 'image_2.png',
            ingredients: ['wheat flour', 'potato', 'spices', 'ghee'],
            time: '22',
            serves: '3',
            rating: '4.7'
        },
        {
            cardTitle: 'Garlic Bread',
            imageUrl: 'image_2.png',
            ingredients: ['bread', 'garlic', 'butter', 'parsley'],
            time: '10',
            serves: '4',
            rating: '4.3'
        },
        {
            cardTitle: 'Vegetable Stir Fry',
            imageUrl: 'image_2.png',
            ingredients: ['broccoli', 'carrot', 'bell pepper', 'soy sauce', 'garlic'],
            time: '17',
            serves: '2',
            rating: '4.6'
        },
        {
            cardTitle: 'Oreo Milkshake',
            imageUrl: 'image_2.png',
            ingredients: ['oreo', 'milk', 'ice cream'],
            time: '5',
            serves: '1',
            rating: '4.8'
        },
        {
            cardTitle: 'Butter Chicken',
            imageUrl: 'image_2.png',
            ingredients: ['chicken', 'tomato puree', 'cream', 'butter', 'spices'],
            time: '40',
            serves: '4',
            rating: '5.0'
        }
    ];

    const handleRecipe = (recipe) => {
        setSelectedRecipe(recipe)
        setShowRecipe(true)
        navigate("/recipe", {
            state: {
                recipeTitle: selectedRecipe.cardTitle,
                ingredients: selectedRecipe.ingredients,
            }
        })
    }

    return (
        <>
            <section className='p-10 flex flex-col items-center gap-8 bg-gradient-to-r from-slate-800 to-slate-900 text-slate-300'>
                <div className='text-center space-y-3'>
                    <h2>
                        <span className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-300'>Featured </span>
                        <span className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent'>Recipes</span>
                    </h2>
                    <p className='text-sm sm:text-base md:text-lg lg:text-xl text-slate-400'>Hand picked recipes that our community loves most</p>
                </div>

                <div className='flex flex-wrap justify-center max-w-400 md:px-10 lg:px-20 gap-5'>
                    {cardData.map((recipe, index) => (
                        <div key={index} className='flex flex-col h-90 w-65 sm:w-70 rounded-2xl overflow-hidden'>
                            <img src={recipe.imageUrl} className='w-full' />
                            <div className='flex flex-col justify-center gap-3 bg-slate-800 px-6 h-9/20'>
                                <h3 className='text-2xl font-bold'>{recipe.cardTitle}</h3>
                                <div className='flex gap-3'>
                                    <p className='flex items-center gap-1.5'><Clock size={20} />{recipe.time} min</p>
                                    <p className='flex items-center gap-1.5'><Users size={20} />{recipe.serves}</p>
                                    <p className='flex items-center gap-1.5'><Star size={20} fill='yellow' color='white' />{recipe.rating}</p>
                                </div>
                                <button onClick={() => handleRecipe(recipe)} className='rounded-md text-white font-bold bg-gradient-to-r from-orange-500 to-red-600 hover:opacity-90 transition py-2'>View Recipe</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Categories
