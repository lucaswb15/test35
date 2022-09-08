import React from 'react'
import { motion } from 'framer-motion';

const Main = () => {
  return (
    <div className='relative flex h-screen overflow-hidden'>
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1, x:[-500,0]}}
      transition={{delay:1.5, easeIn:.1}}
      className='flex flex-col z-20 p-5  md:pl-48 justify-center'>
        <div className='text-8xl text-white font-bold'>Milk</div>
        <div className='text-8xl text-white font-bold'>Equity</div>

        </motion.div>
        <motion.div 
          animate={{scale:0.9}}
          initial={{scale:1}}
          transition={{delay:4}}
          className='absolute z-10 h-full w-full object-cover'>
          <video muted autoPlay loop src={(require('/public/milk1.mp4'))} type='video/mp4'/>
        </motion.div>
    </div>
  );
};


export default Main