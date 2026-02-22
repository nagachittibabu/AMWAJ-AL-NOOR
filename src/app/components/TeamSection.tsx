"use client";

import React ,{useEffect} from 'react'
import Person from '../cards/person'
import { Persons } from '../export'
import Aos from 'aos'
import 'aos/dist/aos.css';


const TeamSection = () => {
    useEffect(() => {
        Aos.init({
          offset: 200,
          duration: 500,
          easing: "ease-in-sine",
        });
      }, []);
    return (
        <div className='w-full h-[800px] xl:h-[700px] lg:h-[690px] md:h-[980px] sm:h-[980px] flex justify-center items-center'>
            <div className='w-[95%] h-[90%] flex flex-col space-y-12 justify-center'>
                <div className='w-full'>
                    <h1 className='text-center text-xl sm:text-2xl lg:text-4xl md:text-[3xl] font-bold font14'>Our Professional Team</h1>
                </div>
                <div className='flex justify-center xl:justify-evenly lg:justify-evenly md:justify-center sm:justify-center xl:space-x-4 lg:space-x-4 md:sapce-x-3 sm:space-x-5  gap-y-4  flex-wrap ' data-aos="zoom-in" aos-delay="200">
                    {Persons.map((item,i) => (
                        <div className='w-[90%] xl:w-1/4 h-[150px] xl:h-[350px] lg:h-[340px] md:h-[330 px] sm:h-[320px] lg:w-[32%] md:w-[40%] sm:w-[42%]  ' key={item.name} data-aos="zoom-out" data-aos-delay={i * 300}>
                            <Person imageurl={item.imageurl} name={item.name} specialization={item.specialization} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TeamSection;