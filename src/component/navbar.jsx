import React from 'react'
import Vite from '/public/vite.svg'
import { Link } from 'react-router-dom'

export default function navbar() {
    return (
        <div className='container mx-auto  flex justify-between h-14 '>
            <img src={Vite} alt='logo' height='50px' width='50px' />
            <ul className='block content-center list-none *:px-4'>
                <li className="inline text-lg font-semibold"><Link to='home'>Home</Link></li>
                <li className='inline  text-lg font-semibold'><Link to='contact'>Conact us</Link></li>
                <li className='inline  text-lg font-semibold'><Link to='about'>About</Link></li>
            </ul>
            <button className='button-header'><Link to='signin'> Register</Link></button>
        </div>
    )
}
