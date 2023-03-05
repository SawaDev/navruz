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
import { motion, useMotionValue, useTransform } from "framer-motion"
import { Link } from 'react-router-dom'
import { products } from "../dummyData.js"
import Contact from '../components/ContactCom'

const items = [
  { image: banner_1, class: "img1" },
  { image: banner_2, class: "img2" },
  { image: banner_4, class: "img3" }
]


const Home = () => {
  const [more, setMore] = useState(false)
  const [current, setCurrent] = useState(0);

  const handleClick = (index) => {
    setCurrent(index === current ? 0 : index);
  };

  const handleMore = () => {
    setMore(!more)
    console.log(more)
  }

  return (
    <div className=''>

      {/* <div className={`circle  overflow-hidden`}></div> */}
      <section className='w-full relative backdrop-blur-[2px] pt-10 sm:pt-0 pb-[140px] flex flex-col lg:flex-row justify-between items-center'>
        <div className='flex flex-col max-w-[612px] sm:pt-[100px] sm:pb-[60px] sm:px-[20px] sm:pl-10'>
          <h1 className='text-6xl font-bold mb-5 text-black'>Taste our <br /> <span className='text-6xl text-[#a81b81]'>
            <Typewriter
              words={['Fun', 'Safe', 'Creative']}
              loop={true}
              deleteSpeed={50}
              delaySpeed={3000}
              typeSpeed={150}
            />
          </span>
            <br /> Products</h1>
          <p className='mb-10 text-lg max-w-lg text-gray-400'>Discover entertaining and delicious products that are bursting with flavor and personality at Navroz! Our mouthwatering creations are crafted to satisfy your cravings and bring people together.</p>
          <Button text="About Us" />
        </div>
        <div className={`sm:w-[600px] pt-10 pr-10 flex justify-center ${items[current].class} home bg-center`}>
          <div className='max-w-[340px] h-[540px] -rotate-6'>
            <img src={items[current].image} className="object-cover img_shadow" />
          </div>
        </div>
        <ul className='absolute flex gap-6 thumb'>
          {items.map((item, index) => (
            <li key={index} onClick={() => handleClick(index)}><img src={item.image} className="max-w-[80px]" /></li>
          ))}
        </ul>
      </section>
      <Heading title="Products" text="Our" />
      <section className='flex flex-wrap gap-5 justify-around w-full'>
        <div className='outline flex flex-col items-center py-10 px-10 rounded-xl'>
          <div className='max-w-[250px] max-h-[250px] overflow-hidden'>
            <img src={products[0].content[0].img} className="h-full w-full object-contain" />
          </div>
          <h1 className='text-4xl capitalize font-semibold text-[#a81b81] py-5'>Stick</h1>
          <Link to="/categories/jelly/0">
            <Button text="See more" />
          </Link>
        </div>
        <div className='outline flex flex-col items-center py-10 px-10 rounded-xl'>
          <div className='max-w-[250px] max-h-[250px] overflow-hidden'>
            <img src={products[1].content[0].img} className="h-full w-full object-contain" />
          </div>
          <h1 className='text-4xl capitalize font-semibold text-[#a81b81] py-5'>Energy</h1>
          <Link to="/categories/jelly/1">
            <Button text="See more" />
          </Link>
        </div>
        <div className='outline flex flex-col items-center py-10 px-10 rounded-xl'>
          <div className='max-w-[250px] max-h-[250px] overflow-hidden'>
            <img src={products[3].content[0].img} className="h-full w-full object-contain" />
          </div>
          <h1 className='text-4xl capitalize font-semibold text-[#a81b81] py-5'>Cup</h1>
          <Link to="/categories/jelly/3">
            <Button text="See more" />
          </Link>
        </div>
      </section>
      <Heading title="Company" text="About Our" />
      <section className='flex justify-around flex-col gap-10 lg:flex-row mb-10'>
        <div className='flex flex-col items-start justify-center basis-1/2'>
          <h1 className='text-3xl text-center lg:text-left sm:text-4xl font-semibold text-[#a81b81]'>Crafting Memorable Experiences</h1>
          <p className='text-lg pt-4 pb-7'>At Frutti, we believe that food is not just about sustenance, but also about creating lasting memories. That's why we're dedicated to crafting delicious and entertaining products that go beyond just satisfying your hunger.</p>
          <Link to="/products">
            <Button text="See All" />
          </Link>
        </div>
        <div className='flex justify-center lg:justify-end'>
          <div className='max-h-[470px] max-w-[409px]'>
            <img className='w-full h-full' src={aboutImg} />
          </div>
        </div>
      </section>
      <section className='flex justify-around flex-col gap-10 lg:flex-row-reverse'>
        <div className='flex flex-col items-start justify-center basis-1/2'>
          <h1 className='text-3xl text-center lg:text-left sm:text-4xl font-semibold text-[#a81b81]'>Our Dedicated Team</h1>
          <p className='text-lg pt-4 pb-7'>Our team of 100 talented and dedicated staff members work tirelessly to ensure that every product we produce meets our high standards for taste and quality. From our chefs to our production and packaging teams, we are committed to providing our customers with the best possible experience, every time.</p>
          <div onClick={handleMore}>
            <Button text="Read More" />
          </div>
        </div>
        <div className='flex justify-center lg:justify-start'>
          <div className='max-h-[470px] max-w-[409px]'>
            <img className='w-full h-full' src={aboutImg2} />
          </div>
        </div>
      </section>
      <Heading text="Why" title="Frutti" />
      <div className='mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-5'>
        <Features imgUrl={features_1} icon={<GiPartyPopper />} title="Fun" text="Our products are designed to bring joy and laughter to your daily life. Whether it's our colorful candies or whimsical snacks, we strive to make every bite a fun-filled experience." />
        <Features imgUrl={features_2} icon={<GiCupcake />} title="Tasty" text="Our products are not only fun, but also delicious. We carefully select the finest ingredients and craft them into delectable treats that will tantalize your taste buds." />
        <Features imgUrl={features_3} icon={<TbShieldCheck />} title="Safe" text=" Your health and safety are our top priorities. We follow strict quality control measures to ensure that our products are safe for consumption and meet all regulatory standards." />
        <Features imgUrl={features_4} icon={<BiPalette />} title="Creative" text=" Our team of innovative chefs and product developers are constantly pushing the boundaries of food creativity. From unique flavor combinations to visually stunning designs, our products are sure to impress." />
        <Features imgUrl={features_5} icon={<BsStarFill />} title="Quality" text="We take pride in delivering the highest quality products to our customers. From the sourcing of our ingredients to the packaging of our products, we pay meticulous attention to every detail to ensure that our customers receive only the best." />
      </div>
      <Contact />
      {
        more && (
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
        )
      }
    </div >
  )
}

export default Home