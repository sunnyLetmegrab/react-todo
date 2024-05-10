import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../component/navbar';
import InputField from '../component/input-field';

export default function SigninPage() {
    var navigate = useNavigate();
    return (
        <>
            <Navbar />
            <div className='container mx-auto px-4 py-6'>
                <h1 className='text-4xl py-10'>Sign up</h1>
                <hr></hr>
                <div className='flex mt-14'>
                    <div className='flex  max-w-[60%] w-full'>
                        <div className='flex w-full'>
                            <InputField label='Full name' />
                            <InputField label='Email' />
                            
                        </div>

                    </div>
                    <div className='block max-w-[20%] w-full'><img src="https://w7.pngwing.com/pngs/605/1006/png-transparent-shopping-graphy-women-shopping-blue-holidays-photography-thumbnail.png"
                        alt="text" className='' /></div>
                </div>
            </div>



        </>

    )
}

/* <div className='flex m-auto h-[calc(100svh-10rem)] w-[50svh]'>
                <div className='min-h-96 min-w-96 px-10 block common-border m-auto  py-10 bg-[#fcf3f398]'>
                    <h6 className='block text-2xl font-semibold text-red-600'>New user</h6>
                    <h1 className='text-sm text-gray-500 font-semibold'>Start your journey here...</h1>
                    <input className='input-field mt-7' name="name" id="singin-name" placeholder='Name'></input>
                    <input className='input-field mt-7' type="email" name="email" id="singin-email" placeholder='Email'></input>
                    <input className='input-field mt-7' type="password" name="password" id="singin-password" placeholder='Password'></input>
                    <button className='button-fill mt-5 h-10'>Reigster</button>
                    <button className='button-outline mt-5 h-10' onClick={(e) => {
                        navigate('/login');
                    }}>Login</button>





                </div>

            </div > */