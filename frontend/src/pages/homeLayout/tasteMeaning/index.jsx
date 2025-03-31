import React, { useState, useEffect } from 'react';

const TasteMeaning = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0); // State to track which background to display
  const backgrounds = [
    '/images/changingimg2.png', // Replace with your first background image path
    '/images/changingimg.png'  // Replace with your second background image path
  ];

  // Switch background every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length); // Toggle between the two backgrounds
    }, 2000); // Change every 5 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className='flex m-6'>
      <div className='w-[50%]'>
        <h4 className="font-semibold " style={{fontSize:"34px"}}>
          Discover The True Meaning <br /> of Taste
        </h4>
        <p className=' mb-5'>
          Mixing Traditions, Creating Tastes and flavors without borders. <br />Immerse yourself in the ultimate cocktail experience. <br /> Our expert mixologists are dedicated to crafting bold,<br /> innovative drinks that blend traditional flavors with <br /> modern twists, using only the freshest ingredients <br /> and cutting-edge techniques
        </p>
        <button className=" btn btn-linear-gradient px-2 py-1 text-white bg-black rounded-md shadow-sm ">
          BOOK A TABLE
        </button>
      </div>

      <div
        className='flex-1  rounded-md '
        style={{
          backgroundImage: `url(${backgrounds[backgroundIndex]})`, // Set the background image dynamically
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '350px',
          transition: 'background-image 1s ease-in-out', // Smooth transition between background images
        }}
      ></div>
    </div>
  );
};

export default TasteMeaning;
