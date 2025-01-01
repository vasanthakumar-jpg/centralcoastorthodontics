import React from 'react'
import MainHeadingWithImage from './MainHeadingWithImage'
import { FaStar } from 'react-icons/fa'

export default function PatientReviews() {
  return <>
    <div id='PatientResources'>
      <MainHeadingWithImage 
          images = {<img
            src="images/Free-Consult.jpg" alt="Background" className="absolute inset-0 w-full h-full" />}
          heading = {<p className='text-white text-3xl font-bold text-center absolute bottom-20 
            2xs:left-[15%]
          xs:left-[30%]
          base:left-[35%]
          md:left-[40%] 
          lg:left-[40%]
          xl:left-[45%]
            '>Patient Reviews</p>}
          />
          <div className='mx-2'>
            <p className='p-4'>Check out what our patients are saying about their 5-star experience with our amazing team!</p>
            <Reviews 
            name = {"Kristin G."}
            month = {"a month ago"}
            para = {"Incredibly friendly, welcoming and knowledgeable! I’m not a current patient but needed a broken retainer fixed and it felt like they’d been seeing me for years. Techniques and insights were also a level up from my previous experiences elsewhere. The Linden Hills office is bright, new, and incredibly relaxing - I especially appreciate the “adult” wing of the office as they really offer individual treatments based on severity as well as age/structural development. Will absolutely be back if I need services again and 10/10 would recommend to anyone. Lilian and the rest of the team are fantastic and turned a crummy issue into a pleasant experience!"}
            />
            <Reviews 
            name = {"Julia M."}
            month = {"3 months ago"}
            para = {"I found this orthodontists office because my permanent retainer had gotten loose and I needed to get a repair. They were able to get me in the same day. The repair was free which was so nice and unexpected. The technician that fixed my retainer did a great job. Highly recommend !"}
            /> 
            <Reviews 
            name = {"Adam M."}
            month = {"3 months ago"}
            para = {"I love your website! It is so easy to navigate! Just a heads up, I'll probably copy some of it. Thanks!"}
            /> 
            <Reviews 
            name = {"Mark"}
            month = {"3 months ago"}
            para = {"I had an excellent experience at Mint. They corrected the alignment of teeth and significantly improved grinding that I’d been experiencing for years."}
            /> 
            <Reviews 
            name = {"Joshua N."}
            month = {"3 months ago"}
            para = {"Came here to get my permanent retainer fixed. Everyone was so kind, courteous, and helpful. They listened to my concerns and adjusted my retainer until it felt comfortable for me. To top it off, it was free of charge! I’d highly recommend you give them a call if you got any orthodontic trouble. Thank you!"}
            />  
            <Reviews 
            name = {"Halie B."}
            month = {"4 months ago"}
            para = {"I have never been to an orthodontist that was like a spa before. This was by far the most peaceful dental experience I’ve ever had. I went in looking for an easy solution, and Amy (my orthodontist) talked me through my options and figured out what I was really looking for and helped me get a better solution for my teeth. She was very thorough and diligent in getting everything right and comfortable, and everyone was so nice and friendly. While it would be nice to not have more issues with my retainer, I hope if I do, it’s while I still have access to Mint."}
            />
            <Reviews 
            name = {"Mark F."}
            month = {"4 months ago"}
            para = {"Always thought of orthodontists as being for 'young people' so at 65 years old I was somewhat hesitant to take my dentist's recommendation to see an ortho about my teeth alignment and bite. I finally went, though, and I have to tell you I could not have been more pleasantly surprised by the Mint office. Everyone extremely professional and thorough in their work. Dr. Sudit analyzed my condition and prescribed the necessary Invisalign treatment. Could not be more satisfied. Is 6 stars possible??"}
            />
            <Reviews 
            name = {"Connor D."}
            month = {"4 months ago"}
            para = {"I had my permanent retainer break and they were able to get me in within a couple hours of me calling. Super great experience start to finish. Everyone was super friendly and seemed happy to be there. They had me patched up and out the door within 20 minutes. Only thing I could complain about would be that parking was difficult as there was construction on the main road, obviously that isn't their fault. Highly recommend to anyone looking for orthodontics in the twin cities."}
            />
            <Reviews 
            name = {"Abbi P."}
            month = {"5 months ago"}
            para = {"I had THE BEST experience at Mint Orthodontics. I just moved to the Cities and was at the very end of my InvisAlign treatment. I needed an ortho practice to remove my attachments and scan for retainers. From my very first call, the team was attentive, helpful, proactive, supportive, and friendly. My appointment was today, and I couldn’t be more pleased! Amy was the professional who provided my treatment. She was gentle, knowledgeable, and fun! We got a huge laugh out of powder that landed on the tip of my nose. Dr. Sudit was warm and kind. He provided me with referrals for dentists in the area and a connection to an on-demand retainer provider. They even gave me a whitener treatment to take home. I really wish I could have done my whole treatment with Mint. ⭐️⭐️⭐️⭐️⭐️One more thing—I arrived early for my 8 am treatment and overheard the office huddle from around the corner. Dr. Sudit honored retiring dentists in the neighborhood and prepped the team for a great day. From what I can tell, he’s a great leader!!"}
            />
            <Reviews 
            name = {"Ashley W."}
            month = {"5 months ago"}
            para = {"The Mint Team was amazing! Traveling from out of town called with an emergency and they were able to get us in same day. Can not say enough about how positive our experience was. Definitely would be our orthodontist if we lived in the area. 5 stars all day!!"}
            />

          </div>
    </div>

<div className='flex justify-center items-center'>
<a href="#Location" 
className=' my-4 px-2 py-2 bg-white text-mintGreen border-2 border-mintGreen '>Location</a>
</div>
  </>
}


const Reviews = (props) => {
    return <>
    <div className='border border-gray-200 m-4 px-4'>
        <div className='flex justify-between'>
        <h1 className='font-bold text-gray-700 text-lg'>{props.name}</h1> 
        <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png
        " className='h-6 w-6 ' alt="" />
        </div>
        <div className='flex gap-1 py-1'>
        <FaStar className='text-sm text-yellowStar'/>
        <FaStar className='text-sm text-yellowStar'/>
        <FaStar className='text-sm text-yellowStar'/>
        <FaStar className='text-sm text-yellowStar'/>
        <FaStar className='text-sm text-yellowStar'/>
        </div>
        <p className='text-sm text-gray-500'>{props.month}</p>
        <p className='2xs:text-sm md:text-base py-3 text-gray-500'>{props.para}</p>
    </div>
    </>
}