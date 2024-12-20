import React from 'react'
import Github from '../assets/Github.png'

const Cards = ({ item }) => {
  return (
    <div className='bg-red-50 border border-red-300 rounded-lg w-[350px] lg:w-[400px]'>
      <img src={item.image} alt="" className='rounded-lg' />
      <div className='p-4'>
        <h1 className='font-semibold text-xl mb-2'>
          {item.title}
        </h1>
        <p>{item.desc}</p>
        <div className='flex gap-3 mt-4'>
          <button className='text-white bg-red-500 rounded-md px-3 py-2'>
            <a href={item.live} target='_blank'>Live Preview</a>
          </button>
          <button className='text-white bg-black rounded-md  px-3 py-2'>
            <a href={item.github} className='flex gap-1' target='_blank'>
              <img src={Github} className='w-6 inline-block' alt="" />
              Github Link
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cards