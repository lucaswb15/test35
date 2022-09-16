
import { useRef } from "react";
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



const About_live = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  const svgVariants = {
    hidden: { rotate: -180},
    visible: { 
      rotate: 0,
      transition: { duration : 1}
    }
  }
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } {/* Remove section below if you don't want it happend on every scroll */}
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);
  
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0 
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut" 
      }
    }
  }

  return (
    <div className='w-full h-screen bg-color_bg'>
      <div className='text-center'>
        <div className='columns-2 pt-52'>
        <div className='text-4xl sm:text-6xl text-black'>6 Entrances</div>

          <div className='text-4xl sm:text-6xl text-black'>Data driven investments</div>
        </div>
        <div className='columns-2 pt-24'>
          <div className='text-4xl sm:text-6xl text-black'>$800+ AUM</div>
          <div ref={ref} className='flex relative justify-center inset-0'>
              <motion.svg width="410" height="410"  fill="none" xmlns="http://www.w3.org/2000/svg"
              variants={svgVariants}
              initial="hidden"
              animate={controls}>
              <motion.circle cx="202.5" cy="202.5" r="202" stroke-width="5" stroke="black"
               variants={pathVariants}/>
              </motion.svg>

            <h1 className='absolute inset-y-0 my-32 text-8xl text-black'>$800+</h1>

          </div>

        </div>
      </div>
    </div>
  )
}

export default About_live