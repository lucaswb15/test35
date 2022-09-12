import React from 'react'
import Kiwi from '/public/kiwi.svg'

const About = () => {
  return (
    <div className='w-full h-screen bg-color_bg'>
      <div className='text-center'>
        <div className='columns-2 pt-52'>
        <div className='text-4xl sm:text-6xl text-white'>6 Entrances</div>

          <div className='text-4xl sm:text-6xl text-white'>Data driven investments</div>
        </div>
        <div className='columns-2 pt-24'>
          <div className='text-4xl sm:text-6xl text-white'>$800+ AUM</div>
          <div className='text-4xl sm:text-6xl text-white'>$800+ AUM</div>

        </div>
      </div>
      <div className='flex justify-center'>
        <Kiwi><p className='text-white text-6xl'>test</p></Kiwi>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="50"/>
</svg>
      </div>
    </div>
  )
}

export default About