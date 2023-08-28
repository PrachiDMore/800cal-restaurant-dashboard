import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ className, text, link, onClick }) => {
  return (
    <>
      {link ? <div className={'Lexend flex items-center  ' + className}>
        <Link to={link} className='w-full bg-lightgreen text-white text-center px-4 py-2 rounded-lg hover:bg-darkgreen duration-300'>{text}</Link>
      </div> : <div className={'Lexend flex items-center  ' + className}>
        <button onClick={onClick} className='w-full bg-lightgreen text-white text-center px-4 py-2 rounded-lg hover:bg-darkgreen duration-300'>{text}</button>
      </div>}
    </>
  )
}

export default Button