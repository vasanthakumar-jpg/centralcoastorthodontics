import React, { useState } from 'react'
import ExperienceCare from './ExperienceCare'
import GoogleReview from './GoogleReview'

function FreeConsult() {
   
  return <>
      <div className="relative  h-64 md:h-62 lg:h-[500px] m-4">
        {/* Background Image */}
        <img
          src="images/Free-Consult.jpg" // Replace with your image URL
          alt="Background"
          className="absolute inset-0 w-full h-full "
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* Text Content */}
        <div className="relative flex items-end bottom-14 justify-center h-full">
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold text-center ">
            Free Consult
          </h1>
        </div>
      </div>

      <div>
        <h1 className='text-center text-xl font-bold text-orangetext'>Get Started Today</h1>
        <p className='text-center break-words mx-2'>We proudly serve patients of all ages from Minneapolis, MN, and the surrounding areas!</p>
        <p className='text-center break-words mx-2'><span className='text-black font-bold'>How It Works:</span> Simply choose your appointment day/time using our easy online scheduler.</p>
      </div>

      <div>
      
      <div className="flex flex-col justify-center mx-4 my-6 md:mx-20 lg:items-center lg:mx-0">
      <p className='text-center my-4'>Let's find the best location for your appointment</p>
      <form action="">

            <label htmlFor="inputField" className="mb-2 text-lg font-medium text-gray-700  ">
            Choose a location for the appointment:
            </label>
            <input
                type="text"
                id="inputField"
                placeholder="use your zip to order by distance"
                className="w-full lg:w-full px-4 py-2 border border-gray-300 text-sm
                rounded-md shadow-sm focus:outline-none md:w-full my-4
                ="
            />
      </form>
      </div>

      <div className='md:flex mx-4 md:justify-center base:grid base:grid-col-1'>
            <div className='border border-gray-300 w-44 h-28 rounded-lg 
             hover:bg-cyan-100
             hover:border-cyan-400 
             2xs:w-90% 2xs:my-4
             xs:w-90% xs:my-4
             base:w-90% base:my-4
             sm:w-90% sm:my-4
             md:w-1/4 md:mr-2 '>
                <div className=' my-2'>
                <p className='mx-5 text-gray-600 text-2xs'>Minneapoils, MN</p>
                <p className='mx-5 text-gray-600 text-2xs'>2804 W 43rd st</p>
                </div>

               <div className='float-end'>
               <button className='border border-cyan-500 text-gray-300 rounded-md text-sm px-2 py-1 
                    hover:bg-white
                    hover:border-cyan-400 
                    hover:text-cyan-400
                    mx-2'>In Person
                </button>
               </div>
            </div>
            
            <div>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2824.8876111917824!2d-93.31496692346277!3d44.92523437107325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f6a54b75c4c421%3A0x13f0c3243d952dc9!2s2804%20W%2043rd%20St%2C%20Minneapolis%2C%20MN%2055410!5e0!3m2!1sen!2sus!4v1699482437573!5m2!1sen!2sus"
                    className='h-80 w-90% rounded-md '
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
      </div>
      <p className='text-center text-lg break-words my-4 2xs:mx-4 2xs:text-sm base:mx-4 base:text-sm sm:mx-4 '>This site is protected by reCAPTCHA and the Google 
        <span className='text-cyan-400'> Privacy Policy <span className='text-black'>and</span>  Terms of Services </span>apply.</p>
      </div>
      <ExperienceCare/>
    </>

}

export default FreeConsult
