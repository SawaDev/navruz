import React, { useEffect } from 'react'
import Button from '../components/Button'
import "./style.css"
import { Typewriter } from "react-simple-typewriter"
import Heading from '../components/Heading'
import aboutImg from "../assets/about.png"
import aboutImg2 from "../assets/about_2.jpg"
import { useState } from 'react'
import { MdClose } from "react-icons/md"
import Features from '../components/Features'
import {
  banner_1, banner_2, banner_4, GiCupcake, GiPartyPopper, TbShieldCheck, BsStarFill, BiPalette, features_1, features_2, features_3, features_4, features_5, halal
} from '../assets/index.js'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import { products } from "../dummyData.js"
import Contact from '../components/ContactCom'
import { fadeIn } from "../utils/motion.js";
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Thumbs, Pagination, Keyboard } from "swiper";

const items = [
  { image: banner_1, class: "img1" },
  { image: banner_2, class: "img2" },
  { image: banner_4, class: "img3" }
]

const Home = () => {
  const [more, setMore] = useState(false)
  const [current, setCurrent] = useState(0);
  const [opacity, setOpacity] = useState(0);

  const { t } = useTranslation();

  const handleClick = (index) => {
    setCurrent(index === current ? 0 : index);
  };

  const handleMore = () => {
    setMore(!more)
    console.log(more)
  }

  useEffect(() => {
    let timerId;
    setTimeout(() => {
      setOpacity(1);
      timerId = setTimeout(() => {
        setOpacity(0);
      }, 7000);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <div className='overflow-hidden'>
      <img
        src={halal} alt="Image" className={`absolute right-10 bottom-10 transition-opacity z-[9] h-[100px] sm:h-[150px] object-contain duration-1000 ease-in-out ${opacity === 0 ? 'opacity-0' : 'opacity-100'}`}
      />
      <section className='w-full relative backdrop-blur-[2px] pt-10 sm:pt-0 pb-[140px] flex flex-col lg:flex-row justify-between items-center'>
        <motion.div
          variants={fadeIn("right", "", 0, 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='flex flex-col max-w-[612px] sm:pt-[100px] sm:pb-[60px] sm:px-[20px] sm:pl-10'>
          <h1 className='text-5xl sm:text-5xl font-semibold mb-5 text-black'>{t("Taste our")} <br /> <span className='text-6xl text-[#a81b81]'>
            <Typewriter
              words={[t("Fun"), t("Safe"), t("Creative")]}
              loop={true}
              deleteSpeed={50}
              delaySpeed={3000}
              typeSpeed={150}
            />
          </span>
            <br /> {t("products title")}</h1>
          <p className='mb-10 text-lg max-w-lg text-gray-400'>{t("banner title")}</p>
          <Link to="/about">
            <Button text="About Us" />
          </Link>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "", 0.2, 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className={`sm:w-[600px] pt-10 pr-10 flex justify-center ${items[current].class} home bg-center`}>
          <div className='max-w-[340px] h-[540px] -rotate-6'>
            <img src={items[current].image} className="object-cover img_shadow" />
          </div>
        </motion.div>
        <motion.ul
          variants={
            {
              hidden: {
                y: -60,
                opacity: 0,
                x: -140,
              },
              show: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.5,
                  duration: 0.7,
                  ease: "linear",
                },
              }
            }
          }
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='absolute flex gap-6 thumb'>
          {items.map((item, index) => (
            <li key={index} onClick={() => handleClick(index)}><img src={item.image} className="max-w-[80px]" /></li>
          ))}
        </motion.ul>
      </section>
      <Heading title="Products" text="Our" />

      <motion.div
        variants={fadeIn("", "", 0, 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className='my-10 max-w-7xl mx-auto'>
        <Swiper
          navigation={true}
          keyboard={true}
          pagination={{
            clickable: true,
          }}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation, Thumbs, Autoplay, Pagination, Keyboard]}
          className='p-10 pb-14'
        >
          {products.map(product => (
            <SwiperSlide
              className='outline w-fit flex flex-col items-center p-10 rounded-xl'>
              <div className='max-w-[250px] h-[250px] overflow-hidden'>
                <img src={product.content[0].img} className="h-full w-full object-contain" />
              </div>
              <div className=''>
                <h1 className='text-3xl text-white font-semibold mt-4 px-5 py-3 bg-[#e7316d] w-fit rounded-tl-[28px] rounded-br-[28px]'>Fruit Jelly</h1>
                <h1 className={`${product.content[0].type === "energy package" ? 'text-xl' : 'text-2xl'} sm:text-[22px] lg:text-3xl text-white font-semibold -mt-2 ml-2 mb-5 px-5 py-2 bg-[#804896] w-fit rounded-tl-[34px] rounded-br-[34px] capitalize`}>{product.content[0].type}</h1>
              </div>
              <Link to="/categories/jelly/0">
                <Button text="See more" />
              </Link>
            </SwiperSlide>
          ))}

        </Swiper>
      </motion.div>
      <Heading title="Company" text="About Our" />
      <section className='flex justify-around flex-col gap-10 lg:flex-row mb-10'>
        <motion.div
          variants={fadeIn("right", "", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='flex flex-col px-4 sm:px-0 items-start justify-center basis-1/2'>
          <h1 className='text-2xl text-center lg:text-left sm:text-4xl font-semibold text-[#a81b81]'>{t("crafting")}</h1>
          <p className='text-lg pt-4 pb-7'>{t("crafting text")}</p>
          <Link to="/products">
            <Button text="See All" />
          </Link>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "", 0.2, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='flex justify-center px-4 sm:px-0 lg:justify-end'>
          <div className='max-h-[470px] max-w-[409px]'>
            <img className='w-full h-full' src={aboutImg} />
          </div>
        </motion.div>
      </section>
      <section className='flex justify-around flex-col gap-10 lg:flex-row-reverse'>
        <motion.div
          variants={fadeIn("left", "", 0.4, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='flex flex-col items-start justify-center basis-1/2 px-4 sm:px-0'>
          <h1 className='text-3xl text-center lg:text-left sm:text-4xl font-semibold text-[#a81b81]'>{t("our team")}</h1>
          <p className='text-lg pt-4 pb-7'>{t("our team text")}</p>
          <div onClick={handleMore}>
            <Button text="Read More" />
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "", 0.4, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='flex justify-center lg:justify-start px-4 sm:px-0'>
          <div className='max-h-[470px] max-w-[409px]'>
            <img className='w-full h-full' src={aboutImg2} />
          </div>
        </motion.div>
      </section>
      <Heading text="Why" title="Frutti" />
      <div className='mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-5'>
        <motion.div
          variants={fadeIn("up", "", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}>
          <Features imgUrl={features_1} icon={<GiPartyPopper />} title="Fun" text="f 1" />
        </motion.div>
        <motion.div
          variants={fadeIn("up", "", 0.2, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}>
          <Features imgUrl={features_2} icon={<GiCupcake />} title="Tasty" text="f 2" />
        </motion.div>
        <motion.div
          variants={fadeIn("up", "", 0.4, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}>
          <Features imgUrl={features_3} icon={<TbShieldCheck />} title="Safe" text="f 3" />
        </motion.div>
        <motion.div
          variants={fadeIn("up", "", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}>
          <Features imgUrl={features_4} icon={<BiPalette />} title="Creative" text="f 4" />
        </motion.div>
        <motion.div
          variants={fadeIn("up", "", 0.2, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}>
          <Features imgUrl={features_5} icon={<BsStarFill />} title="Quality" text="f 5" />
        </motion.div>
      </div>
      <Contact />
      {more && (
        <div className='fixed top-0 left-0 grid place-items-center h-screen w-screen overflow-y-scroll bg-black/75 z-20'>
          <div className='absolute top-2 right-2 sm:top-5 sm:right-10 text-4xl sm:text-5xl text-[#a81b81] cursor-pointer z-50' onClick={handleMore}>
            <MdClose />
          </div>
          <div className='bg-white relative flex flex-col items-center  py-5 px-6 gap-3 max-w-3xl sm:first-letter:rounded-lg'>
            <h1 className='text-4xl font-semibold text-[#a81b81]'>{t("About our Company")}</h1>
            <p className=''>{t("text more 1")} <br /><br />{t("text more 2")}<br /><br />{t("a tt2")}<br /><br />{t("text more 3")}</p>
          </div>
        </div>
      )}
    </div >
  )
}

export default Home