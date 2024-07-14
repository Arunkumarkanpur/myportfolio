import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
return <>
<div className='mt-12 bg-gray-400'>
    <hr />
    <hr />
    <hr />
<footer className='py-12 '>
    <div className='max-w-screen-2xl container mx-auto px-7 md:px-20px md:px-20'>
        <div className='flex flex-col items-center justify-center'>
            <div className='flex space-x-7'>
                <FaLinkedin size={24}/>
                <SiTelegram size={24}/>
                <FaGithubSquare size={24}/>
                <FaSquareXTwitter size={24}/>
            </div>
            
            <div className='border-gray-700 pt-8 flex flex-col items-center justify-center'>
            <p className='text-sm'>&copy; 2024 your Company. All rights reserved.</p>
            <p className='text-sm'>Supportive partner ❤️ Arun kumar!!</p>
            </div>
        </div>
        <div className='mt-12'>
        <hr />
    <hr />
    <hr />
        </div>
    
    </div>
</footer>
</div>
</>
}

export default Footer

