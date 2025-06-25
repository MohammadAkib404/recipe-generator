import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Header from './Components/Header'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import RecipeGenerator from './Pages/RecipeGenerator'
import About from './Pages/About'


function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/recipe-generator' element={<RecipeGenerator/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
