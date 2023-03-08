import React from 'react'
import "./style.css"
import { useTranslation } from 'react-i18next'

const Button = ({ text }) => {
  const { t } = useTranslation();
  return (
    <div className='button button--wapasha '>
      <span>{t(text)}</span>
    </div>
  )
}

export default Button