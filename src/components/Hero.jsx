import React from 'react'
import hero from '../assets/Hero.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/Twitter.png'
import linkedin from '../assets/Linkedin.png'
import instagram from '../assets/Instagram.png'
import reactLogo from '../assets/React.png'
import reduxLogo from '../assets/Redux.png'
import tailwind from '../assets/Tailwind Css.png'



const Hero = () => {
  return (
    <section className='relative'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between'>
          <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
            <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug'>Hi There,<br />I'm Rohit <span className='text-red-500'>Singh</span> </h1>
            <p className='md:text-2xl text-xl mb-4'>Web Developer & Designer</p>
            <p className='mb-4'>I'm a passionate web developer with expertise in React, Next.js, and modern web technologies. I love creating beautiful and fuctional website that solve real world problems.</p>
            <button className='bg-black text-white rounded-md  px-3 py-2 w-max'>Download CV</button>
          </div>
          <div className='md:w-1/2 relative flex justify-center items-end'>
            <img src={hero} alt="" className='lg:h-[90vh] h-96 object-contain' />
            <img src={reactLogo} alt="" className='absolute w-10 top-36 left-0 rounded-full md:hidden' />
            <img src={reduxLogo} alt="" className='absolute w-10 top-0 right-5 md:hidden' />
            <img src={tailwind} alt="" className='absolute w-10 right-0 bottom-36 rounded-full md:hidden' />
          </div>
        </div>
      </div>
      <div className='absolute top-40 right-10 hidden md:flex flex-col gap-6 bg-gray-200 p-4 rounded-full'>
        <img src={facebook} alt="" className='w-20' />
        <img src={twitter} alt="" className='w-20' />
        <img src={linkedin} alt="" className='w-20' />
        <img src={instagram} alt="" className='w-20' />
      </div>
    </section>
  )
}

export default Hero