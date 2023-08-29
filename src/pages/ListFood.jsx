import React, { useState } from 'react'
import Layout from '../components/Layout'
import Button from '../components/Button'
import { BiEditAlt } from "react-icons/bi"
import { RiDeleteBinLine } from "react-icons/ri"
import AddFoodModal from '../components/AddFoodModal'
import RestoProfile from '../components/RestoProfile'

const ListFood = () => {
  const [showModal, setShowModal] = useState(false)
  const [showResto, setShowResto] = useState(false)

  return (
    <>
      <Layout>
        <div className='w-4/5  Lexend'>
          {/* topbar */}
          <div className='w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold'>
            Food Items
            <img onClick={() => { setShowResto(true) }} className='border-green border-2 rounded-3xl p-1 h-12 w-12' src="/assets/resto.png" alt="" />
          </div>

          <div className='w-full p-5'>
            <div className='w-full flex gap-4 '>
              <input className='w-5/6 outline-none bg-darkGray rounded-lg px-4 py-2' type="text" placeholder='Search...' />
              <Button text={"Add Food"} onClick={() => { setShowModal(true) }} className={"w-1/6"} />
            </div>

            <div className="w-full text-white mt-4 overflow-hidden rounded-lg">
              <table className="w-full text-left bg-darkGray ">
                <thead className='overflow-hidden '>
                  <tr className='bg-mediumGray rounded-t-lg'>
                    <th className="px-6 py-3">Id</th>
                    <th className="px-6 py-3">Image</th>
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Program</th>
                    <th className="px-6 py-3">Badges</th>
                    <th className="px-6 py-3">Action</th>
                  </tr>
                </thead>

                <tbody className='text-sm'>
                  <tr className="border-b border-mediumGray">
                    <th className="px-6 py-4 ">#123</th>
                    <td className="px-6 py-4">
                      <img className='h-8 w-8 rounded-md' src="/assets/food.png" alt="" />
                    </td>
                    <td className="px-6 py-4">Pancake</td>
                    <td className="px-6 py-4">Weight Gain</td>
                    <td className="px-6 py-4">Healthy</td>
                    <td className="px-6 py-4">
                      <div className='flex items-center gap-6 text-lg'>
                        <BiEditAlt className='hover:cursor-pointer text-green' />
                        <RiDeleteBinLine className='hover:cursor-pointer text-red-600' />
                      </div>
                    </td>
                  </tr>
                  <tr className="">
                    <th className="px-6 py-4 ">#456</th>
                    <td className="px-6 py-4">
                      <img className='h-8 w-8 rounded-md' src="/assets/food.png" alt="" />
                    </td>
                    <td className="px-6 py-4">Pancake</td>
                    <td className="px-6 py-4">Weight Gain</td>
                    <td className="px-6 py-4">Healthy</td>
                    <td className="px-6 py-4">
                      <div className='flex items-center gap-6 text-lg'>
                        <BiEditAlt className='hover:cursor-pointer text-green' />
                        <RiDeleteBinLine className='hover:cursor-pointer text-red-600' />
                      </div>
                    </td>
                  </tr>

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