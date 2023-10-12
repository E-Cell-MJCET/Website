import React from 'react'

const Gallery = () => {
  return (
    
      <div className="flex justify-center mt-20">
      <div className="w-[98%]"></div>
        <div className="flex justify-center items-center relative">
          <div className="flex flex-col items-center ">
            <div className="h-[3px] w-[180px] bg-[#c23c83] rounded-lg my-[2px]"></div>
            <div className="h-[3px] w-[240px] bg-[#c23c83] rounded-lg mt-[2px]"></div>
          </div>

          <div className="text-center poiret text-[30px] font-bold opacity-100 z-30 bg-black px-3 absolute">
            Gallery
          </div>
        </div>
        <div className='flex justify-center mt-10'></div>
        <div>
        <div className='h-[420px] w-[300px] mr-2'><img
                  src="../../assets/blog4.jpeg"
                  alt=""
                  className="h-full w-full"
                /></div>
        </div>
        </div>
        
)}

export default Gallery
