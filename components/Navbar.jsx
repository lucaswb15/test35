import React, {useState} from 'react'
import Link from 'next/link'
import {TbMilk} from "react-icons/tb"


const Navbar = () => {
    const [nav, setNav] = useState(false)
    
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='fixed z-40 top-0 left-0 w-full ease-in duration-300'>
        <div className='m-auto px-20 pt-8 flex justify-between items-center p-4 text-black'>
            <Link href='/'>
            <h1></h1>
            </Link>
            <div onClick={handleNav} className='z-10'>
                {nav ? <TbMilk style={{fill:'white', transform: 'rotate(270deg)'}} size={50}/> : <TbMilk style={{fill:'white', }} size={50}/>}
            </div>
            <div className= {
                nav 
                ? 'absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-left ease-in duration-300 text-bold bg-white text-black'
                : 'absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen text-left ease-in duration-300 text-bold bg-white text-black'
                } 
                >
                <div>
                    <div className='p-4 text-8xl text-bold'>
                        Milk Equity
                    </div>
                    <ul>
                        <li onClick={handleNav} className='p-4 text-4xl text-bold hover:text-gray-500'>
                            <Link href='/'>Home</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/#About'>About</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/#Investments'>Investments</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/Diligence'>Diligence</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Navbar