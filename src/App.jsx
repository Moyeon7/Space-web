import React from 'react'
import earthVideo from './imgs/earthVideo.mp4'
import Navbar from "./Components/Navbar/Navbar.jsx"
import Hero from "./Components/Hero/Hero.jsx"
import Servicess from "./Components/Servicess/Servicess.jsx"
const App = () => {
  return (
    <div>
      <div className='h-[700px] relative'>
        <video autoPlay muted loop className='fixed right-0 top-0 h-[700px] w-full object-cover z[-1]'>
          <source src={earthVideo} type='video/mp4'/>
        </video>
        <Navbar/>
        <Hero/>
      </div>
      {/* services section */}
      <Servicess/>
    </div>
  )
}

export default App