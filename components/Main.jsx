import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

const Main = () => {
  const {ref, inView} = useInView({
    threshold: 0.5
  });
  const animation_bg_vid = useAnimation();

  useEffect(() => {
    if(inView){
      animation_bg_vid.start({
        scale:1,
      });
    }
    if(!inView){
      animation_bg_vid.start({scale:0.95})
    }
    
  }, [inView]);




  return (
    <div className='relative flex h-screen bg-color_bg overflow-hidden'>
      <div className='flex flex-col justify-center items-left ml-4 md:ml-36 z-20 p-5 '>
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1.5, easeIn:[0.5, .75, 1]}}
        className=''>
          <h1 className='text-6xl md:text-8xl text-white font-bold'>Milk</h1>
              </motion.div>
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:2, easeIn:.1}}
        className=''>
          <h1 className='text-6xl md:text-8xl text-white font-bold'>Equity</h1>
          </motion.div>
        </div>

        <motion.div ref = {ref}
          animate={animation_bg_vid}
          className='absolute z-10 h-full w-full object-cover'>
          <video muted autoPlay loop src={(require('/public/milk1.mp4'))} type='video/mp4'/>
        </motion.div>
    </div>
  );
};


export default Main