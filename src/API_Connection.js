import axios from "axios";

const POLLINATIONS_API_KEY = import.meta.env.VITE_POLLINATIONS_API_KEY;

const WIDTH = 1024;
const HEIGHT = 1024;

const prompt = (ingredients) => {
  return `
You are a professional chef and recipe expert.

Based on the ingredients create a detailed practical recipe.

INGREDIENTS:
${ingredients}

Return ONLY valid markdown.

# 🧑‍🍳 Recipe Title
A Unique but relvant recipe title.

## ⏱ Cooking Time
Provide prep + cooking time.

## 🎚 Difficulty
Beginner / Intermediate / Advanced

## 📝 Ingredients
- Include quantities
- Use bullet points

## 🔪 Instructions
1. Number each step clearly
2. Include cooking cues and timings

## 👨‍🍳 Chef’s Tips
- 2 to 3 practical tips

## 🔄 Variations
- 1 to 2 alternate versions

Requirements:
- Use all ingredients
- Home cook friendly
- Balanced flavors
- No extra explanations outside markdown
`;
};

const getImages = (imagePrompt) => {
  const seed = Math.floor(Math.random() * 1000000);

  const params = new URLSearchParams({
    model: "flux",
    width: WIDTH.toString(),
    height: HEIGHT.toString(),
    enhance: "true",
    nologo: "true",
    private: "true",
    seed: seed.toString(),
    key: POLLINATIONS_API_KEY,
  });

  const imageUrl = `https://gen.pollinations.ai/image/${encodeURIComponent(imagePrompt)}?${params.toString()}`;

  console.log(imageUrl);

  return imageUrl;
};

const getRecipe = async (ingredients) => {
  try {
    const response = await axios.post(
      "https://gen.pollinations.ai/v1/chat/completions",
      {
        model: "openai",
        messages: [
          {
            role: "system",
            content: "You are a professional chef that responds only in markdown.",
          },
          {
            role: "user",
            content: prompt(ingredients),
          },
        ],
        max_tokens: 800,
      },
      {
        headers: {
          Authorization: `Bearer ${POLLINATIONS_API_KEY}`,
          "Content-Type": "application/json",
        },
      },
    );

    return response.data?.choices?.[0]?.message?.content || response;
  } catch (error) {
    console.error("Recipe generation error:", error.response?.data || error.message);
    return "Failed to generate recipe.";
  }
};

export { getRecipe, getImages };
