import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({ link, items, title }) => {
  const [show, setShow] = useState(false)
  return (
    <>
      {
        link ?
          <Link to={link?.url} className='select-none bg-darkGray py-2 px-3 rounded-lg'>{link?.title}</Link>
          :
          <div>
            <div onClick={() => { setShow(!show) }} className='select-none cursor-pointer bg-darkGray py-2 px-3 rounded-lg'>
              {title}
            </div>
            <div className={show ? 'bg-darkGray rounded-lg flex flex-col mt-2' : "hidden"}>
              {
                items?.map((item) => {
                  return <Link to={item?.url} className='select-none text-sm py-2 px-3 rounded-lg'>{item?.title}</Link>
                })
              }
            </div>
          </div>
      }
    </>
  )
}

export default NavItem