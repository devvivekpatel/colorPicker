import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-20 w-full bg-purple-500 flex justify-center items-center'>
        <ul className='flex h-full w-full justify-around items-center'>
            <li className='text-white text-2xl'><a href="">Home</a></li>
          
            <li className='text-white text-2xl'><Link to='/colorpicker' className='nav-link active'>Colorpicker</Link></li>
            
            
            <li className='text-white text-2xl'>About</li>
            <li className='text-white text-2xl'><Link to='/todolist' className='nav-link active'>To-do-List</Link></li>
            <li className='text-white text-2xl'><Link to='/localstorage' className='nav-link active'>LocalStorage</Link></li>
            <li className='text-white text-2xl'><Link to='/formsubmit' className='nav-link active'>Form Submit</Link></li>
            <li className='text-white text-2xl'><Link to='/signin' className='nav-link active'>Sign In</Link></li>
        </ul>
    </div>
  )
}

export default Navbar