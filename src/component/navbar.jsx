import React from 'react'
import Vite from '/public/vite.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import AppTitle from './app_title';

export default function Navbar() {
    var navigate = useNavigate();

    var navItems = [
        { id: 1, name: 'Home', path: 'home' },
        { id: 2, name: 'Contact us', path: 'contact' },
        { id: 3, name: 'About us', path: 'about' },
    ];

    return (
        <div className='px-[15px] flex justify-between h-14'>
            <AppTitle className='text-4xl' />
            <ul className='block content-center list-none *:px-4'>
                {navItems.map((e) =>
                (
                    <li key={e.id} className="inline">
                        <NavLink className={({ isActive }) => !isActive ? "nav-link" : "nav-link text-blue-500"} to={`/${e.path}`}>{e.name}</NavLink>
                    </li>
                )
                )}
            </ul>
            <div className='flex content-center items-center'>
                <button className='button-fill px-4 text-sm mr-4' onClick={() => {
                    navigate('/signup');
                }}>Register</button>
                <button className='button-outline px-4 text-sm mr-4' onClick={() => {
                    navigate('/login');
                }}>login</button>
            </div>
        </div>
    )
}
