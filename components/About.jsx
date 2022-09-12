import React from 'react'
import Kiwi from '/public/kiwi.svg'

const About = () => {
  return (
    <div className='w-full h-screen bg-color_bg'>
      <div className='text-center'>
        <div className='columns-2 pt-52'>
          <div className='w-[200px] h-[200px] bg-black rounded-full flex text-4xl sm:text-6xl text-white '>
            <p>6 Entrances</p>
          </div>
          <div className='text-4xl sm:text-6xl text-white'>Data driven investments</div>
        </div>
        <div className='columns-2 pt-24'>
          <div className='text-4xl sm:text-6xl text-white'>$800+ AUM</div>
          <div className='text-4xl sm:text-6xl text-white'>$800+ AUM</div>

        </div>
      </div>
      <div>
        <Kiwi></Kiwi>
      </div>
    </div>
  )
}

export default About