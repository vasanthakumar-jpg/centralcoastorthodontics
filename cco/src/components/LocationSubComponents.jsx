import React from 'react'

export default function LocationSubComponents() {
  return <>
    <div className='lg:grid grid-col-1 xl:grid-cols-2 p-5'>
      <div className=' mx-4 my-6'>
        <h1 className='text-2xl font-bold text-mintGreen'>Minneapolis Orthodontist</h1>
        <p className='break-words my-2'>Welcome to Mint Orthodontics, your premier choice for an orthodontist in Minneapolis, MN. Our team, led by Dr. Sudit, is dedicated to providing top-tier orthodontic services to help you achieve the smile you’ve always wanted.</p>
        <p className='break-words my-2'>We offer a wide array of treatments tailored to fit your unique needs. From LightForce braces to Invisalign for all ages, we provide comprehensive care to our patients. We even cater to specific life stages, from kids and teens to adults and retirees.</p>
        <p className='break-words my-2'>What truly distinguishes us is our commitment to patient comfort and convenience. We provide flexible payment plans and virtual consultations, making your orthodontic journey seamless and stress-free. At Mint Orthodontics, we’re not just straightening teeth well — we’re crafting smiles that last a lifetime.</p>
      </div>
      <div className=' my-4'>
        <img 
        src="https://mintortho.com/wp-content/uploads/2020/09/Minneapolis-Orthodontist.jpg" 
        className='lg:h-auto w-auto px-2 '
         alt="" />
      </div>
    </div>
    <TopRatedMinneapoils/>
    <OrthodonticServicesOffers/>
  </>
}

const TopRatedMinneapoils = () => {
    return <>
    <div className='bg-[#D5DADA] px-4 py-6'>
    <div className='mx-4 '>
        <h1 className='text-4xl font-bold py-4 '>Top-Rated Minneapolis Orthodontics Office</h1>
        <p className='py-2'>Mint Orthodontics is a top-rated orthodontics office in Minneapolis, thanks to our unwavering dedication to excellence. Patients consistently praise our high-quality service, welcoming atmosphere, and innovative use of technology.</p>
        <p className='py-2'>Our state-of-the-art equipment ensures precise and efficient treatments. But it’s not just about the technology — it’s about how we make you feel. Our office is designed to be a safe, inviting, and fun space, turning a clinical experience into something enjoyable. We never want you to feel like you’re in a typical doctors office!</p>
        <p className='py-2'>Mint Orthodontics is a top-rated orthodontics office in Minneapolis, thanks to our unwavering dedication to excellence. Patients consistently praise our high-quality service, welcoming atmosphere, and innovative use of technology.</p>
    </div>
    </div>
    </>
}

const OrthodonticServicesOffers = () => {
    return <>
    <div className='bg-zinc-950'>
    <div className=' mx-6 '>
      
      <div className='p-2'>
        <img src="https://mintortho.kinsta.cloud/wp-content/uploads/2020/09/Orthodontist-in-Minneapolis.jpg"
        className=' w-full my-4'
        alt="Orthodontist in Minneapolis" />
      </div>

      <div className='mx-4 my-6'>
        <h1 className='text-2xl font-bold text-white py-4'>Orthodontic Services We Offer</h1>
        <p className='break-words text-white '>Welcome to Mint Orthodontics, your trusted orthodontist in Minneapolis, MN. Our team, led by Dr. Sudit, is dedicated to transforming smiles through a wide range of orthodontic services. Our approach to orthodontics goes beyond merely straightening teeth. We aim to create a harmonious balance between functionality and aesthetics, crafting a beautiful smile that complements your unique facial features.</p>
        <p className='break-words text-white pt-4 pb-10'>We pride ourselves on offering personalized treatment plans that cater to the specific needs and preferences of each patient. Our team understands that every smile is unique, and we work diligently to ensure that our treatments reflect this understanding.</p>
      </div>
      
    </div>
    </div>
    </>
}

