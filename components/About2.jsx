
import React from 'react'
import { motion } from 'framer-motion';
import { InView, useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';





const About2 = () => {
    const {ref, inView} = useInView();
    const animation = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                pathLength: 1,
                opacity: 1,
                transition: {
                    duration: 3
                }
            });
        if(!inView){
            animation.start({
                pathLength:0,
                opacity: 0
            })
        }
        }
    }, [inView]);

  return (
    <div className='w-full h-screen bg-color_bg'>
      <div className='text-center'>
        <div className='columns-2 pt-52'>
        <div className='text-4xl sm:text-6xl text-white'>6 Entrances</div>

          <div className='text-4xl sm:text-6xl text-white'>Data driven investments</div>
        </div>
        <div className='columns-2 pt-24'>
          <div className='text-4xl sm:text-6xl text-white'>$800+ AUM</div>
          <div ref={ref} className='flex relative justify-center inset-0'>
            <svg width="351" height="348" preserveAspectRatio='xMidYMax meet' fill="none" xmlns="http://www.w3.org/2000/svg" 
            >
              <motion.path animate={animation} d="M195.5 0.5C220.667 2.83333 280.1 20.1 316.5 70.5C352.9 120.9 352.667 174.833 348 195.5C346.333 223.333 327.3 287.8 264.5 323C201.7 358.2 142.333 347.667 120.5 338C95.8334 332.5 39.7 304.1 12.5 234.5C-14.7 164.9 13.8334 99.5 31.5 75.5C48.6667 51 98.6 1.7 161 0.5" stroke="white" 
              />
                          </svg>
            <h1 className='absolute inset-y-0 my-32 text-4xl text-white'>test1</h1>

          </div>

        </div>
      </div>
    </div>
  )
}

export default About2