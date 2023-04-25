import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa"
import { logo_white } from "./assets/index.js"
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import About from './pages/About';
import Contact from './pages/Contact';
import { useTranslation } from "react-i18next"
import { useEffect, useState } from 'react';
import ScrollToTop from './ScrollToTop';
import { motion } from "framer-motion"

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const { t } = useTranslation()

  useEffect(() => {
    
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 0;
      setShowNavbar(visible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);



  return (
    <BrowserRouter>
      <main>
        <motion.div
          whileInView={{ y: [-20, 0], opacity: [0.5, 1] }}
          transition={{ duration: 0.5 }}
          className={`${showNavbar ? 'sticky navbar top-0 left-0 right-0 z-10 shadow-sm' : 'relative'}`}>
          <Navbar />
        </motion.div>

        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/categories/jelly/:id' element={<SingleProduct />} />
        </Routes>

        <div className='bg-[#a81b81]'>
          <section className='flex flex-col sm:flex-row gap-10 flex-wrap py-5 text-white'>
            <div className='flex flex-col flex-1 text-left'>
              <div>
                <img src={logo_white} className="max-h-12 object-contain" />
              </div>
              <p className='text-gray-300 mb-3'>{t("footer desc")}</p>
              <div className='icons flex gap-2'>
                <a href='https://www.facebook.com/frutti.uz/' className='p-2 text-lg border-2 rounded-full opacity-70 hover:opacity-100 drop-shadow-lg hover:shadow-white '>
                  <FaFacebookF />
                </a>
                <a href='https://www.instagram.com/frutti.uz/' className='p-2 text-lg border-2 rounded-full opacity-70 hover:opacity-100 shadow-sm hover:shadow-white '>
                  <FaInstagram />
                </a>
                <a href="https://telegram.me/frutti_uzb" className='p-2 text-lg border-2 rounded-full opacity-70 hover:opacity-100 shadow-sm hover:shadow-white '>
                  <FaTelegramPlane />
                </a>
                <a className='p-2 text-lg border-2 rounded-full opacity-70 hover:opacity-100 shadow-sm hover:shadow-white '>
                  <FaWhatsapp />
                </a>
              </div>
            </div>
            <div className='flex flex-col flex-1'>
              <h1 className='font-semibold text-lg mb-3'>{t("links")}</h1>
              <Link to="/">
                <p className='italic text-gray-300 cursor-pointer ease-in duration-100 hover:pl-1 hover:text-white'>{t("Home")}</p>
              </Link>
              <Link to="/about">
                <p className='italic text-gray-300 cursor-pointer ease-in duration-100 hover:pl-1 hover:text-white'>{t("About Us")}</p>
              </Link>
              <Link to="/products">
                <p className='italic text-gray-300 cursor-pointer ease-in duration-100 hover:pl-1 hover:text-white'>{t("Products")}</p>
              </Link>
              <Link to="/contact">
                <p className='italic text-gray-300 cursor-pointer ease-in duration-100 hover:pl-1 hover:text-white'>{t("Contact Us")}</p>
              </Link>
            </div>
            <div className='flex flex-col flex-1'>
              <h1 className='font-semibold text-lg mb-3'>{t("Contact Us")}</h1>
              <div>
                <p className='font-semibold text-gray-300'>{t("manager")}: <a href="tel:+998955555688" className='font-light hover:text-white'>+998 95 555-56-88</a></p>
                <p className='font-semibold text-gray-300'>{t("phone")}: <a href="tel:+998998777577" className='font-light hover:text-white'>+998 99 877-75-77</a></p>
                <p className='font-semibold text-gray-300'>{t("Email")}: <a href="mailto:jelenavruz@gmail.com" className='font-light hover:text-white'>jelenavruz@gmail</a></p>
              </div>
            </div>
          </section>
        </div>

      </main>
    </BrowserRouter>
  )
}

export default App
