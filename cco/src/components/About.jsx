import React, { useState } from 'react'
import { FaAward } from 'react-icons/fa';

export default function About() {
  return <>
  <div className='xl:flex '>
  
    <div className='m-6 xl:w-1/2 '>
      <h1 className='text-3xl font-bold text-brown my-1'>Better Tech</h1>
      <h1 className='text-3xl font-bold text-brown my-1'>Better Service</h1>
      <h1 className='text-3xl font-bold text-brown'>Better Orthodontics</h1>
      <p className='my-2.5 text-sm'>At Mint Orthodontics, we’re here to change your perspective on what going to the orthodontist is like. We want to meet your expectations, and then exceed them!</p>
      <button className="bg-orangetext text-white border-2 border-white font-semibold
      hover:text-orangetext hover:border-orangetext px-6 py-2 hover:bg-white transition text-center ">
        WHAT MAKE US DIFFERENT
      </button>
    </div>
    <div className="grid md:grid-cols-2 grid-cols-1  mx-3 ">
        <Dropdown icons={<FaAward className='text-orangetext text-2xl mx-2'/>}
          dropdown={"We obsess over patient experience and care"}
          title={"Personalized Service"}
        />
        <Dropdown icons={<FaAward className='text-orangetext text-2xl mx-2'/>}
          title={"Top Invisalign Provider"}
          dropdown={"We rank within the top 1% of Invisalign providers"}
        />
        <Dropdown icons={<FaAward className='text-orangetext text-2xl mx-2'/>}
          dropdown={"We craft smiles using innovative tools and tech"}
          title={"Optimized Results"}
        />
        <Dropdown
        icons={<FaAward className='text-orangetext text-2xl mx-2'/>}
        dropdown={"We use better tech which means better service and treatment"}
        title={"Better Tech"}
         className="hidden md:block shadow-blue-400 shadow-2xl" 
         />
        <Dropdown
        icons={<FaAward className='text-orangetext text-2xl mx-2'/>}
        dropdown={"We offer virtual visits and care to save you time"}
        title={"Convenience Matters"}
        className="hidden md:block shadow-2xl" 
        />
        <Dropdown 
        icons={<FaAward className='text-orangetext text-2xl mx-2'/>}
        dropdown={"We received ‘Best Orthodontist’ for our expertise"}
        title={"Awarded & Recognized"}
        className="hidden md:block shadow-2xl" 
        />

        <Dropdown icons={<FaAward className='text-orangetext text-2xl mx-2'/>}
        dropdown={"We provide 5-star care as awarded by MSP Magazine"}
        title={"5-Star Treatment"}
         className="hidden md:block shadow-2xl"
          />
          
        <Dropdown 
        icons={<FaAward className='text-orangetext text-2xl mx-2'/>}
        dropdown={"We donate a tree for every patient in treatment"}
        title={"Sustainability Always"}
        className="hidden md:block shadow-2xl" />
    </div>
    </div>
    <div className="my-4">
      <ImageComponent />
    </div>
<div>
    <ImageWithContent/>
</div>

    </>
}



const Dropdown = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="w-full mx-1 mt-10 xl:mx-0 xl:mt-5">
        {/* Dropdown Header */}
        <div
          className="flex items-center justify-between bg-gray-200 px-1 py-4  mx-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}>
          <span className="text-orangetext font-medium flex"> {props.icons}{props.title}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 transition-transform text-md text-orangetext font-bold ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
  
        {/* Dropdown Content */}
        {isOpen && (
          <div className="  bg-gray-200 shadow p-4">
            <p className="text-black text-lg font-medium mx-10">{props.dropdown}</p>
          </div>
        )}
      </div>
    );
  };
  

  function ImageComponent() {
    return (
      <div>
        <div className="">
       <div className="grid md:grid-cols-4 grid-cols-2  gap-2 mx-12">
         <div className=' w-fit'>
           <img 
           src="https://mintortho.kinsta.cloud/wp-content/uploads/2024/02/AAo-logo.png" 
           className="
           2xs:h-20 2xs:w-24
           xs:h-20 xs:w-32
           sm:h-24 sm:w-28
           lg:h-32 lg:w-44 
           "/>
         </div>
         <div className=' w-fit'>
         <img  
           src="https://mintortho.kinsta.cloud/wp-content/uploads/2024/02/Top-Dentists-logo.png"
           className="
           2xs:h-20 2xs:w-24
           xs:h-20 xs:w-32
           sm:h-24 sm:w-28
           lg:h-32 lg:w-44 
           "/>
         </div>
         <div className=' w-fit'>
         <img  
            src="https://mintortho.kinsta.cloud/wp-content/uploads/2024/02/Minnesota-logo.png"
           className="  
           2xs:h-20 2xs:w-24
           xs:h-20 xs:w-32
           sm:h-24 sm:w-28
           lg:h-32 lg:w-44  " />
         </div>
         <div className=' w-fit'>
          <img
           src="https://mintortho.kinsta.cloud/wp-content/uploads/2024/04/Diamond-Plus-Invisalign-Provider-white-1.svg"
           className=" 
           2xs:h-20 2xs:w-24           
           xs:h-20 xs:w-32
           sm:h-24 sm:w-28
           lg:h-32 lg:w-44  " />
         </div>
       </div>
     </div>
      </div>
    )
  }
  

 function ImageWithContent(){
    return <>
    <div className='xl:flex xl:mx-4 xl:my-4'>
      <div>
        <div className='m-6 xl:w-4/5'>
          <h1 className='text-zinc-800 text-2xl lg:text-4xl my-5 font-bold   '>It’s Easy To Get Started</h1>
          <p className='text-sm my-2.5 '>
          We know how busy life can get, so we’ve simplified our process into 3 easy steps. Ready to get started? <span>Our team</span> here to help!</p>
        </div>
      </div>
      <div className='md:mx-4 2xs:mx-4'>
        <button className="bg-orangetext text-white border-2 border-white font-semibold
        hover:text-orangetext hover:border-orangetext px-6 py-2
         hover:bg-white transition text-center
          xl:mx-4 xl:my-6 lg:mx-2 ">
        SCHEDULE FREE COSULT
        </button>
      </div>
    </div>
    </>
  }
  