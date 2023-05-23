import React from 'react'
import Box from './Box'
import Graph from './Graph'

const Dashbaord = () => {
  return (
    <div className='m-4 ' >
      {/* heder  */}
      <div className=' mb-6 p-3 bg-white rounded-lg flex justify-between items-center'>
        <div className='text-[18px] font-bold' >Dashboard</div>
        <div className='flex'> 
          <div className='flex flex-col text-[14px] items-end text-gray-400' >
            <div>General manager</div>
            <div>admin</div>
          </div>

          <div className='mx-2 bg-steelblue-100 rounded-full w-fit text-white font-bold py-1 px-2 text-[25px] ' >
            G
          </div>
          <img src='/iconmore.svg' alt="" />
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6' >
          <Box></Box>

      </div>
      </div>
  )
}

export default Dashbaord