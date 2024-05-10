import React from 'react'
import Vite from '/public/vite.svg'
import { Link } from 'react-router-dom'

export default function navbar() {
    return (
        <div className='px-[15px] flex justify-between h-14 bg-[#ebb]'>
            <img src={Vite} alt='logo' height='50px' width='50px'  className='p-2'/>
            <ul className='block content-center list-none *:px-4'>
                <li className="inline text-lg font-semibold text-white"><Link to='home'>Home</Link></li>
                <li className='inline  text-lg font-semibold text-white'><Link to='contact'>Conact us</Link></li>
                <li className='inline  text-lg font-semibold text-white'><Link to='about'>About</Link></li>
            </ul>
            <button className='button-header text-white border-white '><Link to='signin'> Register</Link></button>
        </div>
    )
}
