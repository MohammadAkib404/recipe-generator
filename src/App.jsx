import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Header from './Components/Header'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import RecipeGenerator from './Pages/RecipeGenerator'
import Recipes from './Pages/Recipes'


function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/recipe-generator' element={<RecipeGenerator/>}/>
        <Route path='/categories' element={<Recipes/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
