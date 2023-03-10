import React from 'react'
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
  banner_1, banner_2, banner_4, GiCupcake, GiPartyPopper, TbShieldCheck, BsStarFill, BiPalette, features_1, features_2, features_3, features_4, features_5
} from '../assets/index.js'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import { products } from "../dummyData.js"
import Contact from '../components/ContactCom'
import { fadeIn, move, textVariant, zoomIn } from "../utils/motion.js";
import { useTranslation } from 'react-i18next'

const items = [
  { image: banner_1, class: "img1" },
  { image: banner_2, class: "img2" },
  { image: banner_4, class: "img3" }
]

const Home = () => {
  const [more, setMore] = useState(false)
  const [current, setCurrent] = useState(0);

  const { t } = useTranslation();

  const handleClick = (index) => {
    setCurrent(index === current ? 0 : index);
  };

  const handleMore = () => {
    setMore(!more)
    console.log(more)
  }

  return (
    <div className='overflow-hidden'>
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
      <section className='flex flex-wrap gap-5 justify-around w-full'>
        <motion.div
          variants={fadeIn("up", "", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='outline flex flex-col items-center py-10 px-10 rounded-xl'>
          <div className='max-w-[250px] max-h-[250px] overflow-hidden'>
            <img src={products[0].content[0].img} className="h-full w-full object-contain" />
          </div>
          <h1 className='text-4xl capitalize font-semibold text-[#a81b81] py-5'>Stick</h1>
          <Link to="/categories/jelly/0">
            <Button text="See more" />
          </Link>
        </motion.div>
        <motion.div
          variants={fadeIn("up", "", 0.2, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='outline flex flex-col items-center py-10 px-10 rounded-xl'>
          <div className='max-w-[250px] max-h-[250px] overflow-hidden'>
            <img src={products[1].content[0].img} className="h-full w-full object-contain" />
          </div>
          <h1 className='text-4xl capitalize font-semibold text-[#a81b81] py-5'>Energy</h1>
          <Link to="/categories/jelly/1">
            <Button text="See more" />
          </Link>
        </motion.div>
        <motion.div
          variants={fadeIn("up", "", 0.4, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='outline flex flex-col items-center py-10 px-10 rounded-xl'>
          <div className='max-w-[250px] max-h-[250px] overflow-hidden'>
            <img src={products[3].content[0].img} className="h-full w-full object-contain" />
          </div>
          <h1 className='text-4xl capitalize font-semibold text-[#a81b81] py-5'>Cup</h1>
          <Link to="/categories/jelly/3">
            <Button text="See more" />
          </Link>
        </motion.div>
      </section>
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
      {
        more && (
          <div className='fixed top-0 left-0 grid place-items-center h-screen w-screen bg-black/75 z-20'>
            <div className='absolute top-5 right-10 text-5xl text-[#a81b81] cursor-pointer' onClick={handleMore}>
              <MdClose />
            </div>
            <div className='bg-white relative flex flex-col items-center overflow-auto py-5 px-6 gap-3 max-w-3xl rounded-lg'>
              <h1 className='text-4xl font-semibold text-[#a81b81]'></h1>
              <p className=''>{t("text more 1")} <br /><br />{t("text more 2")}<br /><br />{t("a tt2")}<br /><br />{t("text more 3")}</p>
            </div>
          </div>
        )
      }
    </div >
  )
}

export default Home