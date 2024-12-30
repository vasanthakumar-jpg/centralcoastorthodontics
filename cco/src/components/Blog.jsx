import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { HiOutlineChat } from 'react-icons/hi'
import MainHeadingWithImage from './MainHeadingWithImage'

export default function Blog() {
  return <>
    <MainHeadingWithImage 
          images = {<img
            src="images/Free-Consult.jpg" alt="Background" className="absolute inset-0 w-full h-full" />}
          heading = {<p className='text-white text-3xl font-bold text-center absolute bottom-20 
              2xs: left-[35%]
              xs:left-[35%] 
              base:left-[40%]
              sm:left-[40%]
              md:left-[40%] 
              lg:left-[40%]
              xl:left-[45%]
          '>
           Blog</p>}
          />
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 absolute p-5' >
      <Card 
      image = {<img src='https://mintortho.kinsta.cloud/wp-content/uploads/2024/03/Night-Time-Only-Treatment.jpg'
      className='md:w-full h-300px'
      />}
      heading = {"Choosing the Best Orthodontist: What to Look For"}
      content = {"Welcome to the ultimate orthodontist selection guide, where we’re diving deep into the quest of choosing the best orthodontist."}
      />
      <Card 
      image = {<img src='https://mintortho.com/wp-content/uploads/2024/04/inivisalign-braces-or-aligner-5GUBBMD-scaled.jpg'
      className='md:w-full h-300px'
      heading = {"Hawley Retainers vs. Clear Retainers: Which One Is Right for You?"}
      
      />}
      heading = {"Choosing the Best Orthodontist: What to Look For"}
      content = {"Welcome to the ultimate orthodontist selection guide, where we’re diving deep into the quest of choosing the best orthodontist."}
      />
      <Card 
      image = {<img src='https://mintortho.com/wp-content/uploads/2024/03/Smiling-teenage-girl-with-headphones-post-treatment.jpg'
      className=' md:w-full md:h-300px'
      />}
      heading = {"Choosing the Best Orthodontist: What to Look For"}
      content = {"Welcome to the ultimate orthodontist selection guide, where we’re diving deep into the quest of choosing the best orthodontist."}
      />
    </div>
    </>
}

const Card = (props) => {
    return <>
    <div className='bg-[#00858e3d] relative'>
       {props.image}
        <h1 className='px-4 text-2xl font-bold '>{props.heading}</h1>
        <p className='px-4'>{props.content}</p>
        <button className="flex flex-row gap-2  px-4 my-4 text-mintGreen cursor-pointer hover:text-sky-500"> 
                       READ MORE <FaArrowRight className=" mt-1 " /></button>
    </div>
    </>
}