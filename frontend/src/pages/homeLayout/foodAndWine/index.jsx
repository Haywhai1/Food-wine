import CustomerReview from "../customerReview";
import Footer from "../../../components/footer";
import AboutUs from "../aboutUs";
import OrderDescription from "../orderDescription";
import TasteMeaning from "../tasteMeaning";

const FoodAndWine = () => {
  return (
    <>
      <nav className="flex flex-col md:flex-row justify-between mb-6"> {/* Flex column by default, row on md screens */}
        {/* Left Content (Increased Width) */}
        <div className="flex flex-col justify-center flex-grow pl-6 max-w-[50%]">
          <div className="flex justify-between items-center">
            <h1
              className="text-4xl mt-2 font-black text-black"
              style={{ fontFamily: "MuseoModerno, sans-serif" }}
            >
              FOOD&<span className="text-[#ff8f08]">WINE</span>
            </h1>

            <ul
              className="flex gap-10 text-lg mt-2"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <li>
                <a href="">HOME</a>
              </li>
              <li>
                <a href="">MENU</a>
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
            <p className="leading-normal">
              It's time to enjoy the finer things in life. <br /> A genuine fine dining experience
              awaits. <br /> Come for a drink, stay for a meal. Great food and great company.
            </p>
            <div className="flex gap-4 mt-4">
              <button className="btn-linear-gradient2 px-1 py-2 text-white bg-[#ff8f08] rounded-md shadow-sm">
                ORDER FOOD
              </button>
              <button className="btn-linear-gradient px-1 py-2 text-white bg-black rounded-md shadow-sm ">
                ORDER DRINKS
              </button>
            </div>
          </div>
        </div>

        {/* Image Container */}
        <div className="w-full md:w-80 lg:w-48 xl:w-[400px] flex items-stretch md:mt-0 mt-6"> {/* Image will move below on smaller screens */}
          <img
            src="/images/foodandwine.png"
            alt="Food and Wine Logo"
            className="w-full object-cover h-full "
          />
        </div>
      </nav>

      <AboutUs />
      <TasteMeaning />
      <OrderDescription />
      <CustomerReview />
      <Footer />
    </>
  );
};

export default FoodAndWine;
