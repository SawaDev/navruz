import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdClose } from 'react-icons/md'
import Button from './Button'
import { logo } from "../assets/index.js"

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <section className='w-screen flex justify-between items-center py-3 text-white'>
      <Link to="/">
        <img src={logo} className="h-20" />
      </Link>
      <div className='sm:hidden text-3xl text-[#a81b81] mr-4'>
        <GiHamburgerMenu onClick={() => setMenu(true)} />
        {menu && (
          <div className='navSmall fixed top-0 left-0 h-screen w-full flex flex-col items-center justify-center bg-white/95 z-50 slide-bottom'>
            <div className='fixed text-5xl top-8 right-8' >
              <MdClose onClick={() => setMenu(false)} />
            </div>
            <ul className='flex flex-col gap-5'>
              <li>
                <Link to="/" className='item text-3xl font-semibold' onClick={() => setMenu(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className='item text-3xl font-semibold' onClick={() => setMenu(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/products" className='item text-3xl font-semibold' onClick={() => setMenu(false)}>
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className='item text-3xl font-semibold' onClick={() => setMenu(false)}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <ul className='hidden sm:flex flex-row items-center text-black gap-6'>
        <li className='item text-xl'>
          <Link to="/about">
            About
          </Link>
        </li>
        <li className='item text-xl'>
          <Link to="/products">
            Products
          </Link>
        </li>
        <div className='hidden sm:block'>
          <Link to="/contact">
            <Button text="Contact Us" />
          </Link>
        </div>
      </ul>
    </section>
  )
}

export default Navbar