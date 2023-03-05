import React from 'react'
import ContactCom from '../components/ContactCom'
import Heading from '../components/Heading'
import { TfiEmail } from "react-icons/tfi"
import { BsPhone } from "react-icons/bs"
import { SlLocationPin } from "react-icons/sl"

const Contact = () => {
  return (
    <div>
      <Heading title="Contacts" />
      <section className='flex flex-row gap-10 flex-wrap w-full justify-between my-10'>
        <div className='flex items-center flex-1 justify-start rounded-md p-5 gap-5 shadow-xl'>
          <div className='text-[#a81b81] text-5xl rounded-md'>
            <TfiEmail />
          </div>
          <div className='flex flex-col'>
            <span className='text-xl font-semibold'>Email: </span>
            <a href='mailto:sardormahmudov16@gmail.com'>sardormahmudov16@gmail.com</a>
          </div>
        </div>
        <div className='flex items-center flex-1 justify-start rounded-md p-5 gap-5 shadow-xl'>
          <div className='text-[#a81b81] text-5xl rounded-md'>
            <SlLocationPin />
          </div>
          <div className='flex flex-col'>
            <span className='text-xl font-semibold'>Location: </span>
            <a>Location here</a>
          </div>
        </div>
        <div className='flex items-center flex-1 justify-start rounded-md p-5 gap-5 shadow-xl'>
          <div className='text-[#a81b81] text-5xl rounded-md'>
            <BsPhone />
          </div>
          <div className='flex flex-col'>
            <span className='text-xl font-semibold'>Phone: </span>
            <a href="tel:+998957902108">+998123456789</a>
            <a href="tel:+998957902108">+998123456789</a>
          </div>
        </div>
      </section>
      <ContactCom />
    </div>
  )
}

export default Contact