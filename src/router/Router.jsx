import React from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import Tours from '../pages/Tours'
import Home from '../pages/Home'
import SearchResultlist from '../pages/SearchResultlist'
import TourDetails from '../pages/TourDetails'
import Register from '../pages/Register'
import Login from '../pages/Login'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/tour' element={<Tours />} />
        <Route path='/tour/:id' element={<TourDetails />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/tour/search' element={<SearchResultlist />} />
    </Routes>
  )
}

export default Router
