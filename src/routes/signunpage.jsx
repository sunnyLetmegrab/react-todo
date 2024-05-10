import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../component/navbar';
import InputField from '../component/input-field';

export default function SigninPage() {
    var navigate = useNavigate();
    return (
        <>
            <Navbar />
            <div className='app-container'>
                <h1 className='text-4xl py-10'>Sign up</h1>
                <hr></hr>
                <div className='grid grid-cols-12 mt-14 gap-10 mb-10'>
                    <div className='col-span-8 grid grid-cols-2 gap-x-10 gap-y-5'>
                        <InputField label='Full name' type='text' id='full-name' />
                        <InputField label='Email' type='email' id='email' />

                        <InputField label='Date of birth' type='date' id='dob' />
                        <InputField label='User name' type='text' id='user-name' />

                        <InputField label='password' type='password' id='pass' />
                        <InputField label='Confirm password' type='password' id='cnf-pass' />
                        <hr className='col-span-2 my-6' />
                        <InputField label='Address' type='text' id='address' className='col-span-2' />
                        <InputField label='Pincode' type='text' id='pincode' />
                        <InputField label='City' type='text' id='city' />
                        <InputField label='State' type='text' id='state' />
                        <div className='flex col-span-2'>
                            <input type='checkbox' className='mr-2' />
                            <h1 className='text-sm '>By pressing the Register button means that you have agreed to the terms and conditions of the application</h1>
                        </div>
                        <button className='button-fill h-10 rounded col-span-2'>Sign up</button>
                    </div>
                    <div className='col-span-4'>
                        <img src="https://img.freepik.com/free-photo/woman-holds-fashion-shopping-bag-beauty_1150-13673.jpg"
                            alt="text" className='w-full' />
                    </div>
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