import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { products } from "../dummyData.js"

import { Swiper, SwiperSlide } from "swiper/react";
import "./stylee.scss";
import { Navigation, Thumbs, Keyboard } from "swiper";
import Contact from '../components/ContactCom.jsx';
import { motion } from "framer-motion"
import { fadeIn } from '../utils/motion.js';
import { useTranslation } from "react-i18next"
const SingleProduct = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[3];
  const { t } = useTranslation();
  const [activeThumb, setActiveThumb] = useState();
  const [index, setIndex] = useState(0);

  return (
    <>
      <section className='flex flex-col sm:flex-row gap-10 justify-center mt-8 overflow-hidden'>
        <motion.div
          variants={fadeIn("right", "", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='basis-3/5 overflow-hidden'>
          <Swiper
            spaceBetween={10}
            navigation={true}
            keyboard={true}
            onSlideNextTransitionStart={(swiper) => setIndex(swiper.activeIndex)}
            onSlidePrevTransitionStart={(swiper) => setIndex(swiper.activeIndex)}
            onSlideChange={(swiper) => setIndex(swiper.activeIndex)}
            grabCursor={true}
            modules={[Navigation, Thumbs, Keyboard]}
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
        </motion.div>
        <motion.div
          variants={fadeIn("left", "", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='basis-2/5 h-full flex flex-col'>
          <h1 className='text-3xl text-white font-semibold mt-4 px-5 py-3 bg-[#e7316d] w-fit rounded-tl-[28px] rounded-br-[28px]'>{t("Fruit Jelly")}</h1>
          <h1 className='text-3xl text-white font-semibold -mt-2 ml-2 mb-5 px-5 py-2 bg-[#804896] w-fit rounded-tl-[34px] rounded-br-[34px] capitalize'>{t(products[id].content[index].type)}</h1>
          {products[id].content[index]?.pieces && <p className='text-xl text-black/80 font-semibold'>{t("Capacity")}: <span className='font-medium capitalize text-slate-800'>{t(products[id].content[index].pieces)}</span></p>}
          {products[id].content[index]?.exDate && <p className='text-xl text-black/80 font-semibold'>{t("Expiration Date")}: <span className='font-medium capitalize text-slate-800'>{t(products[id].content[index].exDate)}</span></p>}
          {products[id].content[index]?.net_weight && <p className='text-xl text-black/80 font-semibold'>{t("Net Weight")}: <span className='font-medium capitalize text-slate-800'>{t(products[id].content[index].net_weight)}</span></p>}
          {products[id].content[index]?.gross_weight && <p className='text-xl text-black/80 font-semibold'>{t("Gross Weight")}: <span className='font-medium capitalize text-slate-800'>{t(products[id].content[index].gross_weight)}</span></p>}
          {products[id].content[index]?.volume && <p className='text-xl text-black/80 font-semibold'>{t("Volume")}: <span className='font-medium capitalize text-slate-800'>{t(products[id].content[index].volume)}</span></p>}
          {products[id].content[index]?.mass && <p className='text-xl text-black/80 font-semibold'>{t("Weight")}: <span className='font-medium capitalize text-slate-800'>{t(products[id].content[index].mass)}</span></p>}
        </motion.div>
      </section>
      <div className='mt-10'>
        <Contact />
      </div>
    </>
  )

}

export default SingleProduct