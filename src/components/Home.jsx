import React from 'react'
import homp from "../../public/homp.webp"


import { FaLinkedin } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";



import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped,Typed } from "react-typed";

function Home() {
return (
    <>
    <div name="Home"
    className='max-w-screen-2xl container mx-auto px-7 md:px-20px my-20'>

<div className='flex flex-col md:flex-row'>

<div className='md:w-1/2 mt-12 md:mt-24 order-2 space-y-1 md:order-1'>
    <span className='text-xl'>Welcome In My Feed</span>
    <div className='flex space-x-1 text-2xl md:text-3xl'>
    <p className='text-green-500'>Hello, I'm a </p>
    <ReactTyped
        className='text-red-700 font-bold'
        strings={["Developer","Programmer","Coder" ]}
        typeSpeed={40}
        backSpeed={50}
        loop={true}
        />
    {/* <span className='text-red-700 font-bold'> Developer</span> */}

    </div>
    <br />
    <p className='text-sm md:text-md text-justify'>A web developer is a programmer who develops World Wide Web applications using a client–server model. The applications typically use HTML, CSS, and JavaScript in the client, and any general-purpose programming language in the server. HTTP is used for communications between client and server. A web developer may specialize in client-side applications (Front-end web development), server-side applications (back-end development), or both (full-stack development).</p>
    <br />
    {/* social media content  */}
<div className='flex flex-col items-center  text-center md:flex-row justify-between space-y-6 md:space-y-0'>
<div className='space-y-2'>
    <h1 className='font-bold text-blue-700'>Available on</h1>
<ul className='flex space-x-5'>

    <li><a href="https://www.linkedin.com/in/arunkumar791/" target='blank'>
        <FaLinkedin className='text-2xl 
        cursor-pointer hover:scale-150 duration-200'/> </a> </li>
    <li><a href="https://www.github.com/Arunkumarkanpur" target='blank'>
        <FaGithubSquare className='text-2xl cursor-pointer hover:scale-150 duration-200'/></a> </li>
    <li><a href="https://www.x.com/arunkumar796" target='blank'>
        <FaSquareXTwitter className='text-2xl cursor-pointer hover:scale-150 duration-200'/></a></li>
    <li><a href="https://t.me/" target='blank'>
        <SiTelegram className='text-2xl cursor-pointer hover:scale-150 duration-200'/></a></li>
    <li>
        <a href="https://www.instagram.com/arun_kumar1572" target='blank'>
        <FaSquareInstagram  className='text-2xl cursor-pointer hover:scale-150 duration-200'/></a>
    </li>



</ul>
</div>

<div className='space-y-2'>
<h1 className='font-bold text-blue-700'>Currently working on</h1>
<div className='flex space-x-5'>

<SiMongodb className='text-xl md:text-3xl hover:scale-150 duration-200 rounded-full border-[2xl]'/>
<SiExpress className='text-xl md:text-3xl hover:scale-150 duration-200 rounded-full border-[2xl]'/>
<FaReact className='text-xl md:text-3xl hover:scale-150 duration-200 rounded-full border-[2xl]'/>
<FaNodeJs className='text-xl md:text-3xl hover:scale-150 duration-200 rounded-full border-[2xl]'/>

</div>
</div>
</div>
</div>
    <div className='md:w-1/2  md:ml-48 md:mt-20 order-1'>
    <img src={homp} className='  rounded-full h-80 md:w-[450px] md:h-[450px]' alt="" /></div>
</div>
    </div>
    <hr />
    <hr /><hr /><hr />
    
    </>
)
}

export default Home
