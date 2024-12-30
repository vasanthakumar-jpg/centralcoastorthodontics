import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight, FaArrowLeft, FaArrowRight, FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

export default function ImageVideoSlider() {
    const images = [
        {
          type: 'image',
          url: 'https://scontent-atl3-1.cdninstagram.com/v/t51.75761-15/469124294_18360758476185611_6953826498013270571_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=ULhIb6n4ffEQ7kNvgHLymy9&_nc_zt=23&_nc_ht=scontent-atl3-1.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=Ak-ootimmrbMfgRtTqgHTNA&oh=00_AYAD1LKNJRchvw99hOcHkR9xasmyWCpVp-kfYhnS1MEKBg&oe=67729905'
        },
        {
          type: 'video',
          url: 'https://scontent-atl3-1.cdninstagram.com/v/t51.75761-15/469007928_18361017250185611_2274948083121490627_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=DsMI9R7DTGgQ7kNvgHqVfY9&_nc_zt=23&_nc_ht=scontent-atl3-1.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=Ak-ootimmrbMfgRtTqgHTNA&oh=00_AYCF6emVEYIml4llNSIO2FprAZ8KgO__A74cHA-aiXZcng&oe=677291A5'
        },
        {
          type: 'image',
          url: 'https://scontent-atl3-1.cdninstagram.com/v/t51.75761-15/469124294_18360758476185611_6953826498013270571_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=ULhIb6n4ffEQ7kNvgHLymy9&_nc_zt=23&_nc_ht=scontent-atl3-1.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=Ak-ootimmrbMfgRtTqgHTNA&oh=00_AYAD1LKNJRchvw99hOcHkR9xasmyWCpVp-kfYhnS1MEKBg&oe=67729905'
        },
        {
          type: 'image',
          url: 'https://scontent-atl3-1.cdninstagram.com/v/t51.75761-15/469007928_18361017250185611_2274948083121490627_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=DsMI9R7DTGgQ7kNvgHqVfY9&_nc_zt=23&_nc_ht=scontent-atl3-1.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=Ak-ootimmrbMfgRtTqgHTNA&oh=00_AYCF6emVEYIml4llNSIO2FprAZ8KgO__A74cHA-aiXZcng&oe=677291A5'
        },
        {
          type: 'video',
          url: 'https://scontent-atl3-1.cdninstagram.com/v/t51.75761-15/469124294_18360758476185611_6953826498013270571_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=ULhIb6n4ffEQ7kNvgHLymy9&_nc_zt=23&_nc_ht=scontent-atl3-1.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=Ak-ootimmrbMfgRtTqgHTNA&oh=00_AYAD1LKNJRchvw99hOcHkR9xasmyWCpVp-kfYhnS1MEKBg&oe=67729905'
        },
        {
          type: 'image',
          url: 'https://scontent-atl3-1.cdninstagram.com/v/t51.75761-15/469007928_18361017250185611_2274948083121490627_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=DsMI9R7DTGgQ7kNvgHqVfY9&_nc_zt=23&_nc_ht=scontent-atl3-1.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=Ak-ootimmrbMfgRtTqgHTNA&oh=00_AYCF6emVEYIml4llNSIO2FprAZ8KgO__A74cHA-aiXZcng&oe=677291A5'
        },
        {
          type: 'image',
          url: 'https://scontent-atl3-1.cdninstagram.com/v/t51.75761-15/469124294_18360758476185611_6953826498013270571_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=ULhIb6n4ffEQ7kNvgHLymy9&_nc_zt=23&_nc_ht=scontent-atl3-1.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=Ak-ootimmrbMfgRtTqgHTNA&oh=00_AYAD1LKNJRchvw99hOcHkR9xasmyWCpVp-kfYhnS1MEKBg&oe=67729905'
        },
        {
          type: 'video',
          url: 'https://scontent-atl3-1.cdninstagram.com/v/t51.75761-15/469007928_18361017250185611_2274948083121490627_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=DsMI9R7DTGgQ7kNvgHqVfY9&_nc_zt=23&_nc_ht=scontent-atl3-1.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=Ak-ootimmrbMfgRtTqgHTNA&oh=00_AYCF6emVEYIml4llNSIO2FprAZ8KgO__A74cHA-aiXZcng&oe=677291A5'
        },
        {
          type: 'image',
          url: 'https://scontent-atl3-1.cdninstagram.com/v/t51.75761-15/469007928_18361017250185611_2274948083121490627_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=DsMI9R7DTGgQ7kNvgHqVfY9&_nc_zt=23&_nc_ht=scontent-atl3-1.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=Ak-ootimmrbMfgRtTqgHTNA&oh=00_AYCF6emVEYIml4llNSIO2FprAZ8KgO__A74cHA-aiXZcng&oe=677291A5'
        },
        {
          type: 'image',
          url: 'https://scontent-atl3-1.cdninstagram.com/v/t51.75761-15/469124294_18360758476185611_6953826498013270571_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=ULhIb6n4ffEQ7kNvgHLymy9&_nc_zt=23&_nc_ht=scontent-atl3-1.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=Ak-ootimmrbMfgRtTqgHTNA&oh=00_AYAD1LKNJRchvw99hOcHkR9xasmyWCpVp-kfYhnS1MEKBg&oe=67729905'
        },
        {
          type: 'video',
          url: 'https://scontent-atl3-1.cdninstagram.com/v/t51.75761-15/469007928_18361017250185611_2274948083121490627_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=DsMI9R7DTGgQ7kNvgHqVfY9&_nc_zt=23&_nc_ht=scontent-atl3-1.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=Ak-ootimmrbMfgRtTqgHTNA&oh=00_AYCF6emVEYIml4llNSIO2FprAZ8KgO__A74cHA-aiXZcng&oe=677291A5'
        },
      
      ];


      const [selectedImage, setSelectedImage] = useState(null);
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const handleNext = () => {
        setCurrentIndex((prevIndex) => 
          prevIndex + 1 >= images.length ? 0 : prevIndex + 1
        );
        setSelectedImage(images[(currentIndex + 1) % images.length]);
      };
    
      const handlePrev = () => {
        setCurrentIndex((prevIndex) => 
          prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
        );
        setSelectedImage(images[currentIndex === 0 ? images.length - 1 : currentIndex - 1]);
      };
    
      const handleImageClick = (image, index) => {
        setSelectedImage(image);
        setCurrentIndex(index);
      };
    
      const handleClose = () => {
        setSelectedImage(null);
      };
    
      const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') {
          handlePrev();
        } else if (e.key === 'ArrowRight') {
          handleNext();
        }
      };          
    
    
     
  return (
    <div>
      <div className='bg-[#6C7B87]  p-10'>
      <h1 className=' text-4xl font-bold text-white my-2'>We Love What We Do</h1>
      <p className='text-white text-lg my-2'>@MintOrtho</p>
      <p className='text-white text-lg my-2'>Stay connected with us through social media and see how we’re making people smile every day!</p>
    <div className="container mx-auto py-5">
      {/* Image Grid */}
      <div className="grid grid-cols-1 2xs:grid-cols-1 base:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {images.slice(currentIndex, currentIndex + (window.innerWidth >= 1280 ? 4 : window.innerWidth >= 768 ? 3 : window.innerWidth >= 500 ? 2 : 1)).map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.url}
              alt=""
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => handleImageClick(image, (currentIndex + index) % images.length)} 
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows for Grid View */}
      <div className="md:flex md:justify-between md:flex-row 2xs:flex 2xs:flex-col-reverse mt-4">
        <div className='flex gap-2 my-4'>
          <FaFacebook className='text-white text-2xl hover:text-mintGreen hover:bg-white cursor-pointer'/><span className='text-white '>|</span> 
          <FaInstagram className='text-white text-2xl hover:text-mintGreen hover:bg-white cursor-pointer '/><span className='text-white '>|</span>
          <FaYoutube className='text-white text-2xl hover:text-mintGreen hover:bg-white cursor-pointer '/><span className='text-white '>|</span>       
          <FaTiktok className='text-white text-2xl hover:text-mintGreen  hover:bg-white cursor-pointer'/>
        </div>
        
        <div>
        <button
          onClick={() => {
            handlePrev();
            setSelectedImage(null);
          }}
          className="bg-white text-mintGreen border-2 border-mintGreen px-3 py-3
           hover:bg-mintGreen hover:text-white hover:border-white mr-4"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() => {
            handleNext();
            setSelectedImage(null);
          }}
           className="bg-white text-mintGreen border-2 border-mintGreen px-3 py-3
           hover:bg-mintGreen hover:text-white hover:border-white mr-4"
        >
          <FaArrowRight />
        </button>
        </div>

      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-85 flex items-center justify-center z-50">
          <div className="">
            <img
              src={selectedImage.url}
              alt=""
              className=" w-[500px] h-[80%] object-cover"
            />
            {/* Navigation buttons */}
            <button
              onClick={handlePrev}
              onKeyDown={handleKeyDown}
              className="absolute left-4 top-1/2 -translate-y-1/2 hover:scale-105 bg-white p-2  hover:bg-gray-200"
            >
               <FaAngleLeft />
            </button>
            <button
              onClick={handleNext} 
              onKeyDown={handleKeyDown}
              className="absolute right-4 top-1/2 -translate-y-1/2 hover:scale-105 bg-white p-2 hover:bg-gray-200"
            >
              <FaAngleRight />
            </button>
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4
               bg-white p-1 hover:scale-105 font-bold text-2xl hover:bg-gray-200"
            >
              <IoMdClose />
            </button>
          </div>
        </div>
      )}
    </div>
    </div>

    </div>
  )
}
