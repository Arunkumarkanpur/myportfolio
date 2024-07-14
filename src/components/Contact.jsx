import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';


function Contact() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

const onSubmit = async (data) => {
const userInfo = {
  name:data.name,
  email:data.email,
  message:data.message
}
try {
await axios.post("https://getform.io/f/ayvpkkgb", userInfo);
toast.success("your message has been sent")
} catch (error) {
  console.log(error);
  toast.error("Something went wrong")
}

  };

  return (
    <div name="Contact" className='max-w-screen-2xl container mx-auto px-7 md:px-20px md:px-20 my-16'>

    <h1 className='text-3xl font-bold mb-4'>Contact me</h1>
    <span>please fill out the form bellow to contact me</span>
    <div className='flex flex-col items-center justify-center mt-5'>
        <form onSubmit={handleSubmit(onSubmit)} className='bg-slate-200 w-96 px-8 py-6 rounded-2xl'
       //action="https://getform.io/f/ayvpkkgb"
       // method='POST'
        >
            <h1 className='text-xl font-semibold mb-4'>send Your Message</h1>
            <div className='flex flex-col mb-4'>
                <label className="block text-gray-700">Full Name</label>
                <input {...register("name", { required: true })} className='shadow appearence-none rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='name'
                        name="name"
                        type="text"
                        placeholder='Enter your fullname'
                        />
                        {errors.name && <span className='text-red-500'>This field is required</span>}
            </div>

            <div className='flex flex-col mb-4'>
                <label className="block text-gray-700">Email Address</label>
                <input {...register("email", { required: true })} className='shadow appearence-none rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='name'
                        name="email"
                        type="text"
                        placeholder='Enter your Email'
                        />
                        {errors.email && <span className='text-red-500'>This field is required</span>}
            </div>

            <div className='flex flex-col mb-4'>
                <label className="block text-gray-700">Message</label>
                <textarea {...register("message", { required: true })} className='shadow appearence-none rounded py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='message'
                        name="message"
                        type="text"
                        placeholder='Write your message '
                        />
                        {errors.message && <span className='text-red-500'>This field is required</span>}
            </div>
            <button type='submit' className='bg-gray-700 text-white rounded-xl ml-32 px-3 py-2 hover:bg-gray-900 duration-300'>Submit</button>
        </form>
    </div>
    </div>
  )
}

export default Contact
