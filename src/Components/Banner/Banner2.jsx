import React from 'react'
import sate from "../../imgs/sate.jpeg"
const Banner2 = () => {
  return (
    <div className="bg-black text-white pb-12 z-50 relative overflow-hidden">
      <div className="container ml-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className='w-[600px] space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 '>
                <p data-aos="fade-up" className='text-sky-800 uppercase'>Our Mission</p>
                <h1 data-aos="fade-up" data-aos-delay="300" className='uppercase text-5xl'>Rapicast</h1>
                <p data-aos="fade-up" data-aos-delay="500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur id dolorum eius velit quos ipsum excepturi earum nam sit. Adipisci, maiores. Dignissimos perferendis quisquam accusamus inventore velit facilis quos repudiandae.</p>
                <button data-aos="fade-up" data-aos-delay="700" className='primary-button'>Learn More</button>
            </div>
            <div data-aos="zoom-in">
                <img src={sate} alt="" className='w-[600px] h-[380px] object-cover'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner2
