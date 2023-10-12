import React from 'react'
import PrevEv from './prevEv'
import UpcomEv from './upcomEv'

const PageEv = () => {
  return (
    <div className='flex justify-center bg-gray-800'>
      <div className='w-[90%]'>
        <div className='flex flex-col lg:flex-row'>
         <div> <PrevEv /></div> 
         <div> <UpcomEv /></div>
        </div>
      </div>
    </div>
  )
}

export default PageEv