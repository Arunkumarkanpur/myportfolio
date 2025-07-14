import React from 'react'
import pct from "../../public/pct.jpeg";



function PortFolio() {

  const cardItem = [
    {
      id: 1,
      logo: pct,
      name:"Ai-Chatbot",
      about: "Developed a responsive chatbot using React.js and JavaScript with API integration for real-time interactions."

    },
    {
      id: 2,
      logo: pct,
      name:"Twitter-Clone",
      about: "Implemented core features like user authentication, tweeting, liking, and following. Used RESTful APIs and responsive user experience."

    },
    {
      id: 3,
      logo: pct,
      name:"Portfolio",
      about: "Developed a responsive portfolio website using React, HTML, CSS, and JavaScript to showcase projects and technical skills."

    },
    {
      id: 4,
      logo: pct,
      name:"Calculator",
      about:"Supports basic arithmetic operations with a clean UI and real-time input handling. Designed interactive button functionality and error handling."

    }


  ]


  return (
    <>
    <div name="Portfolio" className='max-w-screen-2xl text-white container mx-auto px-7 md:px-20px mt-10'>
        <div>
            <h1 className='text-3xl font-bold mb-5'>PortFolio</h1>
            <span className='underline font-semibold'>Featured Project</span>

<div className='grid grid-cols-1 md:grid-cols-4 gap-2'>
{
  cardItem.map(({id,logo,name,about}) =>(
<div className='w-80 h-100 md:w-[300px] md:h-[360px] border-[2px] rounded-md bg-gray-400 p-1 mt-7 cursor-pointer hover:scale-105 duration-300' key={id}>
  <img className='w-[230px] h-[150px] p-2 ml-10 md:ml-7 rounded-md' src={logo} alt="" />
  <div>
    <div className='font-bold text-black text-xl px-2 mb-2 text-center'>{name}</div>

    <div className=' text-black px-2 mb-2'>{about}</div>
    
  </div>
  <div className='flex p-2 md:p-0 px-6 space-x-0 justify-around'>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4py-2 p-1 rounded'>
      Demo
    </button>
    <button className='bg-green-500 hover:bg-green-600 text-white font-bold px-4py-2 rounded p-1'>
      <a href='https://github.com/arunkumarkanpur/'target='blank'>Source code</a>
    </button>

  
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

export default PortFolio
