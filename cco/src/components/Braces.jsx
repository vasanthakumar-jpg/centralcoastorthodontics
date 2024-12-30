import React from 'react'
import CostOfInvaslign from './CostOfInvaslign'
import MainHeadingWithImage from './MainHeadingWithImage'

export default function Braces() {
  return <>


    <MainHeadingWithImage 
      images = {<img
        src="images/Free-Consult.jpg" alt="Background" className="absolute inset-0 w-full h-full" />}
      heading = {<p className='text-white md:text-3xl font-bold text-center absolute bottom-20 
      2xs:left-[15%] 2xs:text-lg
          xs:left-[30%]
          base:left:[35%]
          md:left-[30%] 
          lg:left-[30%]
          xl:left-[40%]
      '>
       Braces in Minneapolisis</p>}
      heading2 = {<p className='text-white text-4xl font-bold text-center absolute 
       md:bottom-10 
        bottom-14

        2xs:left-[15%] 2xs:text-lg
          xs:left-[30%]
          base:left:[35%]
          md:left-[30%] 
          lg:left-[30%]
          xl:left-[40%]
      '>
        For Kids, Teens & Adults
        </p>}
      />
    <div className='mx-6'>
      <h1 className='text-mintGreen text-3xl font-bold my-4'>LightForce Braces</h1>
      <p className=' my-4'>LightForce braces are the world’s first and only fully personalized 3D-printed bracket system. Unlike traditional braces, which come in a one-size-fits-all design, LightForce braces are custom-made to fit each patient’s unique smile.</p>
      <p>very set of LightForce braces starts with a detailed digital scan of your teeth. This data is used to create a precise 3D model of your mouth, allowing Dr. Sudit to plan your treatment with unparalleled accuracy. He custom builds your Lightforce braces with precise movements. This ideal customization means that the overall treatment time is faster and requires few office visits.</p>
    
    <h1 className='text-gray-500 text-3xl font-bold my-4'>What Makes LightForce Braces Unique?</h1>
    <p className='my-4'>The true power of LightForce braces lies in their customization. Each bracket is 3D printed to match the exact contours of your teeth, ensuring a perfect fit and maximum comfort. This means fewer adjustments, less irritation, and a faster path to your perfect smile.</p>
    <p>Moreover, LightForce uses indirect bonding, which means the brackets are placed on a model of your teeth in the exact position Dr. Sudit has prescribed. This method allows for greater precision in bracket placement and can lead to more efficient treatment and better results.</p>
    </div>
    <AboutBraces 
    Invisalign={"Braces For Kids"}
    image = {<img src="https://mintortho.kinsta.cloud/wp-content/uploads/2024/03/Braces-For-Kids-High-1024x683.jpg" 
        className='md:w-3/4 w-full my-4'
         alt="" />}
         para1={
            "At Mint Orthodontics, we understand the importance of a radiant smile. Guided by Dr. Sudit’s expertise, we provide exceptional orthodontic care for children using LightForce brackets, revolutionizing the way we approach early treatment."}
         subHeading = {"When Should Your Child First See an Orthodontist?"}
         para2 = {"The American Association of Orthodontists recommends that children have their first orthodontic evaluation no later than age 7. At this age, Dr. Sudit can identify any potential issues with jaw growth and emerging teeth, even while baby teeth are still present."}
/>    
    <AboutBraces 
    Invisalign={"Braces For Teens"}
    image = {<img src="https://mintortho.kinsta.cloud/wp-content/uploads/2024/03/Braces-For-Teens-High-1024x683.jpg" 
        className='md:w-3/4 w-full my-4'
         alt="" />}
         para1={"Navigating through the teenage years can be challenging, and if you’re dealing with misaligned teeth or a problematic bite, it can add another layer of complexity. At Mint Orthodontics, we’re here to make this journey smoother and more fun! Led by Dr. Sudit, our team is committed to providing effective and comfortable orthodontic options, using innovative LightForce brackets."}
         subHeading = {"Life With Braces"}
         para2 = {"At first, life with braces may require some adjustments, but with time, you’ll find it becomes a part of your routine. It’s important to remember that braces are a temporary journey and the end results are well worth it!"}
    />    
    <AboutBraces 
    Invisalign={"Braces For Adults"}
    image = {<img src="https://mintortho.kinsta.cloud/wp-content/uploads/2024/03/Braces-For-Adults-High-1024x683.jpg"
        className='md:w-3/4 w-full my-4'
         alt="" />}
         para1={"Orthodontic treatment isn’t just for children and teens. In fact, an increasing number of adults are choosing braces to correct misalignments, improve oral health, and enhance their smiles. Whether you’re considering a minor smile touchup or considering a complete smile redesign, we’re here to guide you on your journey to a stunning, confident smile."}
         subHeading = {"The Perfect Smile At Any Age"}
         para2 = {"Deciding to get braces as an adult can feel like a big step, but it’s important to remember that it’s never too late to improve your smile. With advances in orthodontic technology, particularly the introduction of LightForce brackets, braces are more comfortable and effective than ever before."}
/>
<CostOfInvaslign heading = {"Cost Of Braces"}/>

    </>
}

const AboutBraces = (props) => {
    return <>
    <div className='mx-6 my-4'>
        {props.image}
         <h1 className='text-3xl text-mintGreen font-bold my-4'>{props.Invisalign}</h1>
         <p>{props.para1}</p>

        <h1 className='my-4 text-3xl text-gray-500 font-bold '>{props.subHeading}</h1>
        <p>{props.para2}</p>
    </div>
    </>
}


