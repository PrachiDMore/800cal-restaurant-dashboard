import React from 'react'

const Select = ({ label, onChange, value, id, options, disabled = false }) => {
  return (
    <>
      <div className='Lexend flex flex-col justify-center'>
        <label className='text-white' htmlFor={id}>{label}</label>
        <select disabled={disabled} id={id} value={value} onChange={onChange} className='px-4 py-3 mt-1 outline-none border border-textGray text-white bg-darkGray rounded-lg'>
          {
            options?.map((option) => {
              return <option value={option.value}>{option.label}</option>
            })
          }
        </select>
      </div>
    </>
  )
}

export default Select