import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi';

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
                  return <Link to={item?.url} className='flex gap-2 items-center select-none text-sm py-2 px-3 rounded-lg'>
                    <FiChevronRight className='text-green' />
                    <div className='flex justify-between items-center w-full'>
                      <div>{item?.title}</div>
                      <div className='text-xs bg-green/30 font-medium rounded-full px-2 py-1'>2</div>
                    </div>
                  </Link>
                })
              }
            </div>
          </div>
      }
    </>
  )
}

export default NavItem