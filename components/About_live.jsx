
import { useRef } from "react";
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



const About_live = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1
  });

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
    <div className='h-screen flex justify-center pt-12 sm:pt-32 bg-color_bg'>
      <div className="grid gap-x-40 gap-y-40 grid-cols-1 grid-rows-2 sm:grid-cols-2">
          <div ref={ref} className='flex relative justify-center border border-white'>
          <motion.svg width="410" height="410"  fill="none" xmlns="http://www.w3.org/2000/svg"
            variants={svgVariants}
            initial="hidden"
            animate={controls}>
            <motion.circle cx="202" cy="202" r="200" stroke-width="5" stroke="#e0e0d9"
              variants={pathVariants}/>
            </motion.svg>
            {/*text in ring*/}
            <h1 className='absolute inset-y-0 my-36 text-8xl text-gray-400'>$800+</h1>
            {/*text under ring*/}
            <h1 className='absolute inset-x-0 bottom-0 mb-10 flex justify-center text-3xl text-gray-500'>Invested since 2021</h1>
          </div>
            {/*Second column*/}
          <div className="border border-white pt-20 ">
            <h1 className="text-gray-400 text-8xl tracking-wide">We are</h1>
            <h1 className="text-gray-400 text-8xl tracking-wide">informed</h1>
            <h1 className="text-gray-400 text-8xl tracking-wide">investors</h1>
          </div>
          <div className="border border-white">

          </div>


      </div> 
    </div>
  )
}

export default About_live