import React from 'react'
import earthVideo from './imgs/earthVideo.mp4'
import Navbar from "./Components/Navbar/Navbar.jsx"
import Hero from "./Components/Hero/Hero.jsx"
import Servicess from "./Components/Servicess/Servicess.jsx"
import Banner from "./Components/Banner/Banner.jsx"
import Banner2 from "./Components/Banner/Banner2.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import AOS from "aos"
import "aos/dist/aos.css"
const App = () => {
  React.useEffect(()=>{
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });

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
      <Banner/>
      <Banner2/>
      <Footer/>
    </div>
  )
}

export default App