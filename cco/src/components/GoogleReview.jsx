import React, { useState } from 'react'
import { FaAngleLeft, FaAngleRight, FaGoogle, FaStar } from 'react-icons/fa';

function GoogleReview() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    "Exceptional service! The team went above and beyond my expectations.",
    "Very professional and efficient. Would highly recommend!",
    "Great experience from start to finish. Excellent communication.", 
    "Top quality service and friendly staff. Will use again!",
    "Outstanding work and attention to detail. 5 stars!",
    "Fantastic team and amazing results. Couldn't be happier.",
    "Professional, reliable and excellent customer service.",
    "Best service I've experienced. Will definitely return!"
  ];

  const names = [
    "Michael R.",
    "Sarah P.", 
    "David K.",
    "Emily W.",
    "James L.",
    "Jessica M.",
    "Robert S.",
    "Lisa T."
  ];

  const getVisibleSlides = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
    }
    return 1;
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = slides.length - getVisibleSlides();
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = slides.length - getVisibleSlides();
      return prev === 0 ? maxIndex : prev - 1;
    });
  };
  return (
   
        <div className="relative w-full px-6 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Slides Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {slides.slice(currentIndex, currentIndex + getVisibleSlides()).map((slide, index) => (
            <div 
              key={currentIndex + index}
              className="border-4 border-gray-300 shadow-lg p-6 min-h-[200px] bg-white">
                <div className='flex items-center gap-2 my-2'>
                <FaGoogle className='text-orangetext text-4xl mr-3' /><FaStar className='text-orangetext text-lg' />
                <FaStar className='text-orangetext text-lg' /><FaStar className='text-orangetext text-lg' />
                <FaStar className='text-orangetext text-lg' /><FaStar className='text-orangetext text-lg' />
                </div>
             <p>{slide} </p>  
             <hr className='border border-gray-500 my-4 w-16' />
             <p className='text-sky-900 font-semibold'>{names[currentIndex + index]}</p>
          <div className='flex'>
          
          </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex space-x-4 my-6 justify-between">
            <div className='flex gap-3'>
                 {/* Left Arrow Button */}
                <button onClick={prevSlide}
                    className="flex items-center justify-center w-10 h-10 bg-sky-800
                    text-white hover:bg-white hover:text-sky-800 hover:border-sky-800 hover:border-2
                    shadow-md transition duration-300"
                >
                    <FaAngleLeft size={20} />
                </button>

                {/* Right Arrow Button */}
                <button onClick={nextSlide}
                    className="flex items-center justify-center w-10 h-10 bg-sky-800
                    text-white hover:bg-white hover:text-sky-800 hover:border-sky-800 hover:border-2
                    shadow-md transition duration-300"
                >
                    <FaAngleRight size={20} />

                </button>
            </div>
     
     <div>
        <button 
            className="flex items-center justify-center px-2 py-1 bg-sky-800
            text-white hover:bg-white hover:text-sky-800 hover:border-sky-800 hover:border-2
             shadow-md transition duration-300 float-right">Reviews
        </button>
     </div>

     
    </div>
      </div>
    </div>
  )
}

export default GoogleReview
