import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ className, text, link, onClick, type, buttonClassName }) => {
  return (
    <>
      {link ? <div className={'Lexend flex items-center  ' + className}>
        <Link to={link} className={'w-full bg-lightgreen text-white text-center px-5 py-3 rounded-lg hover:bg-darkgreen duration-300 ' + buttonClassName}>{text}</Link>
      </div> : <div className={'Lexend flex items-center  ' + className}>
        <button type={type} onClick={onClick} className={'w-full bg-lightgreen text-white text-center px-5 py-3 rounded-lg hover:bg-darkgreen duration-300 ' + buttonClassName}>{text}</button>
      </div>}
    </>
  )
}

export default Button