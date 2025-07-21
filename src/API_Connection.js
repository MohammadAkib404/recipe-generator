import axios from "axios";
import { useState } from "react";

const RECIPE_API_KEY = import.meta.env.VITE_RECIPE_API_KEY;

const Width = "512";
const Height = "512";
const Model = 'flux';

const prompt = (ingredients) => {
  return `You are a professional chef and recipe expert. Based on the ingredients provided, create a detailed, practical recipe.

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
}

const getImages = (imageName) => {
  const seed = String(Math.floor(Math.random() * 100));

  const baseUrl = "https://image.pollinations.ai/prompt/";
  const encodedPrompt = encodeURIComponent(imageName);
  const params = new URLSearchParams({
    width: Width,
    height: Height,
    noLogo: 'true',
    enhance: 'true',
    model: Model,
    seed,
  })

  const fullUrl = `${baseUrl}${encodedPrompt}?${params.toString}`;
  console.log(fullUrl)
  return fullUrl;
};


const getRecipe = async (ingredients) => {
  try {
    const res = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "mistralai/mistral-7b-instruct",
        messages: [
          { role: "user", content: `Suggest a recipe with: ${prompt(ingredients)}` },
        ],
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${RECIPE_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:5173",
          "X-Title": "Recipe Generator",
        },
      }
    );
    const reply = res.data.choices[0].message.content;
    return reply;
  } catch (error) {
    console.error("Recipe generation error:", error);
    return reply;
  }
};

export {getRecipe, getImages};
