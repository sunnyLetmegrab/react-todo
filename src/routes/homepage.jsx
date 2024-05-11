import React from 'react'
import InputField from '../component/input-field'
import GridList from '../component/grid_item_list'

export default function HomePage() {
    return (
        <>
            <div className='flex mx-auto justify-center py-8'>
                <InputField className='w-[40%]' borderRadius='rounded-3xl' placeholder='Search...' />
            </div>
            <div className='grey-bg my-10 px-auto text-center py-8 rounded-full font-semibold text-xl'><span>Men's sandels</span></div>
            <GridList itemCount={10} />
        </>
    )
}
