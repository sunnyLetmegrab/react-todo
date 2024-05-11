import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../component/navbar'
import InputField from '../component/input-field'
import Footer from '../component/footer'

export default function LoginPage() {
    return (
        <div className='flex flex-col min-h-screen'>
            <div className='app-container'>
                <div className='block'>
                    <h1 className='text-4xl py-10'>Sign in</h1>
                    <hr></hr>

                    <div className='grid grid-cols-8 gap-10 h-[40%] my-10'>
                        <div className='col-span-5 grid grid-cols-2 auto-rows-max gap-x-10 gap-y-5'>
                            <InputField label='Email' />
                            <InputField label='Password' />
                            <button className='col-span-2 button-fill h-10 rounded'>Sign in</button>
                            <span className='col-span-1'>forgot password</span>
                            <span className='col-span-1'>dont have account yet?</span>
                        </div>
                        <div className='col-span-3'>
                            <img src='https://img.freepik.com/free-photo/woman-holds-fashion-shopping-bag-beauty_1150-13673.jpg' alt='text'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}