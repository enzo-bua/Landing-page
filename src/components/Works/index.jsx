import React from 'react'

export function Works() {
  return (
    <div className='xl:p-20 p-8'>
      <div className='mb-8'>
        <h1 className='xl:text-[40px] text-[30px] font-bold'>We Create World-Class Digital Products</h1>
        <p className='text-xl text-gray-500'>By information about design the world to the best instructors, heatc helping By information</p>
      </div>
      {/* works */}
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-8'>
        {/* section 1 */}
        <div className='flex flex-col gap-2 '>
          <img 
            className='w-full h-[600px] object-cover rounded-3xl'
            src="work1.png" 
            alt="" 
          />
          <p className='text-gray-500'>App Design - June 20, 2022</p>
          <h3 className='text-2xl font-bold'>App Redesign</h3>
          <p className='text-gray-500'>
            By information about design the world to the best instructors, heatc
            helping By information about design the world to the best
            instructors, heatc helping
          </p>
        </div>

        {/* section 2 */}
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-8'>
          <div className='flex flex-col gap-2'>
            <img 
              className='w-full h-56 object-cover rounded-3xl'
              src="work2.png" 
              alt="" 
            />
            <p className='text-gray-500'>App Design - June 20, 2022</p>
            <h3 className='text-2xl font-bold text-blue-900'>Redesign Channel Website Landing Page </h3>
          </div>
          <div className='flex flex-col gap-4'>
            <img 
              className='w-full h-56 object-cover rounded-3xl'
              src="work3.png" 
              alt="" 
            />
            <p className='text-gray-500'>App Design - June 20, 2022</p>
            <h3 className='text-2xl font-bold text-blue-900'> New Locator App For a New Company</h3>
          </div>
          <div className='flex flex-col gap-4'>
            <img 
              className='w-full h-56 object-cover rounded-3xl'
              src="work4.png" 
              alt="" 
            />
            <p className='text-gray-500'>App Design - June 20, 2022</p>
            <h3 className='text-2xl font-bold text-blue-900'>Rental Rooms Web App Platform</h3>
          </div>
          <div className='flex flex-col gap-4'>
            <img 
              className='w-full h-56 object-cover rounded-3xl'
              src="work5.png" 
              alt="" 
            />
            <p className='text-gray-500'>App Design - June 20, 2022</p>
            <h3 className='text-2xl font-bold text-blue-900'>Calendar App for Big SASS Company</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
