import React, { useState } from 'react'

import axios from 'axios'
import { ChefHat, Sparkles, Clock, Users, Search, Plus, Package } from 'lucide-react'
import Markdown from 'react-markdown';


function RecipeGenerator() {

    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [result, setResult] = useState('');

    const RECIPE_API_KEY = import.meta.env.VITE_RECIPE_API_KEY;


    const fetchImages = async () => {
        try {
            const res = await axios.post('http://localhost:3000/generate-image', {
                prompt: 'pasta'
            })
            setResult(res.data)
            console.log(result);
        } catch (err) {
            console.error('Error:', err)
        }
    }

    const prompt = `You are a professional chef and recipe expert. Based on the ingredients provided, create a detailed, practical recipe.

INGREDIENTS AVAILABLE: ${ingredients}

📌 Please return your response **strictly in Markdown format**.

Use the following Markdown structure **with proper headings and spacing**:

# 🧑‍🍳 Recipe Name  
_A creative but clear title_

## ⏱ Cooking Time  
_Preparation + Cooking duration_

## 🎚 Difficulty  
_Beginner / Intermediate / Advanced_

## 📝 Ingredients  
- List items using dashes (-)  
- Include exact quantities and common pantry staples  
- Example: \`- 1 tbsp olive oil\`

## 🔪 Instructions  
1. Number every step clearly  
2. Include cooking temperatures, times, and visual cues (e.g., golden brown, soft, aromatic)

## 👨‍🍳 Chef’s Tips  
- Write 2–3 short tips to enhance flavor, texture, or ease of cooking

## 🔄 Variations  
- Suggest 1–2 alternate versions (e.g., vegetarian, spicier, quicker)

---

### ✅ Requirements:
- Use **all provided ingredients**
- Make it suitable for **home cooks**
- Focus on **balanced flavors and nutrition**
- Add **food safety notes** where relevant

⚠️ Do not include anything outside the Markdown. No extra explanations or introductions. Also avoid using Italic Font.
`;

    const generateRecipe = async () => {
        try {
            const res = await axios.post(
                'https://openrouter.ai/api/v1/chat/completions',
                {
                    model: 'mistralai/mistral-7b-instruct',
                    messages: [{ role: 'user', content: `Suggest a recipe with: ${prompt}` }],
                    temperature: 0.7
                },
                {
                    headers: {
                        Authorization: `Bearer ${RECIPE_API_KEY}`,
                        'Content-Type': 'application/json',
                        'HTTP-Referer': 'http://localhost:5173',
                        'X-Title': 'Recipe Generator'
                    }
                }
            );
            const reply = res.data.choices[0].message.content;
            setResponse(reply);
        } catch (error) {
            console.error('Recipe generation error:', error);
            setResponse('Error: ' + error.message);
        }
    };

    const addIngredients = (e) => {
        e.preventDefault();
        setIngredients((prev) => ([
            ...prev,
            input
        ]))
        setInput('');
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

                    <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl mt-2.5 mb-2 sm:mb-3 sm:mt-3 md:mb-4 md:mt-4 lg:mb-5 lg:mt-5 font-bold bg-gradient-to-r from-orange-400 via-orange-450 to-orange-500 bg-clip-text text-transparent p-3'>
                        Recipe Generator
                    </h3>

                    <p className='text-center text-sm sm:text-base md:text-lg text-slate-300 max-w-xl'>
                        Transform your ingredients into a culinary masterpiece with AI-powered suggestions
                    </p>
                </div>

                {/* InputContainer  */}
                <div className='max-w-xl w-full rounded-3xl p-10 bg-slate-800/50 border border-slate-700/50 flex flex-col gap-5 mt-5'>

                    <form onSubmit={addIngredients}>
                        <h5 className='text-orange-300 font-semibold pb-2 pl-0.5'>What ingredients do you have?</h5>

                        <div className='flex gap-3'>
                            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Enter an ingredient' className='w-full bg-slate-700/50 text-white px-4 py-3 rounded-xl border-2 border-slate-600 focus:border-orange-500 focus:outline-none transition-all duration-300 placeholder-slate-400' />

                            <button type='submit' aria-label='Add ingredient' className='bg-gradient-to-r from-orange-400 to-orange-700 p-3.5 rounded-xl'>
                                <Plus />
                            </button>
                        </div>
                    </form>

                    <div className=''>

                        <div className='flex gap-5 px-5 py-4'>
                            <span className='bg-orange-400 p-2.5 rounded-lg' ><Package color='white' size={25} /> </span>
                            <h4 className='text-3xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-red-400 bg-clip-text text-transparent'>Ingredients on Hand:-</h4>
                        </div>

                        <div className='flex flex-col gap-5'>
                            {ingredients.map((ingredient) => (
                                <div className='flex items-center gap-5 bg-slate-700/40 p-5 rounded-xl'>
                                    <span className='bg-slate-600 p-2.5 rounded-xl'>
                                        <ChefHat color='white' size={20} />
                                    </span>
                                    <p className='text-slate-200 text-xl font-semibold'>{ingredient}</p>
                                </div>
                            ))}
                        </div>

                    </div>

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

                    <button onClick={fetchImages} className='flex bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl p-4 justify-center gap-3'>
                        <Search />
                        <p className='font-bold'>Generate Recipe</p>
                        <Sparkles />
                    </button>
                    {/* <div>
                        <img src={imageSrc} alt="" />
                    </div> */}
                </div>
            </section>
            <section>
                {response && (
                    <div className="px-5 sm:px-10 py-12 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
                        <div className="max-w-4xl mx-auto bg-slate-800/30 rounded-2xl p-8 md:p-12 border border-slate-700/50">
                            <Markdown components={{
                                h1: ({ children }) => <h1 className="text-3xl text-center md:text-4xl font-bold mb-6 text-orange-400 border-b-2 border-orange-400 pb-3">{children}</h1>,
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
                            }}>
                                {response}
                            </Markdown>
                        </div>
                    </div>
                )}
            </section>

        </>
    )
}

export default RecipeGenerator
