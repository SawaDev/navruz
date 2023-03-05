import React from 'react'
import "./style.css"

const Button = ({ text }) => {
  return (
    <div className='button button--wapasha '>
      <span>{text}</span>
    </div>
  )
}

export default Button