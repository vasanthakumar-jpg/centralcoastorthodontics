import React from 'react'
import { ImMobile } from 'react-icons/im'
import { MdLocationPin } from 'react-icons/md'

export default function ComeVisitUs() {
  return <>
  {/* Come Visit Us */}
    <div className='lg:flex md:flex-col lg:flex-row'>
      <div className='md:w-full '>
        <h1 className='text-zinc-800 text-2xl lg:text-5xl my-5 font-bold mx-6'>Come Visit Us</h1>
      </div>
      <div className='lg:w-full mx-2'>
        <p className='text-sm my-5  2xs:mx-4 break-words '>Have more questions? We would love to give you a tour of <span className='text-orangetext break-all'>our practice</span>! After all, it’s designed with you in mind to be as un-doctor’s-office-like as possible.
        </p>
      </div>
    </div>
  {/* Come Visit Us */}
  

<div className="w-full grid lg:grid-cols-2 lg:grid-rows-1 xl:grid-cols-3 2xl:grid-cols-3">
  {/* First Div */}
    {/* <div className="bg-green-600 "> */}

        <div className=" h-full grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-1">
        
        <div className=' 
            2xs:mx-4
            sm:mx-2
            md:mx-6 my-4'>  
            <h2 className="text-xl font-bold text-orangetext my-4">Address</h2>
            <h2 className='text-extrabold text-lg text-slate-700'>Minnepolis</h2>
            <p className='mx-2 flex text-sm my-2'><MdLocationPin className='text-orangetext m-1'/> 2804 W43rd St</p>
            <p className='mx-8 text-sm'>Minnepolis, MN 55419</p>

            <h1 className='text-xl font-bold text-orangetext my-3'>Call / Text</h1>
            <p className='my-2 mx-2 flex text-sm'><ImMobile className='text-orangetext m-1'/> 123-456-7890</p>
        </div>

        <div className='sm:my-4 h-full '>
       
        <div className='md:float-end lg:float-start 
            2xs:mx-4
            sm:mx-2
            md:mx-4 lg:mx-4'>
            <h1 className='text-xl font-bold text-orangetext my-2'>Contact Hours</h1>
            <tbody> 
                <tr> 
                    <td className='py-1 text-sm'>Monday</td> 
                    <td className='px-1 text-sm'>8:00am – 5:00pm</td>
                 </tr> 
                 <tr> 
                    <td className='py-1 text-sm'>Tuesday</td> 
                    <td className='px-1 text-sm'>8:00am – 5:00pm</td> 
                 </tr> 
                 <tr> 
                    <td className='py-1 text-sm'>Wednesday</td> 
                    <td className='px-1 text-sm'>8:00am – 5:00pm</td> 
                 </tr> 
                 <tr> 
                    <td className='py-1 text-sm'>Thursday</td> 
                    <td className='px-1 text-sm'>8:00am – 5:00pm</td> 
                </tr> 
                <tr> 
                    <td className='py-1 text-sm'>Friday</td> 
                    <td className='px-1 text-sm'>8:00am – 1:00pm</td> 
                </tr>
            </tbody>

            </div>

        </div>
        </div>
       
    {/* </div> */}

  {/* Second Div - Hidden below lg breakpoint */}
    <div className="hidden lg:block lg:w-full">
       
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2824.8876111917824!2d-93.31496692346277!3d44.92523437107325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f6a54b75c4c421%3A0x13f0c3243d952dc9!2s2804%20W%2043rd%20St%2C%20Minneapolis%2C%20MN%2055410!5e0!3m2!1sen!2sus!4v1699482437573!5m2!1sen!2sus"
          className='w-full h-full'
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>

  {/* Third Div */}
    <div className=" lg:col-span-2 w-full xl:block  xl:col-span-1">
        {/* <div className=" h-full ">
        <img src="/images/office.jpeg"
         alt="Contact Image" className="w-full h-full object-cover" />
        </div> */}

      <div className='h-full w-full'>
            <img src="images/Footer-Location.jpg" className='md:h-full w-90% h-auto 2xs:float-end' alt="Free Consult" />	
        </div>
    </div>

</div>
  </>
}
