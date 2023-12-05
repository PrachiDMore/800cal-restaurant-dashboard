import React from 'react'
import NavItem from './NavItem'
import { AiFillHome, AiFillStar } from 'react-icons/ai';
import { MdOutlineAddToPhotos } from 'react-icons/md';
import { IoMdSettings } from 'react-icons/io'
import { TbTruckDelivery } from 'react-icons/tb'
import { BsBox } from 'react-icons/bs'
import { BiWallet } from 'react-icons/bi'
import { UseOrderContext } from '../context/Order';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { orders } = UseOrderContext();
  const navigate = useNavigate();
  return (
    <>
      <div className='w-1/5 p-5 Lexend border-r border-textGray max-h-screen h-screen overflow-hidden'>
        <div>
          <img className='h-20 w-20' src="/assets/logo.png" alt="" />
        </div>
        <div className='text-white grid grid-cols-1 gap-2'>
          <NavItem link={{
            url: "/home",
            title: "Home",
          }} />
          <NavItem title={"Ingredients"} order={false} items={[
            {
              url: "/ingredients",
              title: "List Ingredients",
            },
            {
              url: "/ingredients/create",
              title: "Add Ingredients",
            },
          ]} />
          <NavItem link={{
            url: "/list-foods",
            title: "List Foods",
          }} />
          <NavItem title={"Orders"} icon={<BsBox />} order={true} items={[
            {
              url: "/all-orders",
              title: "All Orders",
              number: orders?.length
            },
            {
              url: "/new-orders",
              title: "New Orders",
              number: orders?.length
            },
            // {
            //   url: "/confirmed-orders",
            //   title: "Confirmed Orders",
            //   number: orders?.length
            // },
            // {
            //   url: "/complete-orders",
            //   title: "Complete Orders",
            //   number: orders?.length
            // },
            // {
            //   url: "/cancel-orders",
            //   title: "Cancelled Orders",
            //   number: orders?.length
            // }
          ]} />
          {/* <NavItem title={"Accounts"} icon={<BiWallet />} order={false} items={[
            {
              url: "/statement",
              title: "Statement"
            },
            {
              url: "/withdrawals",
              title: "Withdrawals"
            }
          ]} /> */}
          <NavItem link={{
            url: "/withdrawals",
            title: "Withdrawals"
          }} />
          {/* <NavItem title={"Accounts"} icon={<BiWallet />} order={false} items={[
            {
              url: "/statement",
              title: "Statement"
            },
            {
              url: "/withdrawals",
              title: "Withdrawals"
            }
          ]} /> */}
          {/* <NavItem link={{
            url: "/reviews",
            title: "Reviews",
            icon: <AiFillStar />
          }} /> */}
          <NavItem link={{
            url: "/programs",
            title: "Programs",
            icon: <TbTruckDelivery />
          }} />
          <NavItem link={{
            url: "/meals",
            title: "Meals",
            icon: <TbTruckDelivery />
          }} />
          <NavItem link={{
            url: "/rider",
            title: "Rider",
            icon: <TbTruckDelivery />
          }} />
          <NavItem link={{
            url: "/settings",
            title: "Settings",
            icon: <IoMdSettings />
          }} />
          <span onClick={() => {
            localStorage.setItem("token", "");
            navigate("/")
          }}>
            <NavItem title={"Logout"} />
          </span>
        </div>
      </div>
    </>
  )
}

export default Navbar