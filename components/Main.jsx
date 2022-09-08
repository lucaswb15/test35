import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

const Main = () => {
  const {ref, inView} = useInView({
    threshold: 0.5
  });
  const animation = useAnimation();

  useEffect(() => {
    if(inView){
      animation.start({
        scale:1,
      });
    }
    if(!inView){
      animation.start({scale:0.95})
    }
    console.log("use effect hook, inView=", inView);
  }, [inView]);




  return (
    <div className='relative flex h-screen bg-[#e7e5e4] overflow-hidden'>
      <div className='flex flex-col justify-center items-left ml-4 md:ml-36 z-20 p-5 '>
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1.5, easeIn:.1}}
        className=''>
          <div className='text-8xl text-white font-bold text-left'>Milk</div>
              </motion.div>
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:2, easeIn:.1}}
        className=''>
          <div className='text-8xl text-white font-bold text-left'>Equity</div>
          </motion.div>
        </div>

        <motion.div ref = {ref}
          animate={animation}
          className='absolute z-10 h-full w-full object-cover'>
          <video muted autoPlay loop src={(require('/public/milk1.mp4'))} type='video/mp4'/>
        </motion.div>
    </div>
  );
};


export default Main