import React from 'react'
import mountain from "../../imgs/mountain.png"
const Hero = () => {
  return (
    <div className='bg-black/20 h-full relative z-40'>
      <div className='h-full flex justify-center items-center p-4'>
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className='text-white pl-20'>
              <h1 className='text-5xl font-bold'>Orbit The Earth</h1>
              <p className='py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita exercitationem quidem id iure quam, repellat, harum aliquid ullam debitis iusto animi incidunt fugiat voluptatem error quis delectus autem? Rem, earum!</p>
              <button className='primary-button'>learn more</button>
          </div>
        </div>
      </div>
        {/* {moon Surface section} */}
          <img src={mountain} alt="" className='absolute right-0 bottom-0 brightness-50 w-full z-10'/>
          {/* {gradient section} */}
          <div className='absolute w-full z-30 bottom-0 bg-gradient-to-b from-transparent from-10% to-black to to-90% h-[20px] sm:h-[50px] md:h-[60px]'></div>
      </div>
  );
}

export default Hero