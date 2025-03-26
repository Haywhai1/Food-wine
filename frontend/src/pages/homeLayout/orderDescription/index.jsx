import React, { useState, useEffect } from 'react';

const OrderDescription = () => {
  // State to keep track of the currently active div index
  const [activeIndex, setActiveIndex] = useState(0);

  // Array of steps (text for each div)
  const steps = [
    'Select Dish',
    'Confirm Order',
    'Make Payment',
    <>
      Wait for Delivery <br /> (for online order)
    </>,
  ];

  // Update active index every 2 seconds to cycle through the steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % steps.length); // Cycle through divs
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className='flex justify-center pb-8'>
        <div className="flex flex-col w-[80%]">
      <h3 className="text-center text-3xl  p-8" style={{ fontFamily: "Righteous, sans-serif" }}>How to Order</h3>
      <div className="changeColor flex justify-between">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step ${index === activeIndex ? 'active' : ''}`}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default OrderDescription;
