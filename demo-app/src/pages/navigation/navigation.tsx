import React from 'react'

export default function Navigation() {
  return (
    <div className='nav'>
        <ul className='flex justify-between bg-white px-5 py-4'>
            <li className='font-bold'>ASSETS MANAGEMENT PLATFORM</li>
            <li>
            <button className="flex w-20 justify-center rounded-md bg-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
            </li>
        </ul>
    </div>
  )
}
