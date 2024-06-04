import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-20 w-full bg-purple-500 flex justify-center items-center'>
        <ul className='flex h-full w-full justify-around items-center'>
            <li className='text-white text-2xl'><a href="">Home</a></li>
          
            <li className='text-white text-2xl'><Link to='/colorpicker' className='nav-link active'>Colorpicker</Link></li>
            
            
            <li className='text-white text-2xl'>About</li>
            <li className='text-white text-2xl'><a href="">Visit</a></li>
        </ul>
    </div>
  )
}

export default Navbar