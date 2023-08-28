import React from 'react'

const Input = ({ label, placeholder, type, textarea }) => {
  return (
    <>
      <div className='Lexend flex flex-col justify-center'>
        <label className='text-white' htmlFor="">{label}</label>
        {!textarea ? <input className='px-4 py-3 mt-1 outline-none border border-textGray text-white bg-darkGray rounded-lg' type={type} placeholder={placeholder} /> : <textarea className='px-4 py-3 h-28 resize-none mt-1 outline-none border border-textGray text-white bg-darkGray rounded-lg' placeholder={placeholder} ></textarea>}
      </div>

      
    </>
  )
}

export default Input