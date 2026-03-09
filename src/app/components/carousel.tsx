'use client'
import React from 'react'
import Image from '../../../node_modules/next/image'

type HomeCarouselProps = {
  onReadMoreClick: () => void;
};


const banners = [
  '/images/banner2c.png',
  '/images/banner3c.png',
  '/images/banner4c.png',
  '/images/banner5c.png',
]
const HomeCarousel = ({ onReadMoreClick }: HomeCarouselProps) => {

  return (
    <div className='homeCarousel w-full h-[620px] text-white flex items-center justify-center relative'>
      <div className='w-full h-full  flex items-center justify-center'>
        <div className='w-2/3 h-[90%] flex items-center justify-center'>
          <Image src={"/images/client-background.png"} alt="logo" fill className='object-fill' />
        </div>
        <div className='absolute w-full h-[600px]  flex items-center justify-between'>
          <div className="w-[55%] h-full  absolute bottom-0 top-10">
            <div className=' w-3/4 h-[90%] xl:w-3/4 xl:h-[90%] lg:w-1/2 lg:h-[90%] md:w-1/2 md:h-[90%]'>
              <Image src={"/images/companyLogo3.png"} alt="logo" fill className='object-cover' />
            </div>
          </div>
          <div className=" w-[65%] h-full absolute  top-2 right-0">
            <div className='w-[55%] h-full '>
              <Image src={"/images/homeperson.png"} alt="logo" fill className='object-cover' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
export default HomeCarousel