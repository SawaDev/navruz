import React from 'react'
import Heading from '../components/Heading'
import { products } from "../dummyData.js"
import { Link } from "react-router-dom"
import Button from '../components/Button'

const Products = () => {
  return (
    <div className=''>
      <Heading text="Our" title="Products" />
      <section className='flex flex-wrap justify-around g-5'>
        {products.map((product, index) => (
          <div key={index} className='outline flex flex-col items-center mt-7 py-10 px-10 rounded-xl last-of-type:mb-10'>
            <div className='max-w-[250px] max-h-[250px] overflow-hidden'>
              <img src={product.content[0].img} className="h-full w-full object-contain" />
            </div>
            <div>
              <h1 className='text-3xl text-white font-semibold mt-4 px-5 py-3 bg-[#e7316d] w-fit rounded-tl-[28px] rounded-br-[28px]'>Fruit Jelly</h1>
              <h1 className='text-3xl text-white font-semibold -mt-2 ml-2 mb-5 px-5 py-2 bg-[#804896] w-fit rounded-tl-[34px] rounded-br-[34px] capitalize'>{product.content[0].type}</h1>
            </div>
            <Link to={`/categories/jelly/${index}`}>
              <Button text="See more" />
            </Link>
          </div>
        ))}
      </section >
    </div>
  )
}

export default Products