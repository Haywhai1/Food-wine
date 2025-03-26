import React from 'react'

const Footer = () => {
  return (
<div> 
<div 
  className='flex flex-col mt-5 m-6 mb-0 p-20 items-center justify-center' 
  style={{ backgroundImage: 'url(/images/footerBg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
>
    <h3 className="text-center capitalize pb-4 text-3xl " style={{ fontFamily: "Righteous, sans-serif" }}>Join us to get an amazing discount on your <br/> next order</h3>
    <div className='flex items-center'>
        <input type="text" placeholder="Enter your email" className="p-2 px-20 "/>
        <button className="p-2 bg-black text-white">Submit</button>
    </div>
</div>

    <div className='footer flex bg-[#000000] m-6 mb-5 mt-0 p-16 text-white justify-around'>
        <div>
            <h4>Our Social handles</h4>
            <div class="flex space-x-2 mt-4">
        
                <a href="https://twitter.com" target="_blank" class="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                    <i class="fab fa-twitter text-black text-1xl"></i>
                </a>
        
       
                <a href="https://facebook.com" target="_blank" class="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                    <i class="fab fa-facebook text-black text-1xl"></i>
                </a>

        
                <a href="https://instagram.com" target="_blank" class="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                    <i class="fab fa-instagram text-black text-1xl"></i>
                </a>
            </div>
        </div>

        <div>
            <h4>Quick Links</h4>

            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>Location</li>
                <li>About Us</li>
            </ul>
        </div>

        <div>
            <h4 className='text-black'>Terms and Conditions</h4>
            <ul>
                <li>FAQ's</li>
                <li>Privacy & Policy</li>
                <li>Terms & Condition</li>
            </ul>
        </div>

        <div>
        <h4>Contact Us</h4>
        <ul>
                <li>3, Wuse Zone 2, <br/> Abuja, FCT.</li>
                <li>+234-810000000</li>
                <li>foodandwine@gmail.com</li>
            </ul>
        </div>
    </div>
</div>      
  )
}

export default Footer