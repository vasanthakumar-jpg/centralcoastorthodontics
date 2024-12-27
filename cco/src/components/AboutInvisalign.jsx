import React from 'react'

export default function AboutInvisalign() {
  return <>
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
<CostOfInvaslign/>

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


const CostOfInvaslign = () => {
    return <>
    <h1 className='text-3xl text-mintGreen font-bold mx-6'>Cost Of Invaslign</h1>
    <div className='2xs:flex 2xs:flex-col 2xs:gap-6 2xs:mx-4 2xs:justify-center 2xs:items-center 2xs:my-5
  xs:flex-col xs:gap-6 xs:my-5 xs:mx-2
  base:flex-col base:gap-6 base:mx-4 base:justify-center base:items-center base:my-5
  sm:flex-col sm:gap-6 sm:mx-4 sm:justify-center sm:items-center sm:my-5
  md:flex-col md:gap-6 md:mx-4 md:justify-center md:items-center md:my-5
   lg:flex-row lg:gap-0'>
  
  <div className="container border border-grey-300 ">
  <h2 className="text-center text-2xl font-bold text-white bg-gray-500 py-2 border-b border-grey-300">Minor</h2>
  <h2 className="text-center text-2xl font-bold text-mintGreen py-2 border-b border-grey-300">$3,975 - 4,995</h2>

  <div className='py-2'>
				<div>
				  <div className=' mx-2'>
					<p className="text-center my-2">
                    <strong>Fix a tooth or two or<br/>get a smile “touch-up!”</strong>
                    </p>
                    <p className="text-center my-2"><em>Treatment Time | 3-4 Months</em></p>
                    <p className="text-center my-2"><b>Includes:</b></p>						
                  </div>
				</div>
        
				<div className='pb-8'>
				  <div >
					<ul className="list-unstyled flex flex-col gap-2 justify-center items-center">
						<li>
							<span>Up to 10 Invisalign® Clear Aligners</span>
						</li>
                        <li>
                            <span>Smile Evaluation</span>
                        </li>
                        <li>
							<span>3D Simulation</span>
						</li>
                        <li>
                            <span>Only 2-3 Appointments</span>
                        </li>
                        <li>
							<span>Teeth Whitening</span>
						</li>
                        <li>
                            <span>Set Of Retainers</span>
                        </li>
                        <li>
                            <span>Custom, Expert Care</span>
                        </li>
						</ul>
				  </div>
				</div>
      </div>
	</div>

  <div className="container border border-grey-300 ">
  <h2 className="text-center text-2xl font-bold text-white bg-mintGreen py-2 border-b border-grey-300">Cosmetic</h2>
  <h2 className="text-center text-2xl font-bold text-mintGreen py-2 border-b border-grey-300">$5,250 - 5,780</h2>

  <div className='py-2'>
				<div>
				  <div className=' mx-2'>
					<p className="text-center my-2">
                    <strong>Up your selfie game<br/>with straight front teeth!</strong>
                    </p>
                    <p className="text-center my-2"><em>Treatment Time | 6-8 Months</em></p>
                    <p className="text-center my-2"><b>Includes:</b></p>						
                  </div>
				</div>
        
				<div>
				  <div>
					<ul className="list-unstyled flex flex-col gap-2 justify-center items-center">
                        <li>
                            <span >30+ Invisalign® Clear Aligners</span>
                        </li>
                        <li>
                            <span >Smile Evaluation</span>
                        </li>
                        <li>
                            <span >3D Simulation</span>
                        </li>
                        <li>
                            <span >Usually Less Than 3 Appointments</span>
                        </li>
                        <li>
                            <span >Only 2-3 Appointments</span>
                        </li>
                        <li>
                            <span >Teeth Whitening</span>
                        </li>
                        <li>
                            <span >Set Of Retainers</span>
                        </li>
                        <li>
                            <span >Custom, Expert Care</span>
                        </li>
					</ul>
				  </div>
				</div>
      </div>
	</div>

  <div className="container border border-grey-300 ">
  <h2 className="text-center text-2xl font-bold text-white bg-gray-500 py-2 border-b border-grey-300">Complete</h2>
  <h2 className="text-center text-2xl font-bold text-mintGreen py-2 border-b border-grey-300">$6,355 - 9,095</h2>

  <div className='py-2'>
				<div>
				  <div className=' mx-2'>
                    <p className="text-center my-2">
                    <strong>Move all your teeth to an ideal<br/>position or fix your bite!</strong>
                    </p>
                    <p className="text-center my-2"><em>Treatment Time | Depends on Plan</em></p>
                    <p className="text-center my-2"><b>Includes:</b></p>						
                  </div>
				</div>
        
				<div className=' lg:pb-2 xl:pb-8'>
				  <div>
					<ul className="list-unstyled flex flex-col gap-2 justify-center items-center">
                    <li>
                            <span>Unlimited Invisalign® Clear Aligners</span>
                        </li>
                        <li>
                            <span>Smile Evaluation</span>
                        </li>
                        <li>
                            <span>3D Simulation</span>
                        </li>
                        <li>
                            <span>Weekly Virtual Monitoring With Dental Monitoring Scan Box</span>
                        </li>
                        <li>
                            <span>Teeth Whitening</span>
                        </li>
                        <li>
                            <span>Set Of Retainers</span>
                        </li>
                        <li>
                            <span>Custom, Expert Care</span>
                        </li>
						</ul>
				  </div>
				</div>
      </div>
	</div>

  </div>
    </>
}