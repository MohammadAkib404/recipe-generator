/* src/App.jsx */
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import RecipeGenerator from "./Pages/RecipeGenerator";
import Recipe from "./Pages/Recipe";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe-generator" element={<RecipeGenerator />} />
        <Route path="/recipe" element={<Recipe />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
