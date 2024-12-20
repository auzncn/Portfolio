import React from 'react'

import facebook from '../assets/Facebook.png'
import instagram from '../assets/Instagram.png'
import linkedin from '../assets/Linkedin.png'
import Lottie from 'lottie-react'

import ContactMail from '../assets/Contact.json'

const Contact = () => {
  return (
    <section className='bg-gray-800 relative py-10 px-5 md:px-0' id='contact'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='md:w-1/2 mb-8 ml-2 md:mb-0'>
            <h2 className='text-red-500 font-bold text-3xl mb-3'>
              Get in Touch
            </h2>
            <p className='text-white/85 mb-4'>
              I'm always open to new opportunities and collaboration. Feel free to reach out!
            </p>
            <div className='flex space-x-4'>
              <a href="#">
                <img src={facebook} alt="" className='h-6 w-6' />
              </a>
              <a href="#">
                <img src={instagram} alt="" className='h-6 w-6' />
              </a>
              <a href="#">
                <img src={linkedin} alt="" className='h-6 w-6' />
              </a>
            </div>
            <Lottie animationData={ContactMail} className='w-[350px] lg:w-[500px] mx-auto'></Lottie>
          </div>
          <form className='w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10'>
            <h2 className='text-4xl font-bold text-gray-800 mb-10'>Contact Me</h2>
            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700'>Name</label>
              <input id='name' type="text" placeholder='Full Name' className='block w-full rounded-md p-2 mt-1 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200' />
            </div>


            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700'>Email</label>
              <input id='Email' type="text" placeholder='Email' className='block w-full rounded-md p-2 mt-1 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200' />
            </div>


            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700'>Message</label>
              <textarea id='Message' type="text" placeholder='Enter Your Message' className='block w-full rounded-md p-2 mt-1 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 ' />
            </div>

            <button className='bg-red-500 text-white px-3 py-2 rounded-md'>Send Message</button>

          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact