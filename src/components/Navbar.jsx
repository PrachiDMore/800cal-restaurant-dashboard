import React from 'react'
import { Link } from 'react-router-dom'
import NavItem from './NavItem'

const Navbar = () => {
  return (
    <>
      <div className='w-1/5 p-5 Lexend border-r border-textGray'>
        <div>
          <img className='h-20 w-20' src="/assets/logo.png" alt="" />
        </div>
        <div className='text-white grid grid-cols-1 gap-2'>
          <NavItem link={{
            url: "/home",
            title: "Home"
          }} />
          <NavItem link={{
            url: "/list-foods",
            title: "Add Food"
          }} />
          <NavItem title={"Orders"} items={[
            {
              url: "/all-orders",
              title: "All Orders"
            },
            {
              url: "/new-orders",
              title: "New Orders"
            },
            {
              url: "/",
              title: "Confirmed Orders"
            },
            {
              url: "/",
              title: "Complete Orders"
            },
            {
              url: "/",
              title: "Cancelled Orders"
            }
          ]} />
          <p className='bg-darkGray py-2 px-3 rounded-lg'>Accounts</p>
          <p className='bg-darkGray py-2 px-3 rounded-lg'>Reviews</p>
          <p className='bg-darkGray py-2 px-3 rounded-lg'>Programs</p>
          <NavItem link={{
            url: "/rider",
            title: "Rider"
          }} />
          <NavItem link={{
            url: "/settings",
            title: "Settings"
          }} />
        </div>
      </div>
    </>
  )
}

export default Navbar