import React from 'react'
import { Route, Routes } from 'react-router-dom'
// pages
import Home from '../pages/Home'
// Components
import Navbar from '../components/navbar/Navbar' 
import Footer from '../components/footer/Footer'

const MainRoute = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer/>
    </>
  )
}

export default MainRoute