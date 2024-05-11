import React from 'react'
import Navbar from '../component/navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../component/footer'

export default function Root() {
    return (
        <div>
            <Navbar />
            <div className='container mx-auto px-4 py-6'>
                <Outlet />
            </div>
            <Footer/>
        </div>
    )
}
