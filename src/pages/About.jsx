import React, { useState } from 'react'
import Button from '../components/Button'
import Heading from '../components/Heading'
import { Link } from "react-router-dom"
import { MdClose } from 'react-icons/md'
import Features from '../components/Features'
import { GiCupcake, GiPartyPopper, TbShieldCheck, BsStarFill, BiPalette, features_1, features_2, features_3, features_4, features_5, s_1, s_2, s_3, s_4, s_5, s_6, s_7, about_1, about_2, about_3, about_4 } from '../assets/index.js'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Thumbs } from "swiper";
import { products } from '../dummyData.js'
import { motion } from "framer-motion"
import { fadeIn } from '../utils/motion'

const images = [s_1, s_7, s_2, s_3, s_4, s_5, s_6]

const About = () => {
  const [more, setMore] = useState(false)

  const handleMore = () => {
    setMore(!more)
    console.log(more)
  }
  return (
    <div>
      <Heading text="About" title="Frutti" />
      <section className='flex justify-around flex-col lg:flex-row mb-10'>
        <motion.div
          variants={fadeIn("right", "", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='flex flex-col items-start justify-center basis-1/2'>
          <p className='text-gray-400'>Our Story and Mission</p>
          <h1 className='text-3xl sm:text-4xl font-semibold text-[#a81b81]'>Who We Are</h1>
          <p className='text-lg pt-4 pb-7'>At our company, we are passionate about making entertaining and delicious products that bring joy to people's lives. Our journey began with a simple idea: to create snacks and treats that are both fun and tasty. Over the years, we have grown into a thriving business that serves customers all over the world. But our mission remains the same: to make people happy through our products.</p>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='flex justify-center'>
          <div className='max-h-[470px] max-w-[409px]'>
            <img className='w-full h-full' src={about_1} />
          </div>
        </motion.div>
      </section>
      <section className='flex flex-col justify-around lg:flex-row-reverse'>
        <motion.div
          variants={fadeIn("left", "", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='flex flex-col items-start justify-center basis-1/2'>
          <p className='text-gray-400'>What We Stand For and Believe In</p>
          <h1 className='text-3xl sm:text-4xl font-semibold text-[#a81b81]'>Our Values</h1>
          <p className='text-lg pt-4 pb-7'>Frutti imports all its raw materials by 90% and clearly controls the quality of the goods, it
            should also be noted that Frutti uses all raw materials with a Halal certicate. The company's goal is to be a product leader in Asian countries.</p>
          <div onClick={handleMore}>
            <Button text="Read More" />
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='flex justify-center'>
          <div className='max-h-[470px] max-w-[409px]'>
            <img className='w-full h-full' src={about_3} />
          </div>
        </motion.div>
      </section>
      <section className='flex flex-col justify-around lg:flex-row my-12'>
        <motion.div
          variants={fadeIn("right", "", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='flex flex-col items-start justify-center basis-1/2'>
          <p className='text-gray-400'>Innovative, Collaborative, and Customer-Focused</p>
          <h1 className='text-3xl sm:text-4xl font-semibold text-[#a81b81]'>Our Approach to Business</h1>
          <p className='text-lg pt-4 pb-7'>Frutti is one of the largest, high-quality producers with a large assortment of fruit jelly in
            Uzbekistan, has high-tech automated equipment and is expanding its range and volume
            of products every year, also Frutti today is an exporter to many countries Kazakhstan,
            Kyrgyzstan, Tajikistan, Afghanistan, Turkmenistan, Russia and Armenia. Today, it is negotiating for the supply of its products to Arab countries and African countries.</p>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='flex justify-center'>
          <div className='max-h-[470px] max-w-[409px]'>
            <img className='w-full h-full' src={about_4} />
          </div>
        </motion.div>
      </section>
      <section className='flex flex-col justify-around lg:flex-row-reverse gap-4'>
        <motion.div
          variants={fadeIn("left", "", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='flex flex-col items-start justify-center basis-1/2'>
          <p className='text-gray-400'>The People Behind Our Success</p>
          <h1 className='text-3xl sm:text-4xl font-semibold text-[#a81b81]'>Meet Our Team</h1>
          <p className='text-lg pt-4 pb-7'>Behind every great company is a great team, and ours is no exception. We are a group of dedicated and talented individuals who share a love for creating entertaining and delicious products. From our product developers to our sales team, each member of our team plays an important role in our success. We are proud to work together to bring joy to people's lives.</p>
          <div onClick={handleMore}>
            <Button text="Read More" />
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='flex justify-center'>
          <div className='max-h-[470px] max-w-[409px]'>
            <img className='w-full h-full' src={about_2} />
          </div>
        </motion.div>
      </section>
      <Heading text="Why" title="Frutti" />
      <section className='mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-5'>
        <motion.div
          variants={fadeIn("up", "", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}>
          <Features imgUrl={features_1} icon={<GiPartyPopper />} title="Fun" text="Our products are designed to bring joy and laughter to your daily life. Whether it's our colorful candies or whimsical snacks, we strive to make every bite a fun-filled experience." />
        </motion.div>
        <motion.div
          variants={fadeIn("up", "", 0.2, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}>
          <Features imgUrl={features_2} icon={<GiCupcake />} title="Tasty" text="Our products are not only fun, but also delicious. We carefully select the finest ingredients and craft them into delectable treats that will tantalize your taste buds." />
        </motion.div>
        <motion.div
          variants={fadeIn("up", "", 0.4, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}>
          <Features imgUrl={features_3} icon={<TbShieldCheck />} title="Safe" text=" Your health and safety are our top priorities. We follow strict quality control measures to ensure that our products are safe for consumption and meet all regulatory standards." />
        </motion.div>
        <motion.div
          variants={fadeIn("up", "", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}>
          <Features imgUrl={features_4} icon={<BiPalette />} title="Creative" text=" Our team of innovative chefs and product developers are constantly pushing the boundaries of food creativity. From unique flavor combinations to visually stunning designs, our products are sure to impress." />
        </motion.div>
        <motion.div
          variants={fadeIn("up", "", 0.2, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}>
          <Features imgUrl={features_5} icon={<BsStarFill />} title="Quality" text="We take pride in delivering the highest quality products to our customers. From the sourcing of our ingredients to the packaging of our products, we pay meticulous attention to every detail to ensure that our customers receive only the best." />
        </motion.div>
      </section>
      <Heading text="Our" title="Sertificates" />
      <motion.section
        variants={fadeIn("", "", 0, 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className='my-10'>
        <Swiper
          navigation={true}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation, Thumbs, Autoplay]}
          className='aboutSwiper'
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="aboutSwiperWrapper">
                <img src={item} alt="product images" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>
      {more && (
        <div className='fixed top-0 left-0 grid place-items-center h-screen w-screen bg-black/75 z-20'>
          <div className='absolute top-5 right-10 text-5xl text-[#a81b81] cursor-pointer' onClick={handleMore}>
            <MdClose />
          </div>
          <div className='bg-white relative flex flex-col items-center overflow-auto py-5 px-6 gap-3 max-w-3xl rounded-lg'>
            <h1 className='text-4xl font-semibold text-[#a81b81]'>About our Company</h1>
            <p className=''>Fruit jelly under the trademark “FRUTTI” was founded in 2011, it was founded by a company under the brand “Navro'z". Which was originally engaged in the production of roasted
              sunfower seeds, Navruz still produces sunfower seeds. Navro'z company owns production  facilities with a total of 4,000 squares and a staff of 100 people. <br /><br />Frutti is one of the largest, high-quality producers with a large assortment of fruit jelly in
              Uzbekistan, has high-tech automated equipment and is expanding its range and volume
              of products every year, also Frutti today is an exporter to many countries Kazakhstan,
              Kyrgyzstan, Tajikistan, Afghanistan, Turkmenistan, Russia and Armenia. Today, it is negotiating for the supply of its products to Arab countries and African countries.<br /><br /> Frutti imports all its raw materials by 90% and clearly controls the quality of the goods, it
              should also be noted that Frutti uses all raw materials with a Halal certificate. The company's goal is to be a product leader in Asian countries. <br /><br /> At Frutti, we believe that food is not just about sustenance, but also about creating lasting memories. That's why we're dedicated
              to crafting delicious and entertaining products that go beyond just satisfying your hunger. Our team of expert chefs and culinary artists use only the highest quality ingredients to create unique and memorable experiences for our customers. We believe that every meal should be an
              opportunity for joy, and we're committed to providing just that. Whether you're indulging in one of our sweet treats or enjoying a savory snack, we strive to create moments of happiness and delight in every bite. Come and join us on this journey of taste and experience, and let us help you
              create memories that will last a lifetime.</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default About