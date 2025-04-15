import React from 'react'

import react from "../../public/react.png";
import html from "../../public/html.png";
import css from "../../public/css.png";
import clang from "../../public/clang.png";
import javascript from "../../public/javascript.jpg"
import nodejs from "../../public/nodejs.png";
import java from "../../public/java.png"



function Experience() {

const cardItem = [
    {
      id: 1,
      logo: html,
      name:"HTML"

    },
    {
      id: 2,
      logo: css,
      name:"CSS"

    },
    {
      id: 3,
      logo: nodejs,
      name:"Nodejs"

    },
    {
      id: 4,
      logo: react,
      name:"Reactjs"

    },
    {
      id: 5,
      logo: java,
      name:"Java"

    },
    {
        id: 6,
        logo: javascript,
        name:"JavaScript"
  
    },
    {
        id: 7,
        logo: clang,
        name:"C language"
  
    },



  ]


  return (
    <>
    <div name="Experience" className='max-w-screen-2xl text-white  container mx-auto px-7 md:px-20px mt-10'>
        <div>
            <h1 className='text-3xl font-bold mb-5'>Experience</h1>
            <p className='font-semibold'>I've more than 2 years of experience in below technologies.</p>

<div className='grid grid-cols-2 md:grid-cols-5 gap-7'>
{
  cardItem.map(({id,logo,name}) =>(
<div className='flex flex-col items-center justify-center border-[2px] bg-slate-400 rounded-md p-1 mt-7 cursor-pointer hover:scale-105 duration-300 gap-2' key={id}>
  <img className='w-[100px] p-1 rounded-md' src={logo} alt="" />
<div>
    <div className='font-bold text-xl px-2 mb-2'>{name}</div>

</div>

</div>
  ))
}
            </div>
        </div>
    </div>
    <br />
    <hr /><hr /><hr /><hr />
    </>
  )
}

export default Experience;
