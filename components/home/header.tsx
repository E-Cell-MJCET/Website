/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Image from 'next/image'
import elnwt from '../../public/assets/ewnlt.png'
import Link from 'next/link'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=''>
      <div className=''>
      <img src="../../assets/banner3.png" alt="" className='w-full lg:h-screen absolute -z-10 '/>
      </div>
    <div className='flex  flex-row justify-between lg:justify-around pt-5 mb-2 lg:mb-24 header mx-4 '>
        <div>
            <Image src={elnwt} alt=""  className='h-[48px] lg:h-[70px] w-[48px] lg:w-full lg:mt-1' height={200} width={500}/>
        </div>
        <div className='hidden md:block '>
          <ul className='flex items-center justify-center px-3 mt-6 '>
            <li className='mx-3 text-xl font-semibold  hover:font-bold hover:underline underline-offset-8'><Link href={''}>Events</Link></li>
            <li className='mx-3 text-xl font-semibold  hover:font-bold hover:underline underline-offset-8'><Link href={''}>Team</Link></li>
            <li className='mx-3 text-xl font-semibold  hover:font-bold hover:underline underline-offset-8'><Link href={''}>Gallery</Link></li>
            {/* <li className='mx-3 text-xl font-semibold  hover:font-bold hover:underline underline-offset-8'><Link href={''}>Blogs</Link></li> */}
            <li className='mx-3 text-xl font-semibold  hover:font-bold hover:underline underline-offset-8'><Link href={''}>Memberships</Link></li>
          </ul>
        </div>
        <div className="md:hidden text-right mr-5 transition duration-300 ease-in-out relative">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-white focus:outline-none "
          >

            {isOpen ? (
              <div className='rotate-90 flex flex-col items-center transition-all ease-in duration-300'>
                <div className='w-[22px] h-[4px] bg-white my-[2.5px] rounded-lg transition-all ease-in duration-150'></div>
                <div className='w-[34px] h-[4px] bg-white my-[2.5px] rounded-lg transition-all ease-in duration-150'></div>
                <div className='w-[22px] h-[4px] bg-white my-[2.5px]  rounded-lg transition-all ease-in duration-150 '></div>
              </div> 
            ) : (
              <div className='flex flex-col items-center transition-all '>
                <div className='w-[22px] h-[4px] my-[2.5px] bg-white rounded-lg transition-all ease-out duration-150'></div>
                <div className='w-[34px] h-[4px] my-[2.5px] bg-white rounded-lg transition-all ease-out duration-150'></div>
                <div className='w-[22px] h-[4px] my-[2.5px] bg-white rounded-lg transition-all ease-out duration-150'></div>
              </div>
            )}
          </button>
          {isOpen && (
            <div className="md:w-1/2 text-right mt-5 relative bg-black ">
              <div>
                <ul>
                  <li className="mx-3 text-xl font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] hover:font-bold hover:underline">
                    <Link href={""}>Events</Link>
                  </li>
                  <li className="mx-3 text-xl font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] hover:font-bold hover:underline">
                    <Link href={"/team"}>Team</Link>
                  </li>
                  <li className="mx-3 text-xl font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] hover:font-bold hover:underline">
                    <Link href={""}>Gallery</Link>
                  </li>
                  <li className="mx-3 text-xl font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] hover:font-bold hover:underline">
                    <Link href={""}>Memberships</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
    </div>
    </div>
  )
}

export default Header
