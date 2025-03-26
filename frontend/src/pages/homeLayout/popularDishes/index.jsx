import React, { useState, useEffect } from 'react';
import { apiClient } from '../../../shared/client';

const PopularDishes = () => {
    const [popularDishes, setPopularDishes] = useState([]);

    useEffect(() => {
        const fetchPopularDishes = async () => {
            try {
                const response = await apiClient.get('/popularDishes')
                setPopularDishes(response.data); 
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching popular dishes:', error);
            }
        };
    
        fetchPopularDishes(); 
    }, []); 
    
    return (
        <div className='m-6 flex flex-col pb-20'>
            <h1 className='mb-4' style={{ fontFamily: "Righteous, sans-serif", fontSize:"25px" }}>Popular Dishes</h1>
            {/* Render list of popular dishes */}
            <ul className='flex justify-between'>
                {popularDishes.map((dish, index) => (
                    <li key={index} className='bg-white' style={{ padding: '4px' }}>
                        {/* Dish Image */}
                        <img src={dish.dishImage} alt={dish.dishName} style={{ width: '280px', height: 'auto',}} />

                        {/* Dish Name */}
                        <h3 className='text-center font-bold mt-2' style={{marginTop:"-20px", fontFamily: "Righteous, sans-serif", fontSize:"15px" }}>
                            {dish.dishName}
                        </h3>

                        {/* Dish Description and Clock Icon */}
                        <div className="flex items-center gap-1">
                            <i className="fas fa-clock" style={{ color: 'black', fontSize: '10px', backgroundColor:"white" }}></i> {/* Clock icon */}
                            <p style={{fontSize:"10px", fontFamily: "Poppins, sans-serif",}}>10 Mints</p>
                        </div>

                        <div className='flex justify-between'>
                           <span style={{ fontSize: "15px", color: "#ff8f08"}}>★★★★</span>        
                            <button className='font-semibold' style={{fontSize: "15px", fontFamily: "Poppins, sans-serif", color: "#ff8f08"}}>
                                ORDER NOW 
                            </button> 
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PopularDishes;
