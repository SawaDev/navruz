import React, { useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdClose, MdOutlineFileDownload } from 'react-icons/md'
import Button from './Button'
import { logo } from "../assets/index.js"
import { BsGlobe2 } from "react-icons/bs"
import { AiFillCaretDown } from "react-icons/ai"
import { useTranslation } from "react-i18next"
import i18n from '../i18n';
import { GB, RU, UZ } from 'country-flag-icons/react/3x2'

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(false);
  const [download, setDownload] = useState(false);
  const ref = useRef();

  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setActive(false);
        setDownload(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return (
    <section ref={ref} className='w-screen flex justify-between items-center py-3 text-white'>
      <Link to="/">
        <img src={logo} className="h-20" />
      </Link>

      <div className='flex items-center lg:gap-4'>
        <div className='lg:hidden text-3xl text-[#a81b81] mr-4 cursor-pointer'>
          <GiHamburgerMenu onClick={() => setMenu(true)} />
          {menu && (
            <div className='navSmall fixed top-0 left-0 h-screen w-full flex flex-col items-center justify-center bg-white/95 z-50 slide-bottom'>
              <div className='fixed text-5xl top-8 right-8 cursor-pointer' >
                <MdClose onClick={() => setMenu(false)} />
              </div>
              <ul className='flex flex-col gap-5'>
                <li>
                  <Link to="/" className='item text-3xl font-semibold' onClick={() => setMenu(false)}>
                    {t("Home")}
                  </Link>
                </li>
                <li>
                  <Link to="/about" className='item text-3xl font-semibold' onClick={() => setMenu(false)}>
                    {t("About Us")}
                  </Link>
                </li>
                <li>
                  <Link to="/products" className='item text-3xl font-semibold' onClick={() => setMenu(false)}>
                    {t("Products")}
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className='item text-3xl font-semibold' onClick={() => setMenu(false)}>
                    {t("Contact Us")}
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <ul className='hidden lg:flex flex-row items-center text-black gap-6'>
          <li className='item text-xl'>
            <Link to="/about">
              {t('About Us')}
            </Link>
          </li>
          <li className='item text-xl'>
            <Link to="/products">
              {t("Products")}
            </Link>
          </li>

          <div className='realtive cursor-pointer text-black flex items-center justify-center text-xl'>
            <div className='flex items-center justify-center gap-1' onClick={() => setDownload(!download)}>
              <p>{t("Catalogue")}</p>
            </div>
            <div className={`absolute -bottom-12 bg-gray-100 z-10 ${download ? 'flex flex-col gap-1 px-3 py-1 border-[#a81b81] border-[1px] rounded-xl' : 'hidden'}`}>
              <p>{t("Catalogue text")}</p>
              <div className='flex gap-4'>
                <a
                  className='flex items-center gap-1'
                  href="https://drive.google.com/file/d/11GZjEENskrRGpY7Uu5OyiE8dIod0ww3e/view?usp=share_link"
                  target="_blank"
                  onClick={() => setDownload(false)}
                >
                  <RU title="Russia" className='block z-40 h-4' />
                  <span>RU</span>
                </a>
                <a
                  className='flex items-center gap-1'
                  href="https://drive.google.com/file/d/1sTUN4y0Igr19Zwv8Q6naKOhr__W-DSPu/view?usp=share_link"
                  target="_blank"
                  onClick={() => setDownload(false)}
                >
                  <GB title="Great Britain" className='block z-40 h-4' />
                  <span>EN</span>
                </a>
              </div>
            </div>
          </div>

          <div className='hidden sm:block'>
            <Link to="/contact">
              <Button text="Contact Us" />
            </Link>
          </div>
        </ul>

        <div className='relative inline-block'>
          <div
            onClick={() => setActive(!active)}
            className='flex items-center cursor-pointer gap-[2px]'>
            <BsGlobe2 className='text-2xl text-[#a81b81]' />
            <AiFillCaretDown className="text-xl text-[#a81b81]" />
          </div>
          <div className={`absolute top-8 -right-4 bg-gray-100 text-black z-10 ${active ? 'flex flex-col gap-1 px-3 py-1 border-[#a81b81] border-[1px] rounded-xl' : 'hidden'}`}>
            <div
              className='flex items-center gap-1 cursor-pointer'
              onClick={() => {
                changeLanguage('ru')
                setActive(false)
              }}>
              <RU title="United States" className='block z-40 h-4' />
              <span>RU</span>
            </div>
            <div
              className='flex items-center gap-1 cursor-pointer'
              onClick={() => {
                changeLanguage('en')
                setActive(false)
              }}>
              <GB title="United States" className='block z-40 h-4' />
              <span>EN</span>
            </div>
            <div
              className='flex items-center gap-2 cursor-pointer'
              onClick={() => {
                changeLanguage('uz')
                setActive(false)
              }}>
              <UZ title="United States" className='block z-40 h-4' />
              <span>UZ</span>
            </div>
          </div>
        </div>

        <div className='realtive cursor-pointer text-black flex lg:hidden items-center justify-center text-xl'>
          <MdOutlineFileDownload className='text-3xl font-medium text-[#a81b81]' onClick={() => setDownload(!download)} />
          <div className={`absolute top-[100px] right-3  bg-gray-100 z-10 ${download ? 'flex flex-col gap-1 px-3 py-1 border-[#a81b81] border-[1px] rounded-xl' : 'hidden'}`}>
            <p>{t("Catalogue text")}</p>
            <div className='flex gap-4'>
              <a
                className='flex items-center gap-1'
                href="https://drive.google.com/file/d/11GZjEENskrRGpY7Uu5OyiE8dIod0ww3e/view?usp=share_link"
                target="_blank"
                onClick={() => setDownload(false)}
              >
                <RU title="Russia" className='block z-40 h-4' />
                <span>RU</span>
              </a>
              <a
                className='flex items-center gap-1'
                href="https://drive.google.com/file/d/1sTUN4y0Igr19Zwv8Q6naKOhr__W-DSPu/view?usp=share_link"
                target="_blank"
                onClick={() => setDownload(false)}
              >
                <GB title="Great Britain" className='block z-40 h-4' />
                <span>EN</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Navbar