import React from 'react'
import GoogleReview from './GoogleReview'

function ExperienceCare() {
  return <>
    <div className='bg-orangetext h-full w-full'>
      
      <div className='lg:grid lg:grid-cols-2'>
        <div className='h-full'>
            <img src="images/Consult.jpg" className='md:h-full w-90% lg:h-80 xl:h-90%' alt="Free Consult" />	
        </div>
        
        <div className='mx-8 
        lg:my-16 
        2xs:py-8
        base:py-10 
        sm:py-16 
        md:py-16'>
            <h1 className='text-white text-2xl lg:text-3xl my-3 font-bold 
            2xs:w-56
            xs:w-60
            base:w-60
            sm:w-64
             md:w-64 lg:w-80 md:break-words
             lg:my-5 
             '>
                Get Started On Your New Smile Today</h1>

            <button className="bg-orangetext text-white border-2 border-white font-semibold
                hover:text-orangetext hover:border-orangetext px-6 py-2
                 hover:bg-white transition text-center my-2">
                SCHEDULE FREE CONSULT
        </button>
        </div>

      </div>

    </div>
<div className=' bg-stone-200'>
    <div className='lg:grid lg:grid-cols-2 lg:grid-flow-col-reverse 
    2xs:flex 2xs:flex-col-reverse
    xs:flex xs:flex-col-reverse
    base:flex base:flex-col-reverse
    sm:flex sm:flex-col-reverse
    md:flex md:flex-col-reverse
    '>
    
    <div className='mx-6 my-2 lg:my-6 xl:my-10'>
        <span className='text-brown text-2xl lg:text-3xl my-5 font-bold '>Experience</span> <br />
        <span className='text-brown text-2xl lg:text-3xl my-5 font-bold '>5-Star Care</span><br />

        <p className='text-brown text-sm my-2 '>We get results, plain and simple. Check out some of our awesome 5-star reviews from so many of our <span className='text-orangetext'>happy patients</span> over the years!</p>
    </div>

    <div className='h-full 
    2xs:-translate-y-6
    xs:-translate-y-6
    base:-translate-y-8
    sm:-translate-y-10 
    md:-translate-y-12 
    lg:-translate-y-20'>
        <img src="images/Front-office.jpg" className='md:h-full w-90% lg:h-full 
         xs:float-end
         base: float-end
         sm:float-end
         md:float-end
         ' alt="Free Consult" />	
    </div>

  
  
  </div>
  <GoogleReview/>
  </div>

  </>
}

export default ExperienceCare
