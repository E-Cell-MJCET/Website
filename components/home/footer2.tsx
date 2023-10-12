import React from 'react'

const Footers = () => {
  return (
    <div className='flex justify-center mb-4 header'>
        <div className='w-[90%]'>
            <hr  className='h-[1px]  mx-auto bg-gradient-to-r from-[#c23c83]  to-[#6b28d5] border-0 mb-3'/>
        <div className="flex items-center lg:justify-between flex-col lg:flex-row">
        <div className="text-sm text-gray-400">
        &#169; E-Cell MJCET 2023-24 | all rights reserved
        </div>
        <div className="text-sm text-gray-400 mt-1 lg:mt-0">
          Developed by <span className=' hover:text-white  hover:underline hover:underline-offset-4 cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-[#c23c83]  to-[#6b28d5]'>Abdul Basith</span> and team
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footers