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
       
         <div className='flex justify-center flex-col items-center'> 
         <div className="flex justify-center items-center mb-10">
        <div className="flex flex-col items-center justify-center">
          <div className="h-[3px] w-[260px] bg-[#c23c83] rounded-lg my-[2px]"></div>
          <div className="h-[3px] w-[320px] bg-[#c23c83] rounded-lg mt-[2px]"></div>
        </div>

        <div className="text-center poiret text-[30px] font-bold opacity-100 z-30 bg-black px-3 absolute">
          Previous Events
        </div>
      </div>
         <PrevEv /></div> 
         {/* <div> <UpcomEv /></div> */}
        
      </div>
    </div>
  )
}

export default PageEv