import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function GridList({ itemCount, onItemClick }) {
    var count = itemCount ?? 5;
    var list = Array.from(Array(count).keys());
    var nav = useNavigate();
    return (
        <>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(17rem,1fr))] gap-3'>
                {list.map((item) => (<div key={item} className='col-span-1'>
                    <div className='grid-item' onClick={(e) => {
                        nav(`/product/${item}`)
                    }}>
                        <img
                            className='h-52 rounded'
                            src='https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='text'></img>
                        <span className='block font-bold text-sm'>Jackson Ask 6JP Men’s Sandals  - Navy</span>
                        <span className='block text-xs text-[var(--grey-text)]'>Rp 499.000</span>
                        <span className='block font-bold text-sm'>Rp 199.000</span>
                        <span className='block text-xs'>4.5/5</span>
                    </div>
                </div>))}
            </div>
            <button className='button-fill w-fit block mx-auto my-10 px-5 h-10 rounded-full font-normal'><span>See more</span></button>
        </>
    )
}
