import React from 'react'
import MainHeadingWithImage from './MainHeadingWithImage'

export default function MeetDrSudit() {
  return (
    
    <div id='MeetDrSudit'>

      <MainHeadingWithImage 
          images = {<img
            src="images/Free-Consult.jpg" alt="Background" className="absolute inset-0 w-full h-full" />}
          heading = {<p className='text-white md:text-4xl font-bold text-center absolute bottom-20 
          2xs:left-[30%] 2xs:text-xl
          xs:left-[35%] 
          base:left-[40%] 
          md:left-[40%] 
          lg:left-[40%]
          xl:left-[45%]
          '>
            Meet Dr. Sudit</p>}
            heading2 = {<p className='text-white md:text-xl font-bold text-center absolute bottom-14
            2xs:left-[30%] 2xs:text-sm
          xs:left-[35%] 
          base:left-[40%] 
          md:left-[40%] 
          lg:left-[40%]
          xl:left-[45%]
            '>
            We Straighten Teeth Wel.</p>}
          />
          <div className='flex flex-col justify-center items-center mx-10'>
            <h1 className='text-center text-3xl text-orangetext font-bold pt-4'>We Love Serving Smiles</h1>
            <p className='2xs:text-sm text-center md:text-lg py-6'>Dr. Geoff Sudit is passionate about keeping up with the latest in orthodontic technology. He blends cutting-edge research and tools with traditional, tried-and-tested orthodontic techniques to provide patients with world-class care every time.</p>
          </div>
       <div className='border-2 border-gray-300 mx-5'>
      <Doctor images={<img 
            src="https://mintortho.com/wp-content/uploads/2024/02/dr-sudit-img-square.jpg"  
            alt="Description"
            className="w-full md:h-[700px] lg:h-[600px] mt-5 px-4"
          />} 
          heading={"Dr. Geoff Sudit"}
            paragraph={"“As an expert in all forms of braces and aligners, I’m passionate about keeping up with the latest in orthodontic technology. My practice blends cutting-edge research and tools with traditional, tried-and-tested orthodontic techniques to provide patients with world-class care every time. I am committed to developing innovative orthodontic solutions to meet each patient’s unique needs, and I have extensive experience with a range of treatment options, including digital tools and 3D-printed brackets from LightForce Orthodontics as well as Invisalign First & Teen, full Invisalign, and other treatment methods.”"}          />

      <DoctorImage />
      <Doctor 
        images={<img 
            src="https://mintortho.com/wp-content/uploads/2024/02/dr-sudit-family-square-1024x1024.jpg"  
            alt="Description"
            className="w-full md:h-[700px] lg:h-[600px] mt-5 px-4"
          />}
            paragraph={"After working with Dr. Randy Kunik for a few years and earning a reputation for quality care, exceptional work and a top-notch ability for connecting and relating to his patients, he is proud to be out on his own, doing what he loves, and returning to the city that he loves — Minneapolis."}    
            subpara={"Dr. Sudit is an avid sports fan, loves trying new restaurants, traveling, and spending as much time with his young family as his busy life will allow."}
            subheading={"Outside of the Practice"}
            />

            <div className='flex justify-center items-center'>
        <a href="#OurTechnology" 
        className=' my-4 px-2 py-2 bg-white text-mintGreen border-2 border-mintGreen'>Our Technology</a>
       </div>    
        </div>
    </div>
  )
}

function Doctor(props) {
    return <>
        <div className="lg:flex md:flex-row flex-col py-4">
          <div className="lg:w-1/2 w-full">
            {props.images}
          </div>
          <div className="lg:w-1/2 w-full">
            <div className=" lg:my-32">
              <h2 className="2xs:text-2xl md:text-4xl text-mintGreen font-bold mx-4 my-4 lg:text-4xl lg:leading-tight">{props.heading}</h2>
              <p className='2xs:text-sm md:text-lg mx-4 '>
                {props.paragraph}
              </p>
              <h2 className='2xs:text-2xl md:text-4xl text-gray-500 font-bold mx-4 my-2 lg:text-4xl lg:leading-tight'>{props.subheading}</h2>
              <p className='2xs:text-sm md:text-lg mx-4 pb-4'>{props.subpara}</p>
            </div>
          </div>
        </div>  
       
        

    </>
  }

  function DoctorImage() {
    return (
      <div className='lg:flex lg:justify-evenly lg:flex-row-reverse '>
        <div className='flex justify-center items-center mx-4 lg:w-full'>
          <img src="https://mintortho.com/wp-content/uploads/2024/02/dr-sudit-patient-square.jpg"
          className='w-full md:h-[700px] lg:h-[600px]'
          alt="Girl hiding behind plants" />
        </div>
        <div className='lg:w-full lg:my-16 lg:py-6 mx-4 lg:mx-4'>
          <p className='2xs:text-sm md:text-lg py-2'>Dr. Sudit attended The University of Texas for his undergraduate studies where he graduated summa cum laude with a Bachelor of Science degree in Psychology. He then attended the highly regarded dental school program at the University of Minnesota. While there, he earned his DDS and was awarded the American Association of Orthodontists Senior Student Award upon graduation.
  
          </p>
          <p className='2xs:text-sm md:text-lg my-3 '>Dr. Sudit practiced general dentistry in the Minneapolis area before completing his post-graduate training in orthodontics, along with a Master’s Degree in Dentistry. After all of that schooling, Dr. Sudit returned to Austin, excited to learn more under the tutelage of Dr. Randy Kunik, one of the best practitioners of Invisalign in the industry.</p>
        </div>
    </div>
    )
  }
  
