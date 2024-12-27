import React, { useState } from 'react'
import { Buttons } from './Buttons'

export default function YourFirstVisit() {

    
  return <>
    
    <div>
        <h1 className='text-gray-500 text-2xl font-bold mx-4 my-2'>Types Of Office Visits</h1>
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
    <div className='lg:h-44'>
        <Buttons/>
    </div>
    </>
  
}

const TypesOfOfficeVisits = (props) => {
    return <>
    <div className='border-l-4 border-mintGreen mx-4 my-4'>
    <h1 className='mx-4 text-2xl font-bold text-mintGreen'>{props.heading}</h1>
    <p className='mx-4 my-2'>{props.para}</p>
    </div>
    </>
}
