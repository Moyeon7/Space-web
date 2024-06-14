import React from 'react';
import {FaReact} from "react-icons/fa";
import { FaShuttleSpace, FaSpaceAwesome } from 'react-icons/fa6';
const ServiceData = [
    {
        title:  "HST",
        content: "300-1500km",
        description: "Used for astronomical observations capturing stunning images of the universe.",
        aosDelay: "300",
        icon: <FaReact className="text-7xl"/>,
    },
    {
        title:  "ISS",
        content: "300-1500km",
        description: "It's a habitable artificial satellite orbiting Earth and serves as a space environment research laboratory.",
        aosDelay: "300",
        icon: <FaShuttleSpace className="text-7xl"/>,
    },
    {
        title:  "GPS",
        content: "300-1500km",
        description: "Part of the Global Position System (GPS) used for navigation.",
        aosDelay: "300",
        icon: <FaSpaceAwesome className="text-7xl"/>,
    }
];

const Servicess = () => {
  return (
    <div className='bg-black text-white'>
      <div className="container mx-auto px-4">
        <div className='min-h-[400px]'>
            <div className='grid grid-cols-1 sm:grid-cols-3 relative z-10 gap-7'>
                {ServiceData.map((data,index)=>
                (
                    <div className='mx-auto min-h-[180px] py-8 px-3 flex flex-col justify-center items-center rounded-xl bg-sky-900/60 text-center backdrop-blur-sm text-2xl w-full lg:w-[300px]'>
                        {data.icon}
                        <h1>{data.title}</h1>
                        <p>{data.content}</p>
                        <p className='text-sm text-center'>{data.description}</p>
                        {/* <p>{data.aosDelay}</p> */}
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Servicess
