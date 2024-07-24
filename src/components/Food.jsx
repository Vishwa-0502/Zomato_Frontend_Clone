import React, { useState } from 'react';
import { data } from '../data/data.jsx';
import { motion, AnimatePresence } from "framer-motion";

export default function Food() {
    const [foods, setFoods] = useState(data);

    const filterType = (category) => {
        setFoods(
            data.filter((item) => item.category === category)
        );
    };

    const filterPrice = (range) => {
        const priceRange = {
            low: 0,
            medium: 200,
            high: 300,
            premium: 400
        };
        
        setFoods(
            data.filter((item) => {
                const price = parseInt(item.price.replace('₹', ''));
                if (range === 'low') {
                    return price <= priceRange.medium;
                } else if (range === 'medium') {
                    return price > priceRange.medium && price <= priceRange.high;
                } else if (range === 'high') {
                    return price > priceRange.high && price <= priceRange.premium;
                } else if (range === 'premium') {
                    return price > priceRange.premium;
                }
                return true;
            })
        );
    };

    return (
        <div className='max-w-[1240px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>
                Top Rated Menu Items
            </h1>
            <div className='flex flex-col lg:flex-row justify-between'>
                {/* Filter Type */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Type</p>
                    <div className='flex justify-between flex-wrap'>
                        <button onClick={() => setFoods(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>All</button>
                        <button onClick={() => filterType('burger')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>Burgers</button>
                        <button onClick={() => filterType('pizza')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>Pizza</button>
                        <button onClick={() => filterType('salad')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>Salads</button>
                        <button onClick={() => filterType('chicken')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>Chicken</button>
                    </div>
                </div>

                {/* Filter Price */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Price</p>
                    <div className='flex justify-between flex-wrap max-w-[390px] w-full'>
                        <button onClick={() => filterPrice('low')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>₹0-₹200</button>
                        <button onClick={() => filterPrice('medium')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>₹201-₹300</button>
                        <button onClick={() => filterPrice('high')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>₹301-₹400</button>
                        <button onClick={() => filterPrice('premium')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>₹401+</button>
                    </div>
                </div>
            </div>

            {/* Display food */}
            <AnimatePresence>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                    {foods.map((item) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.1 }}
                            key={item.id}
                            className="border shadow-lg rounded-lg hover:scale-105 duration-500 cursor-pointer"
                        >

                            <div className='flex justify-between px-2 py-4'>
                                <p>{item.name}</p>
                                <p>
                                    <span className='bg-orange-500 text-white p-1 rounded-md'>{item.price}</span>
                                </p>
                            </div>
                            <div className='w-full h-64 overflow-hidden rounded-t-lg'>
                                <img src={item.image} alt={item.name} className="object-cover h-44 w-44" />
                            </div>
                            
                        </motion.div>
                    ))}
                </div>
            </AnimatePresence>
        </div>
    );
}
