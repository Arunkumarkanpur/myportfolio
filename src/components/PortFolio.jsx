import React from 'react'
import react from "../../public/react.png";
import mongo from "../../public/mongo.png";
import express from "../../public/express.png";
import nodejs from "../../public/nodejs.png";
import java from "../../public/java.png"



function PortFolio() {

  const cardItem = [
    {
      id: 1,
      logo: mongo,
      name:"Mongodb"

    },
    {
      id: 2,
      logo: express,
      name:"Expressjs"

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


  ]


  return (
    <>
    <div name="Portfolio" className='max-w-screen-2xl text-white container mx-auto px-7 md:px-20px mt-10'>
        <div>
            <h1 className='text-3xl font-bold mb-5'>PortFolio</h1>
            <span className='underline font-semibold'>Featured Project</span>

<div className='grid grid-cols-1 md:grid-cols-4 gap-2'>
{
  cardItem.map(({id,logo,name}) =>(
<div className='w-80 h-80 md:w-[300px] md:h-[300px] border-[2px] rounded-md bg-gray-400 p-1 mt-7 cursor-pointer hover:scale-105 duration-300' key={id}>
  <img className='w-[120px] h-[120px] p-1 rounded-md' src={logo} alt="" />
  <div>
    <div className='font-bold text-black text-xl px-2 mb-2'>{name}</div>
    <p className='px-2 text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing</p>
  </div>
  <div className='px-6 py-4 space-x-3 justify-around'>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4py-2 p-1 rounded'>Video</button>
    <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4py-2 rounded p-1'>Source code</button>
  
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
