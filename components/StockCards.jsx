import Image from 'next/image'
import React from 'react'

const StockCards = ({backgroundImg}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full bg-white rounded-xl p-4 group'>
        <Image className='rounded-xl' src={backgroundImg} alt='/'/>
    </div>
  )
}

export default StockCards