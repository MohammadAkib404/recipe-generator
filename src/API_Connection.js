import axios from "axios";
import { useState } from "react";

const RECIPE_API_KEY = import.meta.env.VITE_RECIPE_API_KEY;

const Width = "800";
const Height = "400";

const prompt = (recipeTitle, ingredients) => {
  return `You are a professional chef and recipe expert. Based on the ingredients ${
    recipeTitle ? `and ${recipeTitle}` : ""
  } provided, create a detailed, practical recipe.

INGREDIENTS AVAILABLE: ${ingredients}

📌 Please return your response **strictly in Markdown format**.

Use the following Markdown structure **with proper headings and spacing**:

# 🧑‍🍳 ${recipeTitle || "A unique and relevant dish title"}

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
};

const getImages = (imageName) => {
  const seed = String(Math.floor(Math.random() * 100));

  const baseUrl = "https://image.pollinations.ai/prompt/";
  const encodedPrompt = encodeURIComponent(imageName);
  const params = new URLSearchParams({
    width: Width,
    height: Height,
    noLogo: "true",
    enhance: "true",
    seed,
  });

  const fullUrl = `${baseUrl}${encodedPrompt}?${params.toString()}`;
  console.log(fullUrl);
  return fullUrl;
};

const getRecipe = async (recipeTitle, ingredients) => {
  console.log(recipeTitle);
  try {
    console.log(`${ingredients} from `);
    const res = await axios.post(
      "https://api.a4f.co/v1/chat/completions",
      {
        model: "provider-6/gpt-oss-20b",
        messages: [
          {
            role: "user",
            content: String(prompt(recipeTitle, ingredients)),
          },
        ],
        max_tokens: 500,
      },
      {
        headers: {
          Authorization: `Bearer ${RECIPE_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const reply = res.data.choices[0].message.content;
    return reply;
  } catch (error) {
    console.error("Recipe generation error:", error);
  }
};

export { getRecipe, getImages };
