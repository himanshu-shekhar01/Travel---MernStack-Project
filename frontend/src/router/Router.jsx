import React from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import Tours from '../pages/Tours'
import Home from '../pages/Home'
import SearchResultlist from '../pages/SearchResultlist'
import TourDetails from '../pages/TourDetails'
import Register from '../pages/Register'
import Login from '../pages/Login'
import ThankYou from '../pages/ThankYou'
import About from '../pages/About'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/tour' element={<Tours />} />
        <Route path='/about' element={<About/>} />
        <Route path='/tour/:id' element={<TourDetails />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/thank-you' element={<ThankYou/>} />
        <Route path='/tour/search' element={<SearchResultlist />} />
    </Routes>
  )
}

export default Router
