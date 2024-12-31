import React from 'react'
import MainHeadingWithImage from './MainHeadingWithImage'

export default function GetToKnowUs() {
  return (
    <div>
      <MainHeadingWithImage 
        images = {<img
          src="images/Free-Consult.jpg" alt="Background" className="absolute inset-0 w-full h-full" />}
        heading = {<p className='text-white text-3xl font-bold text-center absolute bottom-20 
          2xs:left-[20%]
          xs:left-[30%]
          base:left-[35%]
          md:left-[40%] 
          lg:left-[40%]
          xl:left-[45%]'>Our Practice</p>}
                     />
      <div className="lg:flex lg:flex-col-reverse">
        <div className="flex justify-center items-center mx-4">
          <img src="https://mintortho.com/wp-content/uploads/2024/02/Get-To-Know-Us-1.jpg" 
          className=" w-full 2xs:h-auto  md:h-auto mx-4" alt="" /></div>
        
        <div className="lg:flex lg:flex-row lg:my-5 mx-4 p-5">
          <div className="lg:w-2/5">
          <h1 className="text-2xl font-bold text-brown mx-4 my-2 lg:text-4xl lg:mx-10 lg:my-6 xl:text-5xl">Get To Know Us</h1>
          </div>
          <div className="lg:w-3/5 lg:my-2"><p className="text-sm mx-4 my-2 lg:text-xl">We are so proud of our awesome team. They are talented, smart, and go above and beyond to make your day a little brighter.</p>
            <button className="bg-mintGreen text-white px-4 p-2 border-2 border-white
             hover:bg-white hover:text-mintGreen hover:border-mintGreen mx-4 my-6">MEET OUR TEAM</button>
          </div>
        </div>
    </div>

    <div className="xl:flex xl:flex-col xl:w-full xl:px-20 xl:py-20">
      <h1 className="text-2xl font-bold text-brown lg:text-4xl text-center m-4 xl:text-6xl ">Better Tech, Better Service, Better Orthodontics</h1>
      <p className="text-center md:text-lg m-4 break-words 2xs:text-base xl:px-20 2xs:p-5">Committed to excellence, we use only the most advanced tools and <span className="text-mintGreen">technology</span> to achieve seamless, comfortable, and personalized treatments from start to finish.</p>
    </div>

    <div>
    <div className='grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-4 lg:my-10 my-5 mx-4'>
     
      <div className=' md:flex md:justify-center md:items-center md:gap-4 md:mx-4 border border-gray-200'>
        <div className='2xs:flex justify-center items-center 2xs:my-6 md:ml-8'>
          <img src="https://mintortho.kinsta.cloud/wp-content/uploads/2024/02/iTero-Scanner.png" 
          className='h-auto w-auto lg:w-full lg:h-full xl:w-full xl:h-full'  alt="iTero Scanner" /></div>
        <div className='2xs:my-2 2xs:mx-4 md:mr-10 '>
          <h1 className='2xs:text-base  tracking-widest lg:text-3xl font-medium py-4 px-10'>iTero Scanner</h1>
              <p className='text-sm md:break-words md:text-lg lg:text-lg px-10'>No more messy impressions! With the iTero Scanner, we can create a more accurate, more comfortable, and fully digital model of your smile.
              </p>
        </div>
      </div>
      
      <div className=' md:flex md:justify-center md:items-center md:gap-4 md:mx-4 border border-gray-200'>
        <div className='2xs:flex justify-center items-center 2xs:my-6 md:ml-8'>
          <img src="https://mintortho.kinsta.cloud/wp-content/uploads/2024/07/dental-monitoring-design-img.png"
           className='h-auto w-64 lg:w-64 lg:h-full xl:w-full xl:h-full'  alt="iTero Scanner" /></div>
        <div className='2xs:my-2 2xs:mx-4 md:mr-10 '>
          <h1 className='2xs:text-base  tracking-widest lg:text-3xl font-medium py-4 px-10'>DentalMonitoring</h1>
              <p className='text-sm md:break-words md:text-lg lg:text-lg px-10'>With DentalMonitoring, we can monitor your progress between in-office visits, saving you time while we ensure your treatment is progressing as it should.</p>
        </div>
      </div>

      <div className=' md:flex md:justify-center md:items-center md:gap-4 md:mx-4 border border-gray-200'>
        <div className='2xs:flex justify-center items-center 2xs:my-6 md:ml-8'>
         
          <img src="https://mintortho.kinsta.cloud/wp-content/uploads/2024/02/Retain-img.png" 
          className='h-auto w-auto lg:w-full lg:h-full xl:w-full xl:h-full'  alt="Retain" /></div>
        <div className='2xs:my-2 2xs:mx-4 md:mr-10 '>
          <h1 className='2xs:text-base  tracking-widest lg:text-3xl font-medium py-4 px-10'>Retain</h1>
              <p className='text-sm md:break-words md:text-lg lg:text-lg px-10'>Need a new retainer? The Retain program is a customized and convenient retainer service designed to ensure your treatment results last a lifetime.</p>
        </div>
      </div>

      <div className=' md:flex md:justify-center md:items-center md:gap-4 md:mx-4 border border-gray-200  '>
        <div className='2xs:flex justify-center items-center 2xs:my-6 md:ml-8'>
          <img src="https://mintortho.kinsta.cloud/wp-content/uploads/2024/02/LightForce.png" 
          className='h-auto w-auto lg:w-full lg:h-full xl:w-[350px] xl:h-full' alt="LightForce" /></div>
        <div className='2xs:my-2 2xs:mx-4 md:mr-10'>
          <h1 className='2xs:text-base  tracking-widest lg:text-3xl font-medium py-4 px-10'>LightForce</h1>
              <p className='text-sm md:break-words md:text-lg lg:text-lg px-10'>LightForce brackets are cutting-edge dental braces that combine modern 3D-printing technology with fully digital, customized treatment.</p>
        </div>
      </div>

    </div>
    <div className='flex justify-center items-center p-16 '>
    <button className='bg-mintGreen text-white px-4 py-2 border-2 border-white
        hover:bg-white hover:text-mintGreen hover:border-mintGreen'>EXPLORE TECHNOLOGY</button>
    </div>
    </div>

    <ImageWithContent/>

    </div>
  )
}


function ImageWithContent() {
  return <>
  <div className='lg:flex lg:justify-evenly  bg-zinc-200'>
      <div className='flex justify-center items-center mx-6  lg:w-full'>
        <img src="https://mintortho.com/wp-content/uploads/2024/03/Sustainable-Practices-for-a-Greener-Tomorrow.jpg"
        className='w-full md:h-[550px] my-4 mx-4 '
        alt="Girl hiding behind plants" />
      </div>
      <div className='lg:w-full lg:my-16 2xs:py-4'>
        <h1 className='2xs:text-2xl md:text-4xl text-brown font-bold mx-4 my-4 lg:text-5xl lg:leading-tight '>Sustainable Practices for a Greener Tomorrow</h1>
        <p className='2xs:text-sm md:text-base mx-4 lg:text-xl '>Orthodontic treatment results in carbon emissions being released into the atmosphere.
          <span className='text-mintGreen  lg:text-xl'> Our practice</span> is making changes to help offset the negative impact of orthodontic treatment on the environment.</p>
        <p className='2xs:text-sm md:text-sm mx-4 my-6 lg:text-xl'>One of the many ways we are working to positively impact our environment is by contributing to reviving our planet. In 2023, we donated a tree for each patient that started treatment — resulting in over 400 new trees planted. We are also a fully digital practice, so no trees are harmed in our admin process!</p>
      </div>
  </div>


  <div className='xl:flex xl:justify-evenly xl:flex-row-reverse xl:mx-4 bg-gray-100'>
      <div className='flex justify-center items-center mx-4 xl:w-full'>
        <img src="/images/office-tour.jpg"
        className='w-full md:h-[550px] px-4 py-10 '
        alt="Girl hiding behind plants" />
      </div>
      <div className='xl:w-full xl:my-16 2xs:py-4 mx-5 xl:mx-4'>
        <h1 className='2xs:text-2xl md:text-4xl text-brown font-bold mx-4 my-4 lg:text-5xl lg:leading-tight '>Check Out Our Space</h1>
        <p className='2xs:text-sm md:text-base mx-4 lg:text-xl '>We designed our space with you in mind. Bright, open, and as un-doctor’s-office-like as possible!</p>
        <p className='2xs:text-sm md:text-sm mx-4 my-3 lg:text-xl'>Equipped with the best team and technology around, we provide exceptional care. We also know your time is just as valuable as our time, so we strive to keep wait times as low as possible and our appointments streamlined.</p>
        
        <div className=' mx-4'>
        <span className='flex gap-2 font-semibold 2xs:text-sm'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" className='my-1'
         viewBox="0 0 24 16" fill="none">
          <path d="M4.87483 0.162109H0.236079C0.105696 0.162109 0 0.280431 0 0.426387V15.7347C0 15.8807 0.105696 15.999 0.236079 15.999H4.87483C5.00521 15.999 5.11091 15.8807 5.11091 15.7347V0.426387C5.11091 0.280431 5.00521 0.162109 4.87483 0.162109Z" fill="#2D2926">
            </path>
            <path d="M18.8877 0.21041V15.7193C18.8877 15.8688 18.9964 15.9905 19.13 15.9905H23.7625C23.8961 15.9905 24.0048 15.8688 24.0048 15.7193V7.41544C24.0048 3.62051 22.1203 0.876898 19.1227 0.00640693C19.0057 -0.0272072 18.8877 0.0759538 18.8877 0.21041Z" fill="#2D2926">
              </path><path d="M9.41211 0.21041V15.7193C9.41211 15.8688 9.52083 15.9905 9.6544 15.9905H14.2869C14.4205 15.9905 14.5292 15.8688 14.5292 15.7193V7.41544C14.5292 3.62051 12.6447 0.876898 9.64715 0.00640693C9.53015 -0.0272072 9.41211 0.0759538 9.41211 0.21041Z" fill="#2D2926">
              </path></svg>
        100% Digital Practice</span>
        <hr className='border border-gray-300 my-2'/>
        <span className='flex gap-2 font-semibold 2xs:text-sm'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" className='my-1'
         viewBox="0 0 24 16" fill="none">
          <path d="M4.87483 0.162109H0.236079C0.105696 0.162109 0 0.280431 0 0.426387V15.7347C0 15.8807 0.105696 15.999 0.236079 15.999H4.87483C5.00521 15.999 5.11091 15.8807 5.11091 15.7347V0.426387C5.11091 0.280431 5.00521 0.162109 4.87483 0.162109Z" fill="#2D2926">
            </path>
            <path d="M18.8877 0.21041V15.7193C18.8877 15.8688 18.9964 15.9905 19.13 15.9905H23.7625C23.8961 15.9905 24.0048 15.8688 24.0048 15.7193V7.41544C24.0048 3.62051 22.1203 0.876898 19.1227 0.00640693C19.0057 -0.0272072 18.8877 0.0759538 18.8877 0.21041Z" fill="#2D2926">
              </path><path d="M9.41211 0.21041V15.7193C9.41211 15.8688 9.52083 15.9905 9.6544 15.9905H14.2869C14.4205 15.9905 14.5292 15.8688 14.5292 15.7193V7.41544C14.5292 3.62051 12.6447 0.876898 9.64715 0.00640693C9.53015 -0.0272072 9.41211 0.0759538 9.41211 0.21041Z" fill="#2D2926">
              </path></svg>
              Always Bright & Fun</span>
        <hr className='border border-gray-300 my-2'/>
        <span className='flex gap-2 font-semibold 2xs:text-sm'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" className='my-1'
         viewBox="0 0 24 16" fill="none">
          <path d="M4.87483 0.162109H0.236079C0.105696 0.162109 0 0.280431 0 0.426387V15.7347C0 15.8807 0.105696 15.999 0.236079 15.999H4.87483C5.00521 15.999 5.11091 15.8807 5.11091 15.7347V0.426387C5.11091 0.280431 5.00521 0.162109 4.87483 0.162109Z" fill="#2D2926">
            </path>
            <path d="M18.8877 0.21041V15.7193C18.8877 15.8688 18.9964 15.9905 19.13 15.9905H23.7625C23.8961 15.9905 24.0048 15.8688 24.0048 15.7193V7.41544C24.0048 3.62051 22.1203 0.876898 19.1227 0.00640693C19.0057 -0.0272072 18.8877 0.0759538 18.8877 0.21041Z" fill="#2D2926">
              </path><path d="M9.41211 0.21041V15.7193C9.41211 15.8688 9.52083 15.9905 9.6544 15.9905H14.2869C14.4205 15.9905 14.5292 15.8688 14.5292 15.7193V7.41544C14.5292 3.62051 12.6447 0.876898 9.64715 0.00640693C9.53015 -0.0272072 9.41211 0.0759538 9.41211 0.21041Z" fill="#2D2926">
              </path></svg>
              Unmatched Service</span>
        <button className="bg-mintGreen text-white px-4 p-2 border-2 border-white
             hover:bg-white hover:text-mintGreen hover:border-mintGreen my-2">TOUR THE OFFICE</button>
        </div>
        
      </div>
  </div>

  </>
  
}