import React from 'react'
import Logo from "../../imgs/logo2.png"
const Navbar = () => {
  return (
    <div className='fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-4'>
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 text-white font-bold text-2xl pl-3">
              <img src={Logo} alt="" className='w-10'/>
              <span>MOY-SPACE</span>
          </div>
          <div className="text-white item-center sm:pl-11 sm:pr-7">
            <ul className="flex items-center gap-6 text-xl py-4">
              <li className="transition duration-300 ease-in-out transform hover:tracking-wider hover:underline hover:underline-offset-8">
                  <a href="#/" className=" hover:text-yellow-100">About</a>
              </li>
              <li className="transition duration-300 ease-in-out transform hover:tracking-wider hover:underline hover:underline-offset-8">
                  <a href="#/" className=" hover:text-yellow-100">Technology</a>
              </li>
              <li className="transition duration-300 ease-in-out transform hover:tracking-wider hover:underline hover:underline-offset-8">
                  <a href="#/" className=" hover:text-yellow-100">Galaxy</a>
              </li>
              <li className="transition duration-300 ease-in-out transform hover:tracking-wider hover:underline hover:underline-offset-8">
                  <a href="#/" className=" hover:text-yellow-100">Satelite</a>
              </li>
            </ul>
          </div>
          <div className='pr-10 sm:pr-3'>
            <button className="text-white border-2 px-3 py-1 rounded-md hover:bg-yellow-100 hover:text-black">Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}
//navbar done
export default Navbar
