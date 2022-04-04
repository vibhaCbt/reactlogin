import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Login, Register } from '../pages'

export const HeaderRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='register' element={<Register />} />
                <Route path='login' element={<Login />} />
            </Routes>
        </>
    )
}