import React, { useState } from 'react'
import { RiCheckboxBlankCircleFill, RiMenu3Fill, RiCloseLine } from 'react-icons/ri'
export function Header() {

  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className='flex items-center justify-between xl:justify-start py-4 px-8 w-full h-[10vh] z-50'>
      <div className='xl:w-1/6 text-center -mt-4'>
        <a href='#' className='text-2xl font-bold relative p-1 bg-white'>
          Power<span className='text-primary text-5xl'>.</span> 
          <RiCheckboxBlankCircleFill className='absolute -left-3 -bottom-3 text-primary -z-10' />
        </a>
      </div>

      <nav 
        className={`bg-white fixed w-[80%] md:[40%] xl:w-full h-full 
        ${showMenu ? 'left-0' : '-left-full'} 
        top-0 xl:static flex-1 flex flex-col xl:flex-row 
        justify-center items-center gap-10 transition-all duration-500 z-50`}
      >

        <a href="#" className=''>Home</a>
        <a href="#" className=''>About Ue</a>
        <a href="#" className=''>Serveces</a>
        <a href="#" className=''>Products</a>
      </nav>
      <button onClick={() => setShowMenu(!showMenu)} className='xl:hidden text-2xl p-2'>
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </header>
  )
}
