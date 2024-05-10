import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../component/navbar'

export default function LoginPage() {
    return (
        <>
            <Navbar />
            <div className='flex m-auto h-[calc(100svh-10rem)] w-[50svh]'>
                <div className='min-h-96 min-w-96 px-10 block common-border m-auto  py-10 bg-[#fcf3f398]'>
                    <h6 className='block text-2xl font-semibold text-red-600'>Already register?</h6>
                    <h1 className='text-sm text-gray-500 font-semibold'>Continue form here...</h1>

                    <input className='input-field mt-7' type="email" name="email" id="singin-email" placeholder='Email'></input>
                    <input className='input-field mt-7' type="password" name="password" id="singin-password" placeholder='Password'></input>
                    <button className='button-fill'>Login</button>
                </div>
            </div >
        </>

    )
}
