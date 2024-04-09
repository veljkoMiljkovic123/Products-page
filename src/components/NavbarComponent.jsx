import React from 'react'
import { NavLink } from 'react-router-dom'

function NavbarComponent() {
  return (
    <div className='container mx-auto flex items-center justify-between h-[100px]'>
        <h2 className='uppercase font-bold'>
            <a href="/">Logo</a>
        </h2>

        <ul className='flex gap-6 cursor-pointer'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/products'>Products</NavLink>
           
        </ul>
    </div>
  )
}

export default NavbarComponent