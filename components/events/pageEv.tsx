import React from 'react'
import PrevEv from './prevEv'
import UpcomEv from './upcomEv'

const PageEv = () => {
  return (
    <div className='flex justify-center  h-screen bg-[#000]'>
      <div className='w-[95%]'>
        <div className='text-center text-[45px] text-white header mt-10 mb-14'>
         <span className='blackOps uppercase'>Events</span>  
        </div>
       
         <div className='flex justify-center'> 
         <div>Previous Events</div>
         <PrevEv /></div> 
         {/* <div> <UpcomEv /></div> */}
        
      </div>
    </div>
  )
}

export default PageEv