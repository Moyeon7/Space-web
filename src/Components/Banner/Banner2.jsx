import React from 'react'
import sate from "../../imgs/sate.jpeg"
const Banner2 = () => {
  return (
    <div className="bg-black text-white pb-12 z-50 relative overflow-hidden">
      <div className="container ml-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className='space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 '>
                <p className='text-sky-800 uppercase'>Our Mission</p>
                <h1 className='uppercase text-5xl'>Rapicast</h1>
                <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur id dolorum eius velit quos ipsum excepturi earum nam sit. Adipisci, maiores. Dignissimos perferendis quisquam accusamus inventore velit facilis quos repudiandae.</p>
                <button className='primary-button'>Learn More</button>
            </div>
            <div>
                <img src={sate} alt="" className='w-[400px]'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner2
