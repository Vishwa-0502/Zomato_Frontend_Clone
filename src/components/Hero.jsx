import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Hero() {
  return (
    <Carousel className="max-w-[1240px] mx-auto" showThumbs={false} emulateTouch={true} showArrows={false} showStatus={false} showIndicators={false} swipeable={true} autoPlay infiniteLoop>
      <div className='max-w-[1240px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
          <div className='absolute w-full h-full max-h-[500px] bg-black/40 text-gray-200 flex flex-col justify-center'>
            <h1 className='!px-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-justify'>Are you <span className='text-orange-500'>hungry?</span></h1>
            <h1 className='!px-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-justify'>Just <span className='text-orange-500'>order</span> now</h1>
          </div>
          <img className='w-full max-h-[500px] object-cover' src="https://www.xicom.biz/blog/wp-content/uploads/2017/10/Cost-Estimation-to-develop-a-Restaurant-App-like-Zomato.jpg" alt="Food" />
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
          <div className='absolute w-full h-full max-h-[500px] bg-black/40 text-gray-200 flex flex-col justify-center'>
            <h1 className='px-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-justify'>Are you <span className='text-orange-500'>hungry?</span></h1>
            <h1 className='px-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-justify'>Just <span className='text-orange-500'>order</span> now</h1>
          </div>
          <img className='w-full max-h-[500px] object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbBH-EnM4E1XfvYBb3qBOV1zELXQXOt_EN8A&s" alt="Food" />
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
          <div className='absolute w-full h-full max-h-[500px] bg-black/40 text-gray-200 flex flex-col justify-center'>
            <h1 className='px-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-justify'>Are you <span className='text-orange-500'>hungry?</span></h1>
            <h1 className='px-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-justify'>Just <span className='text-orange-500'>order</span> now</h1>
          </div>
          <img className='w-full max-h-[500px] object-cover' src="https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-9538dde/www.apptunix.com/blog/wp-content/uploads/sites/3/2018/12/On-demand-food-delivery-app-1.jpg" alt="Food" />
        </div>
      </div>
    </Carousel>
  );
}
