import React from 'react'
import AppTitle from './app_title'
import InputField from './input-field'

export default function Footer() {
  return (

    <div className='py-20 px-24  bg-[var(--theme-color)] mt-auto w-full'>
      <div className='grid grid-cols-7 mb-5'>
        <AppTitle className='col-span-5 text-3xl text-white' />
        <InputField className='col-span-2' borderRadius='rounded-3xl' />
      </div>

      <div className='grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] my-10 *:text-white'>

        <div className='footer-title'>
          <span>Company</span>
          <ul>
            <li>About us</li>
            <li>Our store</li>
            <li>News</li>
          </ul>

        </div>
        <div className='footer-title'><span>Help</span>
          <ul>
            <li>FAQ</li>
            <li>Help</li>
            <li>Term</li>
          </ul>
        </div>
        <div className='footer-title'>
          <span>Social media</span>
        <ul>
            <li>Facebook</li>
            <li>Tiktok</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className='footer-title'><span>Contact</span></div>

      </div>
    </div>
  )
}