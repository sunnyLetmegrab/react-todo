import React from 'react'

export default function InputField({ type, placeholder, onchange, id, label, className, borderRadius }) {
    return (
        <div className={`block ${className}`}>
            <label for={id} className='block mb-3 font-semibold ml-2 text-[14px]' >{label}</label>
            <input id={id} className={`input-field ${borderRadius}`} type={type} placeholder={placeholder} onchange={{ onchange }} />
        </div>
    )
}
