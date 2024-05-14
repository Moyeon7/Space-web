import React from 'react'

const Hero = () => {
  return (
    <div className='bg-black/20 h-full text-white relative z-50'>
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className='pl-20'>
                <h1 className='text-5xl font-bold'>Orbit The Earth</h1>
                <p className='py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita exercitationem quidem id iure quam, repellat, harum aliquid ullam debitis iusto animi incidunt fugiat voluptatem error quis delectus autem? Rem, earum!</p>
                <button className='bg-blue-300 rounded-md py-1 px-2 border-2 uppercase'>learn more</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
