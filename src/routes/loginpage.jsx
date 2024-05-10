import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../component/navbar'
import InputField from '../component/input-field'
import Footer from '../component/footer'

export default function LoginPage() {
    return (
        <>
            <Navbar />
            <div className='app-container'>
                <div className='block'>
                    <h1 className='text-4xl py-10'>Sign in</h1>
                    <hr></hr>

                    <div className='grid grid-cols-8 mt-14 gap-10 h-[40%]'>
                        <div className='col-span-5 grid grid-cols-2 gap-x-10 gap-y-0'>
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

                    <Footer />
                </div>

            </div>
        </>

    )
}
/*    <div className='flex m-auto h-[calc(100svh-10rem)] w-[50svh]'>
                <div className='min-h-96 min-w-96 px-10 block common-border m-auto  py-10 bg-[#fcf3f398]'>
                    <h6 className='block text-2xl font-semibold text-red-600'>Already register?</h6>
                    <h1 className='text-sm text-gray-500 font-semibold'>Continue form here...</h1>

                    <input className='input-field mt-7' type="email" name="email" id="singin-email" placeholder='Email'></input>
                    <input className='input-field mt-7' type="password" name="password" id="singin-password" placeholder='Password'></input>
                    <button className='button-fill'>Login</button>
                </div>
            </div > */