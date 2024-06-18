import React from 'react'
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'
import { MdCall, MdMessage } from 'react-icons/md'
const Footer = () => {
  return (
    <div className='bg-gray-800 text-white relative px-5 z-50'>
      <section className='max-w-[1200px] mx-auto text-white'>
        <div className="grid md:grid-cols-3 py-5">
            {/*First Col */}
            <div className='py-8 px-4'>
                <h1 className='text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3'>Be Ready To Grow</h1>
                <p>Get exclusive <b>best update</b> straight to your photos</p>
                <br />
                <div className='flex items-center h-10'>
                    <input type="text" className='py-1 px-3 w-full h-[100%] inline-block focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 bg-gray-800 border-gray-200 border-2 mr-1' placeholder='Email'/>
                    <button className='text-white border-2 px-3 py-1 rounded-md hover:bg-yellow-100 hover:text-black'>OK</button>
                </div>
            </div>
            
            {/*Second Col */}
            <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
              <div>
                <div className='py-8 px-4'>
                    <h1 className='text-xl font-bold mb-3'>Quick Links</h1>
                    <ul className='flex flex-col gap-3'>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/">About</a>
                      </li>
                      <li>
                        <a href="/">Service</a>
                      </li>
                      <li>
                        <a href="/">Login</a>
                      </li>
                    </ul>
                </div>
              </div>
              <div>
                <div className='py-8 px-4'>
                    <h1 className='text-xl font-bold mb-3'>Quick Links</h1>
                    <ul className='flex flex-col gap-3'>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/">About</a>
                      </li>
                      <li>
                        <a href="/">Service</a>
                      </li>
                      <li>
                        <a href="/">Login</a>
                      </li>
                    </ul>
                </div>
              </div>
              <div>
                <div className='py-8 px-4'>
                    <h1 className='text-xl font-bold'>Contact Us</h1>
                </div>
                <div className='space-y-3'>
                  <div className='flex items-centre gap-3'>
                    <HiLocationMarker/>
                    <p>Mapusa, Goa</p>
                  </div>
                  <div className='flex items-centre gap-3 mt-3'>
                    <MdMessage/>
                    <p>xyz@gmail.com</p>
                  </div>
                  <div className='flex items-centre gap-3 mt-3'>
                    <MdCall/>
                    <p>+91 9876543210</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className='hidden sm:block'>
          <div className='flex justify-between items-center py-6 border-t-2 border-gray-400'>
            <span className='text-sm text-gray-400'>
              copyright &copy; 2024 by MOYEON
            </span>
            <div className='flex items-centre justify-centre gap-4 pb-4'>
              <a href="/">
                <FaInstagram className="text-4xl"/>
              </a>
              <a href="/">
                <FaFacebook className="text-4xl"/>
              </a>
              <a href="/">
                <FaLinkedin className="text-4xl"/>
              </a>
            </div>
            <span className='text-sm text-gray-400'>
              <ul className='flex gap-3'>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
