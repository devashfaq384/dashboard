import React from 'react'

const Sidebar = () => {
  return (
    <div className='m-4 p-2 rounded-lg  bg-white' >
        <div className='flex items-center gap-2 '>
            <div>
                <img  className='w-14' src='/main-logo-bg-white-1@2x.png' alt="Logo" />
            </div>
            <div className='text-steelblue-100 text-[16px] font-bold' >GSC Water District</div>
        </div>
        <div className='flex justify-center flex-col mb-4 ' >
          <div className='bg-steelblue-100 rounded-lg w-[90%] text-white p-2' >
            <img className='w-6'  src='/vector3.svg' alt="" />
            <span className='font-bold relative left-1 md:left-6 ' >
              Dashboard
            </span>
          </div>
        </div>
        <div className='flex justify-center flex-col mb-4 ' >
          <div className='rounded-lg w-[90%] text-steelblue-100 p-2' >
            <img className="w-6" src='/carbondevelopment.svg' alt="" />
            <span className='font-bold relative left-1 md:left-6 ' >
              Development/Rev.
            </span>
          </div>
        </div>
        <div className='flex justify-center flex-col mb-4 ' >
          <div className='rounded-lg w-[90%] text-steelblue-100 p-2' >
            <img className="w-6" src='/vector2.svg' alt="" />
            <span className='font-bold relative left-1 md:left-6 ' >
              Data Sheet
            </span>
          </div>
        </div>
        <div className='flex justify-center flex-col mb-4 ' >
          <div className='rounded-lg w-[90%] text-steelblue-100 p-2' >
            <img className="w-6" src='/mdifilecompare.svg' alt="" />
            <span className='font-bold relative left-1 md:left-6 ' >
              Report
            </span>
          </div>
        </div>
        <div className='flex justify-center flex-col mb-4 ' >
          <div className=' rounded-lg w-[90%] text-steelblue-100 p-2' >
            <img className="w-6" src='/vector4.svg' alt="" />
            <span className='font-bold relative left-1 md:left-6 ' >
              Users
            </span>
          </div>
        </div>
    </div>
  )
}

export default Sidebar