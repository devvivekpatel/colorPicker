import React from 'react'
import { useState } from 'react'

const ColorPicker = () => {

    const [color,setColor] = useState('black')
  return (
    <div style={{backgroundColor:color}} className='h-screen w-full flex justify-center items-center'>

        <div className='h-14 w-1/2 flex justify-center items-center bg-purple-600 rounded-full gap-4 ' style={{backgroundColor:color}}>

        <button className='bg-red-700 text-lg pl-4 pr-4 rounded-full text-white' onClick={()=>{setColor('red')}}>Red</button>

        <button className='bg-green-700 text-lg pl-4 pr-4 rounded-full text-white' onClick={()=>{setColor('green')}}>Green</button>

        <button className='bg-blue-700 text-lg pl-4 pr-4 rounded-full text-white' onClick={()=>{setColor('blue')}}>Blue</button>

        <button className='bg-yellow-700 text-lg pl-4 pr-4 rounded-full text-white' onClick={()=>{setColor('yellow')}}>Yellow</button>

        <button className='bg-sky-700 text-lg pl-4 pr-4 rounded-full text-white' onClick={()=>{setColor('sky')}}>Sky</button>
        </div>
    </div>
  )
}

export default ColorPicker