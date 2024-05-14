import React from 'react'

const Hero = () => {
  return (
    <div className='bg-black/20 h-full text-white relative z-40'>
      <div className='h-full mt-4 flex justify-center items-center p-4'>
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className='pl-20'>
              <h1 className='text-5xl font-bold'>Orbit The Earth</h1>
              <p className='py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita exercitationem quidem id iure quam, repellat, harum aliquid ullam debitis iusto animi incidunt fugiat voluptatem error quis delectus autem? Rem, earum!</p>
              <button className='bg-slate-500 rounded-md py-1 px-2 border-2 uppercase hover:bg-slate-800 transition duration-300 ease-in-out transform hover:tracking-wider'>learn more</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero