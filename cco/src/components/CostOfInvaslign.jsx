import React from 'react'

export default function CostOfInvaslign(props) {
  return (
    <div>
      <h1 className='text-3xl text-mintGreen font-bold mx-6'>{props.heading}</h1>
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
    </div>
  )
}
