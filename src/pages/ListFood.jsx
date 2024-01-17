import React, { useState } from 'react'
import Layout from '../components/Layout'
import Button from '../components/Button'
import { BiEditAlt } from "react-icons/bi"
import { RiDeleteBinLine } from "react-icons/ri"
import AddFoodModal from '../components/AddFoodModal'
import RestoProfile from '../components/RestoProfile'
import { UseFoodContext } from '../context/Food'

const ListFood = () => {
  const [showModal, setShowModal] = useState({ show: false, update: false, data: undefined });
  const [showResto, setShowResto] = useState(false);
  const { food } = UseFoodContext();

  return (
    <>
      <Layout>
        <div className='w-4/5  Lexend overflow-hidden'>
          {/* topbar */}
          <div className='w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold'>
            Food Items
          </div>

          <div className='w-full p-5 grid gap-4'>
            <div className='w-full flex gap-4 '>
              <input className='w-5/6 outline-none bg-darkGray rounded-lg px-4 py-2' type="text" placeholder='Search...' />
              <Button text={"Add Food"} onClick={() => { setShowModal({ show: true, update: false, data: undefined }) }} className={"w-1/6"} />
            </div>

            <div className='hidden gap-4 '>
              <Button buttonClassName={"w-auto px-3 py-1"} text={"Excel"} />
              <Button buttonClassName={"w-auto px-3 py-1"} text={"Print"} />
            </div>

            <div className="w-full text-white h-[88vh] overflow-auto rounded-lg">
              <table className="w-full text-left bg-darkGray ">
                <thead className='sticky top-0 overflow-hidden '>
                  <tr className='bg-mediumGray rounded-t-lg'>
                    <th className="px-6 py-3">Id</th>
                    <th className="px-6 py-3">Image</th>
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Badges</th>
                    <th className="px-6 py-3">Action</th>
                  </tr>
                </thead>

                <tbody className='text-sm'>
                  {
                    food?.map((data, index) => {
                      return <tr key={index} className="border-b border-mediumGray">
                        <th className="px-6 py-4 ">#{data._id?.slice(20)}</th>
                        <td className="px-6 py-4">
                          <img className='h-8 w-8 rounded-md' src={data?.image} alt="" />
                        </td>
                        <td className="px-6 py-4">{data?.name}</td>
                        <td className="px-6 py-4">{data?.badge}</td>
                        <td className="px-6 py-4">
                          <div className='flex items-center gap-6 text-lg'>
                            <BiEditAlt onClick={() => setShowModal({ show: true, update: true, data: data })} className='hover:cursor-pointer text-green' />
                            {/* <RiDeleteBinLine className='hover:cursor-pointer text-red-600' /> */}
                          </div>
                        </td>
                      </tr>
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>
      <AddFoodModal setShowModal={setShowModal} showModal={showModal} />
      <RestoProfile setShowResto={setShowResto} showResto={showResto} />
    </>
  )
}

export default ListFood