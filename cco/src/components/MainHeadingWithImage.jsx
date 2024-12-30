import React from 'react'

export default function MainHeadingWithImage(props) {
  return (
    <div className='p-5'>
       <div className="relative  h-72 w-full md:h-62 lg:h-[500px]">
        {/* Background Image */}
        {props.images}
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#1f1e1e] bg-opacity-50"></div>
        {/* Text Content */}
        <div className="relative h-full">
          <h1 className='lg:text-center'>{props.heading}</h1> <br />
          <p className='lg:text-center'>{props.heading2}</p>
          <p className='lg:text-center'>{props.heading3}</p>
        </div>
      </div>
    </div>
  )
}
