import React from 'react'
import CostOfInvaslign from './CostOfInvaslign'
import MainHeadingWithImage from './MainHeadingWithImage'


export default function AboutInvisalign() {
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
        '>Invisalign in Minneapolis</p>}
      heading2 = {<p className='text-white md:text-3xl font-bold text-center absolute 
        md:bottom-10
        bottom-14

        2xs:left-[15%] 2xs:text-lg
          xs:left-[30%]
          base:left:[35%]
          md:left-[30%] 
          lg:left-[30%]
          xl:left-[40%]
        '>For Kids, Teens & Adults</p>}
      />
    <div className='mx-6'>
      <h1 className='text-mintGreen text-3xl font-bold my-4'>About Invisalign</h1>
      <p className=' my-4'>Invisalign uses a series of invisible, removable, and comfortable aligners that no one can tell you’re wearing. You can smile more during treatment and after. Invisalign is made with 3D computer imaging technology and has been proven as effective as traditional metal dental braces.</p>
      <p>Not only are the aligners virtually invisible, they are easily removable, so you can eat and drink what you want and brush or floss as needed. They are also comfortable, with no irritating metal used during treatment.</p>
    
    <h1 className='text-gray-500 text-3xl font-bold my-4'>Your Time Is Valuable</h1>
    <p className='my-4'>The overall length of treatment depends on the severity of any issues needing correction, but we generally find it only takes a few months to see dramatic improvement!</p>
    <p>Using a simple technology called Dental Monitoring throughout treatment, you can minimize the number of visits to our office! It just takes a quick scan with your smartphone at home for us to virtually see how your teeth are progressing and schedule appointments only if necessary!</p>
    </div>
    <InvisalignKids 
    Invisalign={"Invisalign For Kids"}
    image = {<img src="https://mintortho.com/wp-content/uploads/2024/03/Invisalign-For-Kids-High.jpg" 
        className='md:w-3/4 w-full my-4'
         alt="" />}
         para1={
            "Many kids want Invisalign, but parents, understandably, tend to be leery thinking kids will lose the removable aligners. At Mint Orthodontics, we know every kid is different and we want treatment to go smoothly for everyone."}
         subHeading = {"Early Treatment"}
         para2 = {"Invisalign aligners are designed with the specific needs of growing smiles in mind. Customized for children between 6-10 years old, Invisalign First aligners are made to fit smaller teeth and address a wide range of issues. Unlike traditional braces, Invisalign aligners are completely removable, clear, and comfortable, making them an excellent choice for kids who are conscious about their appearance or participate in activities like sports or playing musical instruments."}
/>    
    <InvisalignKids 
    Invisalign={"Invisalign For Teens"}
    image = {<img src="https://mintortho.com/wp-content/uploads/2024/03/Invisalign-For-Teens.jpg" 
        className='md:w-3/4 w-full my-4'
         alt="" />}
         para1={"At Mint Orthodontics, we understand the unique challenges and needs that teenagers face when it comes to orthodontic treatment. That’s why we’re proud to offer Invisalign Teen, an innovative solution designed specifically with your teenager’s lifestyle in mind."}
         subHeading = {"A Unique Option For Teens"}
         para2 = {"You’ve probably heard from friends that with braces you won’t be able to eat anything. With Invisalign Teen you can eat whatever you want."}
    />    
    <InvisalignKids 
    Invisalign={"Invisalign For Adults"}
    image = {<img src="https://mintortho.com/wp-content/uploads/2024/03/Invisalign-For-Adults.jpg"
        className='md:w-3/4 w-full my-4'
         alt="" />}
         para1={"Many kids want Invisalign, but parents, understandably, tend to be leery thinking kids will lose the removable aligners. At Mint Orthodontics, we know every kid is different and we want treatment to go smoothly for everyone. We will ask your child a series of questions at the consultation that will help us indicate if aligners are right for them. So far our screening process has shown to be quite successful."}
         subHeading = {"From Touch-Ups to Full Smile Redesigns"}
         para2 = {"Whether you’re preparing for a big life event or simply want to boost your everyday confidence, Invisalign can help. This versatile treatment is not only effective for minor smile touch-ups before a wedding or reunion but is also capable of handling more comprehensive smile redesigns."}
/>
<CostOfInvaslign heading={"Cost Of Invaslign"}/>


    </>
}

const InvisalignKids = (props) => {
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


