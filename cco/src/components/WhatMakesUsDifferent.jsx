import React from 'react'
import MainHeadingWithImage from './MainHeadingWithImage'

export default function WhatMakesUsDifferent() {
  return <>
    <div>
     <MainHeadingWithImage 
               images = {<img
                 src="images/Free-Consult.jpg" alt="Background" className="absolute inset-0 w-full h-full" />}
               heading = {<p className='text-white md:text-2xl font-bold text-center absolute bottom-20 
                2xs:left-[20%]
          xs:left-[25%] 
          base:left-[35%]
          md:left-[35%] 
          lg:left-[40%]
          xl:left-[45%]
                '>What Makes Us Different</p>}
               />
      <div className='p-5'>
        <h1 className='text-3xl font-bold text-mintGreen'>The Golden Rule is Platinum</h1>
        <p>We have high expectations at Mint Orthodontics. Our “motto” is a four-part commitment to our patients:</p>
        <ul className='list-disc pl-7 py-4 leading-7'>
            <li>We innovate to improve your experience and results.</li>
            <li>We treatment plan to make sure every smile is just as we’d want it.</li>
            <li>We hire the best, brightest, friendliest people in the industry so the office is safe and experienced.</li>
            <li>We design the space and the process so the environment feels welcoming, enjoyable, and decidedly un-doctor’s-office-like.</li>
        </ul>
        <img src="https://mintortho.com/wp-content/uploads/2024/03/NEW-Welecome-Mint-Ortho-1024x681.jpg" 
        className='md:w-[530px] lg:w-[700px] lg:h-full' alt="" />
        <h1 className='text-3xl font-bold text-gray-500 py-4'>Advanced Tech & Treatments</h1>
        <p>Necessity is the mother of innovation. We combine the most advanced technologies with tried-and-true solutions, so you experience the absolute best care and results. Right now, we are loving these 3 big innovations (and are the top providers of these services in the Midwest).</p>
        <h1 className='text-3xl font-bold text-mintGreen'>Invisalign</h1>
        <ul className='list-disc pl-7 py-4 leading-7'>
            <li>Straighten your teeth, discreetly and comfortably</li>
            <li>Nearly invisible.</li>
            <li>Fewer office visits</li>
            <li>Much more comfortable than traditional braces</li>
        </ul>
        <h1 className='text-3xl font-bold text-mintGreen'>Dental Monitoring</h1>
        <ul className='list-disc pl-7 py-4'>
            <li>Weekly treatment check-ins, without setting foot in the office</li>
            <li>Completely digital way for Dr. Sudit and the team to monitor your progress</li>
            <li>Catches possible treatment issues before they become problems</li>
            <li>Makes treatment safer, better, and less hassle</li>
        </ul>
        <img src="https://mintortho.com/wp-content/uploads/2024/03/Always-Striving-To-Be-Better-1024x681.jpg" 
        className='md:w-[530px] lg:w-[700px] lg:h-full' alt="" />
        <h1 className='text-3xl font-bold text-gray-500 py-2'>Always Striving To Be Better</h1>
        <ul className='list-disc pl-7 py-2 leading-7'>
            <li>No Forms To Fill Out — We obtain the essential information over the phone or during your appointment.</li>
            <li>Faster, More Convenient, & Better Treatment Options — We use new technology so that, when possible, our appointments are faster, less frequent, virtual, and more efficient than most others.</li>
            <li>No Waiting For Your Appointment — We arrange our appointments so that there is as little waiting as possible. If an unexpected event does impact the schedule, we do our best to warn you before arrival.</li>
            <li>Treatment Based Around Your Needs — First we listen – to your concerns, questions, & treatment ideas. Second, we evaluate your teeth and bite. Finally, we recommend treatment options best for you.</li>
        </ul>
        
      </div>
    </div>
    <div className='flex justify-center items-center'>
    <a href="#MeetDrSudit" className=' my-4 px-2 py-2 bg-white text-mintGreen border-2 border-mintGreen '>Meet Dr Sudit</a>
    </div>
  </>
}
