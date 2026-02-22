import Image from 'next/image'
import React from 'react'
import {clients} from "../export"

const ClientSection = () => {
  return (
    <div className="w-full h-max bg-white flex flex-col overflow-hidden justify-center items-center space-y-12 py-16" id='client-section'>
    <h1 className="text-[20px] xl:text-[38px] lg:text-[36px] md:text-[35px] sm:text-[30px] font-bold text-center">
      OUR CLIENTS
    </h1>
  
    <div className="animate-loop relative w-full overflow-hidden ">
      <div className="grid grid-rows-2 grid-flow-col gap-x-12 gap-y-10 px-4">
        {[...clients, ...clients].map((ele, index) => (
          <div
            className="w-[80px] h-[60px] xl:w-[130px] xl:h-[100px] lg:w-[100px] lg:h-[80px] md:w-[90px] md:h-[80px] sm:w-[80px] sm:h-[60px]   rounded-lg shadow-lg flex items-center justify-center bg-white"
            key={index}
          >
            <div className='w-3/4 h-3/4 relative '>
            <Image src={ele} alt="client logo" fill className="object-contain" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default ClientSection