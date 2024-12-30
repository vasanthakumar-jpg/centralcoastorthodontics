import React, { useState } from 'react'
import { Buttons } from './Buttons'
import MainHeadingWithImage from './MainHeadingWithImage'

export default function YourFirstVisit() {

    
  return <>
    
      <MainHeadingWithImage 
      images = {<img
        src="images/Free-Consult.jpg" alt="Background" className="absolute inset-0 w-full h-full" />}
      heading = {<p className='text-white text-4xl font-bold text-center absolute bottom-20 
      2xs:left-[25%] 2xs:text-xl
          xs:left-[30%]
          base:left-[35%]
          md:left-[40%] 
          lg:left-[40%]
          xl:left-[45%]
      '>
       Patient Resources</p>}
      />

    <div>
      <div>
        <h1 className='text-mintGreen text-2xl font-bold mx-6 my-2'>Your First Visit</h1>
        <p className='mx-6'>There are so many reasons to come say hello. Check out the standard types of office appointments below. And if you don’t see what you’re looking for, just give us a call and we’ll figure out something that works for both of us.</p>
      </div>
        <h1 className='text-gray-500 text-2xl font-bold mx-6 my-2'>Types Of Office Visits</h1>
        <div className='lg:grid lg:grid-cols-3 lg:w-full'>
        <TypesOfOfficeVisits 
        heading= {"Free Virtual Consults"}
        para={"A convenient, digital face-to-face with Dr. Sudit to discuss your orthodontic needs, access treatment options, and price range."}
        />
        <TypesOfOfficeVisits 
        heading ={"Free In-Person Consults"}
        para={"A meeting with Dr. Sudit and the team to access your orthodontic needs using digital teeth scans, photos, x-rays, and conversation. Pricing, payment options, and insurance are also sorted."} 
        />
        <TypesOfOfficeVisits 
        heading={"Free Second-Opinion Appointments"} 
        para = {"A discussion with Dr. Sudit (in-person or virtual) to review alternative treatment options and payment plans that might be more suitable to your needs."}/>
        <TypesOfOfficeVisits 
        heading={"Treatment Appointments"} 
        para = {"Virtual or in-person visits to monitor progress and make necessary adjustments customized to each patient and their needs."}/>
        <TypesOfOfficeVisits 
        heading={"At-Work Appointments"} 
        para = {"A customized experience for businesses where Mint Orthodontics travels to your place of work to treat multiple employees during a single period of time which alleviates work-schedule burdens and is a benefit to the employees."}/>
        <TypesOfOfficeVisits 
        heading={"Teeth Whitening Requests"} 
        para = {"A 15-minute appointment for your teeth to be digitally scanned for whitening trays which are delivered to you a week later along with customized tooth whitening gel. Teeth whitening is included with all Invisalign appointments."}/>
        </div>
    </div>   
    <PaymentPlanning/>
    <div className='lg:h-44'>
        <Buttons/>
    </div>
    </>
  
}

const TypesOfOfficeVisits = (props) => {
    return <>
    <div className='border-l-4 border-mintGreen mx-6 my-4'>
    <h1 className='mx-6 text-2xl font-bold text-mintGreen'>{props.heading}</h1>
    <p className='mx-6 my-2'>{props.para}</p>
    </div>
    </>
}

const PaymentPlanning = () => {
    return <>
    <div className='mx-6 my-2'>
      <img src="https://mintortho.kinsta.cloud/wp-content/uploads/2024/03/opt-Financial-Info-1024x683.jpg"
      className='md:w-[550px] py-2' alt="" />
    
      <h1 className=' text-2xl font-bold text-mintGreen'>Payment Planning</h1>
      <p>The cost of orthodontics depends on your particular needs and treatment decisions. But there are a few things you can always count on with Mint Orthodontics.</p>
      <ul className='mx-6 py-2 list-disc'>
        <li>Convenient, affordable payment options</li>
        <li>Most insurances are accepted</li>
        <li>Flex Spending Accounts (FSA) & Health Savings Account (HSA) funds can be used</li>
        <li>Complete transparency about fees</li>
        <li>No hidden costs, ever</li>
        <li>Paid-in-full treatment discounts</li>
        <li>Credit, debit, checks, and cash accepted</li>
      </ul>

      <h1 className=' text-2xl font-bold text-mintGreen py-2'>Dental Insurance</h1>
      <p>We handle the insurance headaches for you. With a little information from you, we can help determine how much orthodontic insurance coverage you have available and we will file all the necessary paperwork during your treatment.</p>
    
    <img src="https://mintortho.kinsta.cloud/wp-content/uploads/2024/03/Treatment-By-Life-Stage-e1710882898706-1024x683.jpg" 
    className='md:w-[550px] py-2' alt="" />
    <h1 className=' text-2xl font-bold text-mintGreen py-2'>Treatment By Life Stage</h1>
      <p>No matter what stage you are at in your life everyone deserves a beautiful and healthy smile. We offer specific treatment options for all ages tailored to your needs.</p>
    </div>

    </>
}