import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between mb-10"> {/* Use flex-col-reverse for stacking on small screens */}
      {/* First Child (Image) */}
      <div className="flex items-center pl-6 gap-10">
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

      {/* Second Child (Text and Button) */}
      <div className="flex flex-col justify-center mr-10 mt-6 md:mt-0"> {/* Stack the text and button on smaller screens with mt-6, remove margin top on medium screens */}
        <p>
          At food and wine we believe the best dishes are the ones <br/> 
          that remind you of childhood. A portion of great food should <br/> 
          make you feel like you are wrapped in a warm blanket. At our <br/> 
          location in Wuse or online, you will find the best dishes you didn't <br/> 
          know you craved.
        </p>
        <button className="btn-linear-gradient mt-2 px-1 py-1 text-white bg-black rounded-md shadow-sm self-start">
          View More
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
