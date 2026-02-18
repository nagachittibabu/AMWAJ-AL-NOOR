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
    <div className='w-full h-[620px] text-white flex items-center justify-center'>
      <div className='w-full h-full relative flex items-center justify-center'>
        <div className='w-2/3 h-[90%] flex items-center justify-center'>
          <Image src={"/images/client-background.png"} alt="logo" fill className='object-fill' />
        </div>
        <div className="absolute top-10 left-0 w-[55%] h-[650px]">
          <div className='w-full h-full '>
            <Image src={"/images/companyLogo3.png"} alt="logo" fill className='object-cover' />
          </div>
        </div>
        <div className="absolute top right-0 w-[55%] h-[600px]">
          <div className='w-full h-full '>
            <Image src={"/images/home-persons.png"} alt="logo" fill className='object-cover' />
          </div>
        </div>
      </div>
    </div>
  )

}
export default HomeCarousel