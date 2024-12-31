import React from 'react'
import MainHeadingWithImage from './MainHeadingWithImage'

export default function OurTechnology() {
  return (
    <div>
    <MainHeadingWithImage 
    images = {<img
      src="images/Free-Consult.jpg" alt="Background" className="absolute inset-0 w-full h-full" />}
    heading = {<p className='text-white text-3xl font-bold text-center absolute bottom-20 
          2xs:left-[25%] 2xs:text-xl
          xs:left-[30%]
          base:left-[35%]
          md:left-[40%] 
          lg:left-[40%]
          xl:left-[45%]'>Our Technology</p>}
    />
    <Items 
    images={<img src="https://mintortho.com/wp-content/uploads/2024/02/iTero-Scanner-1.png"
    className="h-auto w-auto p-5" alt="" />}
    heading = {"iTero Scanner"}
    para1={"Here at Mint Orthodontics, we’ve embraced the future of orthodontics with our iTero Scanner. This cutting-edge device takes quick, comfortable, and accurate 3D digital impressions of your teeth and gums, so no more messy traditional methods!"}
    para2 = {"But it doesn’t stop at taking images. The iTero Scanner is incredibly precise, ensuring your braces or aligners fit perfectly for optimal results. Plus, it has a unique feature — the Invisalign Outcome Simulator. Using the 3D model of your smile, Dr. Sudit can alter the model to show how your teeth will move throughout treatment, with the final result being what your smile could look like after treatment."}
    />

  <Items 
    images={<img src="https://mintortho.com/wp-content/uploads/2024/07/dental-monitoring-inner-img-300x153.png" 
    className="h-auto w-auto p-5" alt="" />}
    heading = {"DentalMonitoring"}
    para1={"We’re excited to give you the confident smile of your dreams with less appointments yet more oversight. With DentalMonitoring, we can provide better treatment with fewer appointments."}
    para2 = {"DentalMonitoring is a simple, at-home scan done with your phone once a week. We can monitor your treatment between in-office visits, enabling you to get the best orthodontic treatment and the best care without interfering with your busy schedule."}
   list1 = {"Instructions for Android"}
   list2 = {"Instructions for iOS"}
   list3 = {"Getting Started Guide"}
   list4 = {"Dos and Don’ts for Scanning"}
   />


    <Items 
    images={<img src="https://mintortho.com/wp-content/uploads/2024/03/retain-cropped-e1710882981236.png" 
    className="h-auto w-auto p-5" alt="" />}
    heading = {"Retain"}
    para1={"Believe it or not, one of the most important stages of treatment is the retention phase, or when retainers are worn. With all the hard work you put in during treatment, we want you to be able to enjoy your new smile for a lifetime and lost or damaged retainers shouldn’t stand in the way of that. That’s why we offer our patients the Retain program, a special service designed to ensure your orthodontic results last."}
    para2 = {"Features of this program include:"}
   list1 = {"Sustained Results — The Retain program helps you maintain the results of your orthodontic treatment. Teeth naturally tend to shift over time, which can undo the work of braces or aligners. With Retain, you can effortlessly keep your teeth in their new, proper positions."}
   list2 = {"Convenient Deliveries — With the Retain program, you don’t have to worry about scheduling appointments to get new retainers. The program delivers fresh, clean aligners right to your doorstep, ensuring you always have a new set when you need it."}
   list3 = {"Parental Peace Of Mind — For those with children or teens who’ve undergone orthodontic treatment, the Retain program offers an extra layer of assurance. Parents can manage their child’s retainer usage from their phone, helping to ensure that retainers are being worn as advised, even when they’re not around."}
   list4 = {"Flexible Plans — The Retain program offers various subscription plans to choose from, allowing you to select the one that best fits your needs and budget."}
   />

<Items 
    images={<img src="https://mintortho.com/wp-content/uploads/2024/03/lightforce-cropped-e1710883020411.png" 
    className=" h-auto w-auto p-5" alt="" />}
    heading = {"LightForce"}
    para1={"With traditional braces, the brackets tend to be mass-produced and require our doctors to place the brackets on each individual tooth, one at a time. This procedure can be quite meticulous and time-consuming for both doctor and patient! However, with LightForce, we use indirect bonding, which means the entire set of brackets is placed on a model of your smile in the exact position Dr. Sudit prescribes. Once the brackets are fitted, they are bonded directly to your teeth, and with this technique, the brackets can often be placed in less than an hour!"}
    para2 = {"Ultimately, LightForce braces offer a custom fit for every patient and are one of the most cutting-edge technologies available in orthodontics. The sophisticated 3D technology allows our team to provide the kind of custom treatment that isn’t available with traditional braces. As mentioned, the brackets are entirely customizable and are designed around each patient’s teeth, which means less discomfort, more effective straightening, and shorter treatment times."}
   
   />
  </div>
  )
}

function Items(props) {
    return <>
    <div className='mx-6'>
    {props.images}
    <h1 className='text-mintGreen 2xs:text-3xl md:text-6xl font-bold'>{props.heading}</h1>
    <p className='py-6 break-words 2xs:text-base md:text-lg'>{props.para1}</p>
    <p className='py-6 break-words 2xs:text-base md:text-lg'>{props.para2}</p>
    <div>
        {(props.list1 || props.list2 || props.list3 || props.list4) && (
            <ul className='list-disc px-5 2xs:text-base md:text-lg'>
                {props.list1 && <li>{props.list1}</li>}
                {props.list2 && <li>{props.list2}</li>}
                {props.list3 && <li>{props.list3}</li>}
                {props.list4 && <li>{props.list4}</li>}
            </ul>
        )}
    </div>
    </div>
    </>
}