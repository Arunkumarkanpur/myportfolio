import React, { useState } from 'react'
import pic from "../../public/arun.jpg"
import { TfiMenuAlt } from "react-icons/tfi";
import { IoCloseSharp } from "react-icons/io5";

import { Link } from 'react-scroll';

function Navbar() {
    const [menu,setMenu] = useState(false);
    const navItem = [
        {
            id: 1,
            text:"Home"
        },
        {
            id: 2,
            text:"About"
        },
        {
            id: 3,
            text:"Portfolio"
        },
        {
            id: 4,
            text:"Experience"
        },
        {
            id: 5,
            text:"Contact"
        },

    ]
return (

    <div className='max-w-screen-2xl container mx-auto px-7 md:px-20px h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-gray-800'>

    <div className='flex justify-between items-center h-16'>
        <div className='flex space-x-2'>
            <img src={pic} className='h-12 w-12 rounded-full' alt="" />
            <h1 className='font-semibold text-xl cursor-pointer text-white'>Arun<span className='text-green-500 text-2xl'>k</span>umar
            <p className='text-sm'>Web Developer</p>
            </h1>
        </div>

         {/* desktop  */}
            <div>
                <ul className='hidden md:flex space-x-8'>
                {
                    navItem.map(({id,text}) =>(
                        <li className='hover:scale-105 duration-200 text-white cursor-pointer' key={id}>
                            <Link to={text}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            activeClass='active'>
                            {text}
                            </Link>
                            
                            </li>
                    ))
                }
                </ul>
                <div className='md:hidden text-white' onClick={() =>setMenu(!menu)}>{menu?<IoCloseSharp size={24}/>:<TfiMenuAlt size={24}  />}</div>

            </div>
        </div>
        {/* mobile navbar  */}
        {
            menu && (
                <div className='bg-gray-300 h-80 rounded-md'>

                <ul className='md:hidden flex flex-col h-screen items-center space-y-3 text-xl'>
                {
                    navItem.map(({id,text}) =>(
                        <li className='hover:scale-105 duration-200 cursor-pointer font-semibold mt-12' key={id}>
                            <Link onClick={() =>setMenu(!menu)}
                            to={text}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            activeClass='active'>
                            {text}
                            </Link>
                            </li>
                    ))
                }
                </ul>
        </div>
            )
        }
        
    </div>
  )
}

export default Navbar
