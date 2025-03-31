import React from "react";

const CustomerReview = () => {
  return (
    <div className="relative h-[350px] m-6 mb-0 pb-8 flex items-center justify-center overflow-hidden">
      {/* SVG Background */}
      <div className="absolute inset-0 w-full h-full">
        <svg
          className="w-full h-full"
          viewBox="0 0 1412 615"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 65.2835H264.799C282.57 65.2835 300.31 63.8215 317.84 60.9124L653.58 5.19801C690.259 -0.888568 727.711 -0.616689 764.297 6.00176L1063.39 60.1087C1082.43 63.5517 1101.73 65.2835 1121.07 65.2835H1412V615H0V65.2835Z"
            fill="black"
          />
        </svg>
      </div>

      {/* Image container */}
      <div className="relative flex flex-col items-center justify-center z-10 text-center">
        {/* Heading */}
        <h3 className="self-center text-white text-center mt-10 p-10 font-bold relative" style={{ fontFamily: "Righteous, sans-serif", fontSize: "25px" }}>
          What Customer Says
        </h3>

        {/* Image 1 */}
        <div className="flex items-center justify-around w-full">
          <img
            src="images/review2.png"
            alt="First Review Image"
            className="w-[30%]"
          />

          {/* Image 2 */}
          <img
            src="images/review1.png"
            alt="Second Review Image"
            className="w-[30%]"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
