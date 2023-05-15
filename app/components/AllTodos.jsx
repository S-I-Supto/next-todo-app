'use client'
import React from 'react'
import DeleteBtn from "./DeleteBtn"
const AllTodos = ({ title, description, id }) => {
    return (
        <div className='bg-gray-900 rounded-md px-2 py-2 mt-2 flex flex-row items-center justify-between pb-2'>
            <div className='flex gap-1 flex-col px-2'>
                <h1 className='text-lg md:text-xl'>{title}</h1>
                <span className='text-sm'>{description}</span>
            </div>
            <div><DeleteBtn id={id} /></div>
        </div>
    )
}

export default AllTodos