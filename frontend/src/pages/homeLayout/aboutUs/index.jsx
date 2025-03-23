import React from 'react'

const AboutUs = () => {
  return (
<div className="flex justify-between mb-6">
  <div className='flex items-center pl-20 gap-10'>
    <img 
      src="/images/abouUs.png" 
      alt="About Us" 
      className="w-56 h-auto object-cover" // Limit the width of the image
    />
    <h3 className="self-center text-center font-bold relative" style={{ fontFamily: "Righteous, sans-serif" }}>
      About Us
      <span className="absolute bottom-[-3px] left-1/2 transform -translate-x-1/2 w-48 h-1.5 bg-black"></span>
    </h3>

  </div>
  
  <div className="flex flex-col justify-center mr-20">
    <p>At food and wine we believe the best dishes are the ones <br/> that remind you of childhood. Aportion of great food should <br/> make you feel like you are wrapped in a warm blanket. At our <br/> Location in Wuse or online, you will find the best dishes you didn't <br/> know you craved.</p>
    <button className=" btn-linear-gradient mt-2 px-4 py-1 text-white bg-black rounded-md shadow-sm self-start">
      View More
    </button>
  </div>
</div>

    
  )
}

export default AboutUs