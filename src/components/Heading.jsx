import React from 'react'
import { motion } from 'framer-motion'
import { zoomIn } from '../utils/motion'

const Heading = ({ title, text }) => {
  return (
    <motion.div
      variants={ zoomIn(0, 0.7)}
      initial="hidden"
      whileInView='show'
      viewport={{ once: true }}
      className='flex flex-col gap-4 sm:gap-0 sm:flex-row items-center justify-center mt-12 mb-12'>
      <h1 className='text-center text-3xl sm:text-5xl'>{text}</h1>
      <span className='heading text-4xl sm:text-5xl font-medium '>{title}</span>
    </motion.div>
  )
}

export default Heading