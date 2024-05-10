import React from 'react'

export default function InputField({ type, placeholder, onchange, id, label, className }) {
    return (
        <div className='flex flex-col mx-7 w-full'>
            <label for={id} className='block my-2 ' >{label}</label>
            <input id={id} className={`input-field ${className}`} type={type} placeholder={placeholder} onchange={{ onchange }} />
        </div>
    )
}
