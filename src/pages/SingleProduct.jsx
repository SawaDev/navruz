import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { products } from "../dummyData.js"

import { Swiper, SwiperSlide } from "swiper/react";
import "./stylee.scss";
import { Autoplay, Navigation, Thumbs } from "swiper";
import Contact from '../components/ContactCom.jsx';

const SingleProduct = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[3];

  const [activeThumb, setActiveThumb] = useState();
  const [index, setIndex] = useState(0);

  return (
    <>
      <section className='flex flex-col sm:flex-row gap-10 justify-center mt-8 sm:0'>
        <div className='basis-3/5 overflow-hidden'>
          <Swiper
            spaceBetween={10}
            navigation={true}
            onSlideNextTransitionStart={(swiper) => setIndex(swiper.activeIndex)}
            onSlidePrevTransitionStart={(swiper) => setIndex(swiper.activeIndex)}
            onSlideChange={(swiper) => setIndex(swiper.activeIndex)}
            grabCursor={true}
            modules={[Navigation, Thumbs, Autoplay]}
            thumbs={{ swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null }}
            className='product-images-slider'
          >
            {products[id].content.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item.img} alt="product images" />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setActiveThumb}
            spaceBetween={10}
            slidesPerView={3}
            modules={[Navigation, Thumbs]}
            className='product-images-slider-thumbs p-2'
          >
            {
              products[id].content.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="product-images-slider-thumbs-wrapper">
                    <img src={item.img} alt="product images" />
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        <div className='basis-2/5 h-full flex flex-col'>
          <h1 className='text-3xl text-white font-semibold mt-4 px-5 py-3 bg-[#e7316d] w-fit rounded-tl-[28px] rounded-br-[28px]'>Fruit Jelly</h1>
          <h1 className='text-3xl text-white font-semibold -mt-2 ml-2 mb-5 px-5 py-2 bg-[#804896] w-fit rounded-tl-[34px] rounded-br-[34px] capitalize'>{products[id].content[index].type}</h1>
          {products[id].content[index]?.pieces && <p className='text-xl text-black/80 font-semibold'>Capacity: <span className='font-medium capitalize text-slate-800'>{products[id].content[index].pieces}</span></p>}
          {products[id].content[index]?.exDate && <p className='text-xl text-black/80 font-semibold'>Expiration Date: <span className='font-medium capitalize text-slate-800'>{products[id].content[index].exDate}</span></p>}
          <p className='text-xl text-black/80 font-semibold'>Weight: <span className='font-medium capitalize text-slate-800'>{products[id].content[index].mass}</span></p>
        </div>
      </section>
      <div className='mt-10'>
        <Contact />
      </div>
    </>
  )

}

export default SingleProduct