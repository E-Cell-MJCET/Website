import Image from 'next/image'
import React from 'react'
import img1 from "../../public/assets/blog3.png";

const PrevEv = () => {
  return (
    <div className='w-[80%]'>
    <div className='flex justify-center bg-black h-full py-5 px-4 rounded-xl border-[1px] border-pink-600 group hover:border-purple-700 transition-all duration-300 '>
            <div className='w-full flex justify-center items-center group-hover:scale-95 duration-300'>
              <div className=''>
              <Image
                    src={img1}
                    alt=""
                    className="h-[150px] w-[220px] object-cover rounded-lg"
                   
                  ></Image>
              </div>
              <div className='flex flex-col text-left w-[70%] px-5 justify-between'>
                <div className='text-[24px] header mb-5 '>Lorem, ipsum dolor sit amet consectetur .</div>
                <div className='break-all text-sm tracking-tight'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum at, nobis dignissimos earum dolorum tenetur accusamus illo dolor animi. 
                  Consequuntur enim aspernatur quas corporis cumque voluptatibus, possimus nobis, harum delectus consectetur magni. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo illo repudiandae quaerat. Eum impedit amet porro id similique non enim obcaecati?</div>
              </div>
            </div>
            </div>
    </div>
  )
}

export default PrevEv