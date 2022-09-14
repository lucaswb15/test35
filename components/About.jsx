import React from 'react'

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
          <div className='flex justify-center'>
            <svg className='' xmlns="http://www.w3.org/2000/svg">
              <g>
                <circle cx="50" cy="50" r="50"></circle>
                <text x="0" y="50" font-family="Verdana" font-size="35" fill="blue">Hello</text>
              </g>
            </svg>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About