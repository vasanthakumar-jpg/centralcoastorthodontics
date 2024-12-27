import React from 'react'
import { ImMobile } from 'react-icons/im'
import { MdLocationPin } from 'react-icons/md'

export default function InvisalignProvider() {
  return <>
    <Minneapolis images={<img src="https://mintortho.com/wp-content/uploads/2020/09/invisalign-in-minneapolis-update.png" 
        className='lg:absolute bottom-0 animate-resize'  alt="" />}
    />
    <div className='bg-[#CFDDE8]'><BraceInMinneapolis/></div>
    
    <div className='bg-[#F1ECE5]'>
        <Minneapolis 
          images={<img src="https://mintortho.com/wp-content/uploads/2020/09/Visit-Our-Minneapolis-office.png"  
          className='lg:absolute bottom-0 animate-resize'  alt="" />} /> 
    </div>
          <MintOrthodonticsINMinneapolis/>
    </>
}


const Minneapolis = (props) => {
    return <>
    <div className='lg:grid lg:grid-cols-2'>
      <div className='px-6 my-4' >
        <h1 className='text-3xl text-mintGreen font-bold py-4'>Invisalign Provider in Minneapolis</h1>
        <p className='py-4 lg:2xl xl:text-2xl whitespace-pre-wrap'>Looking for an invisible way to straighten your teeth? Mint Orthodontics, a Diamond Plus provider of Invisalign in Minneapolis, MN, has got you covered. Invisalign is a revolutionary orthodontic treatment that uses clear, removable aligners to gradually shift your teeth into their desired positions.</p>
        <p className='py-4 lg:2xl xl:text-2xl whitespace-pre-wrap'>Invisalign offers several key benefits over traditional braces. The aligners are virtually invisible, allowing for a more discreet treatment experience. They are also removable, providing you with the flexibility to eat, drink, brush, and floss normally. This not only makes maintaining your oral hygiene easier but also means there are no food restrictions.</p>
        <p className='py-2 lg:2xl xl:text-2xl whitespace-pre-wrap'>The process of getting Invisalign involves a series of steps. We start by taking a digital scan of your teeth, which we use to create a personalized treatment plan. You’ll receive a series of custom-made aligners, each designed to make small adjustments to the alignment of your teeth. As you progress through the series of aligners, your teeth gradually move into their final positions.</p>
      </div>
      <div className='relative'>
      {props.images}
      </div>
    </div>
    </>
}

const BraceInMinneapolis = () => {
    return <>
    <div className='grid grid-cols-1 lg:grid lg:grid-cols-2'>
      <div className='order-2 lg:order-1 relative'>
        <img src="https://mintortho.com/wp-content/uploads/2020/09/Braces-in-Minneapolis.png" 
          className='lg:absolute bottom-0 animate-resize'  alt="" />
      </div>
      <div className='px-6 my-4 order-1 lg:order-2' >
        <h1 className='text-3xl text-mintGreen font-bold py-4'>Invisalign Provider in Minneapolis</h1>
        <p className='py-4 lg:2xl xl:text-2xl whitespace-pre-wrap'>Looking for an invisible way to straighten your teeth? Mint Orthodontics, a Diamond Plus provider of Invisalign in Minneapolis, MN, has got you covered. Invisalign is a revolutionary orthodontic treatment that uses clear, removable aligners to gradually shift your teeth into their desired positions.</p>
        <p className='py-4 lg:2xl xl:text-2xl whitespace-pre-wrap'>Invisalign offers several key benefits over traditional braces. The aligners are virtually invisible, allowing for a more discreet treatment experience. They are also removable, providing you with the flexibility to eat, drink, brush, and floss normally. This not only makes maintaining your oral hygiene easier but also means there are no food restrictions.</p>
        <p className='py-2 lg:2xl xl:text-2xl whitespace-pre-wrap'>The process of getting Invisalign involves a series of steps. We start by taking a digital scan of your teeth, which we use to create a personalized treatment plan. You'll receive a series of custom-made aligners, each designed to make small adjustments to the alignment of your teeth. As you progress through the series of aligners, your teeth gradually move into their final positions.</p>
        <p className='py-4 lg:2xl xl:text-2xl whitespace-pre-wrap'>With Invisalign, achieving a straighter, healthier, and more beautiful smile has never been easier or more convenient.</p>
      </div>
    </div>
    </>
}

const MintOrthodonticsINMinneapolis = () => {
    return <>
    <div className='lg:grid lg:grid-cols-5 lg:grid-flow-dense lg:mx-6 py-8 '>

        <div className="h-full grid md:grid-cols-2 sm:grid-cols-1 
            lg:grid-cols-2 lg:col-span-2 lg:w-[100%] 
              order-2 lg:order-1 bg-gray-200  ">
        
          <div className="mx-6">  
              <h2 className="text-xl font-bold text-mintGreen my-4">Address</h2>
              <h2 className='text-extrabold text-lg text-slate-700'>Minnepolis</h2>
              <p className='mx-2 flex text-sm my-2'><MdLocationPin className='text-mintGreen m-1'/> 2804 W43rd St</p>
              <p className='mx-8 text-sm'>Minnepolis, MN 55419</p>

              <h1 className='text-xl font-bold text-mintGreen my-3'>Call / Text</h1>
              <p className='my-2 mx-2 flex text-sm'><ImMobile className='text-mintGreen m-1'/> 123-456-7890</p>
          </div>

          <div className='sm:my-4 h-full '>
          
              <div className='md:float-end lg:float-start 
              2xs:mx-4
              sm:mx-4
              md:mx-4 lg:mx-4 lg:px-6'>
              <h1 className='text-xl font-bold text-mintGreen my-2'>Services</h1>
              <ul className='list-disc pl-5 marker:text-mintGreen'>
                <li>Invisalign</li>
                <li>Braces</li>
                <li>Other Treatments</li>
                <li>Patient Resources</li>
              </ul>

              </div>

          </div>

        </div>


        <div className=' border-2 lg:col-span-3 order-1 lg:order-2'>
          <img
            src="https://mintortho.com/wp-content/uploads/2020/09/Welcome-to-Mint-Orthodontics-in-Minneapolis.jpg" 
            className='w-full h-96 lg:h-[500px]'/>
          
        </div>
        
      </div>
    </>
}
