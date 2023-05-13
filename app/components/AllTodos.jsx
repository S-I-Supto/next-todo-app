'use client'
import React from 'react'
import DeleteBtn from "./DeleteBtn"
const AllTodos = ({ title, description }) => {
    return (
        <div className='bg-gray-900 rounded-md px-2 py-2 mt-2 flex flex-row items-center justify-between'>
            <div className='flex gap-1 flex-col px-2'>
                <h1 className='text-xl'>{title}</h1>
                <span className='text-sm'>{description}</span>
            </div>
            <div><DeleteBtn /></div>
        </div>
    )
}

export default AllTodos