import EmailUs from "../../email";
import AboutUs from "../aboutUs";

const FoodAndWine = () => {
  return (
    <>
      <nav className="flex justify-between items-stretch mb-12">
        {/* Left Content (Increased Width) */}
        <div className="flex flex-col justify-center flex-grow pl-20 max-w-[75%]">
          <div className="flex justify-between items-center ">
            <h1
              className="text-4xl mt-4 font-black text-black"
              style={{ fontFamily: "MuseoModerno, sans-serif" }}
            >
              FOOD & <span className="text-[#ff8f08]">WINE</span>
            </h1>

            <ul
              className="flex gap-10 text-lg mt-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <li>
                <a href="">HOME</a>
              </li>
              <li>
                <a href="">MENU</a>
              </li>
              <li>
                <a href="">LOGIN</a>
              </li>
              <li>
                <a href="">SIGN UP</a>
              </li>
            </ul>
          </div>
          <div className="mt-20 leading-none">
            <span className="italic" style={{ fontFamily: "Radley, sans-serif" }}>
              ...your favorite
            </span>
            <h1 className="text-4xl font-bold" style={{ fontFamily: "Righteous, sans-serif" }}>
              Cuisine
            </h1>
            <p className="leading-tight">
              It's time to enjoy the finer things in life. <br /> A genuine fine dining experience
              awaits. <br /> Come for a drink, stay for a meal. Great food and great company.
            </p>
            <div className="flex gap-4 mt-4">
              <button className="btn-linear-gradient2 px-4 py-2 text-white bg-[#ff8f08] rounded-md shadow-sm">
                ORDER FOOD
              </button>
              <button className="btn-linear-gradient px-4 py-2 text-white bg-black rounded-md shadow-sm ">
                ORDER DRINKS
              </button>
            </div>
          </div>
        </div>

        {/* Image Container */}
        <div className="w-56 md:w-64 lg:w-48 xl:w-80 flex items-stretch">
          <img
            src="/images/foodandwine.png"
            alt="Food and Wine Logo"
            className="w-full object-cover"
          />
        </div>
      </nav>
      <AboutUs/>
      <EmailUs/>
    </>
  );
};

export default FoodAndWine;
