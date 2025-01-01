import React from 'react'
import { ImMobile } from 'react-icons/im'
import { MdLocationPin } from 'react-icons/md'
import MainHeadingWithImage from './MainHeadingWithImage'

export default function Location() {
  return <>
  <div id='Location'>
<MainHeadingWithImage
      images = {<img
        src="images/Free-Consult.jpg" alt="Background" className="absolute inset-0 w-full h-full" />}
      heading = {<p className='text-white text-4xl font-bold text-center absolute 
        bottom-24 
        md:bottom-32

      2xs:left-[25%] 2xs:text-xl
          xs:left-[30%]
          base:left-[35%]
          md:left-[35%] 
          lg:left-[40%]
          xl:left-[45%]
      '>
       Orthodontics In </p>}
       heading2 = {<p className='text-white text-4xl font-bold text-center absolute 
        bottom-20
        md:bottom-24
                2xs:left-[25%] 2xs:text-xl
            xs:left-[30%]
            base:left-[35%]
            md:left-[35%] 
            lg:left-[40%]
            xl:left-[45%]
        '>
         Minneapolis,MN In </p>}
         heading3 = {<p className='text-white text-4xl font-bold text-center absolute 
          2xs:bottom-16 
        2xs:left-[15%] 2xs:text-xl
            xs:left-[30%]
            base:left-[35%]
            sm:left-[35%]
            md:left-[35%] 
            lg:left-[40%]
            xl:left-[45%]
        '>We Straightten Teeth Wel.</p>
         }
      />
    <div className='my-2 mx-4 '>
      <h1 className='text-center text-2xl font-bold'>Come Visit Us</h1>
      <p className='text-center mx-4 break-words'>We proudly serve patients of all ages from Minneapolis, MN, and the surrounding areas, so request your free consultation with Dr. Sudit today!</p>
    
      <div className='flex flex-row justify-center 
      2xs:flex-col 2xs:justify-center
      xs:flex-col xs:justify-center
      base:flex-col base:justify-center
      sm:flex-col sm:justify-center
      md:flex-row
      lg:flex-row lg:items-center 
      my-6 gap-4'>
        <div className='flex justify-center 
         '>
        <button className='bg-mintGreen text-white font-bold py-2 px-4 border-2 border-white
        hover:bg-white hover:text-mintGreen hover:border-mintGreen'>SCHEDULE FREE CONSULT</button>
        </div>
        <div className='flex justify-center '>
        <button className='bg-yellowStar text-base text-white font-bold py-2
        2xs:px-16
        md:text-center md:px-6
         border-2 border-white
        hover:bg-white hover:text-yellowStar hover:border-yellowStar'>CONTACT US</button>
        </div>
        <div className='flex justify-center'>
        <button className='bg-mintGreen text-white font-bold 
        2xs:px-12
        xs:px-14
        base:px-12
        sm:px-12
        py-2 px-4 border-2 border-white
        hover:bg-white hover:text-mintGreen hover:border-mintGreen 
        
        '>
          WRITE A REVIEW</button>
        </div>
      </div>
      
    </div>
    <Map/>
    
  </div>

    </>
}

const Map = () => {
  return <>
  <div className=''>
      <div className='lg:grid lg:grid-cols-5 lg:grid-flow-dense lg:mx-6 '>
        <div className='2xs:mx-6 sm:mx-6 md:mx-6 lg:mx-0 lg:col-span-3 order-1 lg:order-2'>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2824.8876111917824!2d-93.31496692346277!3d44.92523437107325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f6a54b75c4c421%3A0x13f0c3243d952dc9!2s2804%20W%2043rd%20St%2C%20Minneapolis%2C%20MN%2055410!5e0!3m2!1sen!2sus!4v1699482437573!5m2!1sen!2sus"
            className='w-full h-96 lg:h-[500px]'
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </div>

        <div className="h-full grid md:grid-cols-2 sm:grid-cols-1 
            lg:grid-cols-1 lg:col-span-2 lg:w-[100%] 
              order-2 lg:order-1 bg-gray-200 mx-6">
        
          <div className="2xs:mx-4
              sm:mx-4 
              md:mx-6 my-4 lg:px-6">  
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
              <h1 className='text-xl font-bold text-mintGreen my-2'>Contact Hours</h1>
              <table>
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
              </table>

              </div>

          </div>

        </div>
        
      </div>
    </div>
  </>
}