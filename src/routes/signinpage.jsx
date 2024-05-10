import React from 'react'

export default function SigninPage() {
    return (
        <div className='flex m-auto align-middle content-center items-center justify-center h-[100svh] w-[50svh]'>
            <div className='block  border rounded my-auto px-10 py-10'>
                <input className='block h-14' type="email" name="email" id="singin-email" placeholder='Email'></input>
                <input className='block h-14' type="password" name="password" id="singin-password" placeholder='Password' ></input>

            </div>

        </div >
    )
}
