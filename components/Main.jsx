import React from 'react'
import { motion } from 'framer-motion';

const Main = () => {
  return (
    <div className='relative flex h-screen overflow-hidden'>
      <motion.div animate={{x:[-300,0]}} className='flex z-20 p-5 items-center md:pl-32 justify-center'>
        <h1 className='text-7xl text-white font-bold'>Milk Equity</h1>
        </motion.div>
        <div className='absolute z-10 h-full w-full object-cover'>
          <video muted autoPlay loop src={(require('/public/milk1.mp4'))} type='video/mp4'/>
        </div>
    </div>
  );
};


export default Main