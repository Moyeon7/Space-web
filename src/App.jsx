import React from 'react'
import earthVideo from './imgs/earthVideo.mp4'
import Navbar from "./Components/Navbar/Navbar.jsx"
import Hero from "./Components/Hero/Hero.jsx"
const App = () => {
  return (
    <div>
      <div className='h-[700px] relative'>
        <video autoPlay muted loop className='fixed right-0 top-0 h-[800px] w-full object-cover z[-1]'>
          <source src={earthVideo} type='video/mp4'/>
        </video>
        <Navbar/>
        <Hero/>
      </div>
    </div>
  )
}

export default App