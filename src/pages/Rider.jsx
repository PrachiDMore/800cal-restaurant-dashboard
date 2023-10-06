import React, { useState } from 'react'
import Layout from '../components/Layout'
import RestoProfile from '../components/RestoProfile'
import Button from '../components/Button'
import { BiEditAlt } from "react-icons/bi"
import { RiDeleteBinLine } from "react-icons/ri"
import AddRider from '../components/AddRider'
import { UseRiderContext } from '../context/Rider'

const Rider = () => {
  const [showResto, setShowResto] = useState(false)
  const [addRider, setAddRider] = useState(false)
  const { rider } = UseRiderContext()
  console.log(rider)
  return (
    <>
      <Layout>
        <div className='w-4/5  Lexend'>
          {/* topbar */}
          <div className='w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold'>
            Rider
            <img onClick={() => { setShowResto(true) }} className='border-green border-2 rounded-3xl p-1 h-12 w-12' src="/assets/resto.png" alt="" />
          </div>

          <div className='w-full p-5 grid gap-4'>
            <div className='w-full flex gap-4 '>
              <input className='w-5/6 outline-none bg-darkGray rounded-lg px-4 py-2' type="text" placeholder='Search...' />
              <Button text={"Add Rider"} onClick={() => { setAddRider(true) }} className={"w-1/6"} />
            </div>

            <div className='flex gap-4 '>
              <Button buttonClassName={"w-auto px-3 py-1"} text={"Excel"} />
              <Button buttonClassName={"w-auto px-3 py-1"} text={"Print"} />
            </div>

            <div className="w-full text-white  overflow-hidden rounded-lg">
              <table className="w-full text-left bg-darkGray ">
                <thead className='overflow-hidden '>
                  <tr className='bg-mediumGray rounded-t-lg'>
                    <th className="px-6 py-3">Id</th>
                    <th className="px-6 py-3">Image</th>
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Username</th>
                    <th className="px-6 py-3">Email</th>
                    <th className="px-6 py-3">Phone Number</th>
                    <th className="px-6 py-3">Action</th>
                  </tr>
                </thead>

                <tbody className='text-sm'>
                  {
                    rider?.map((data) => {
                      console.log(data)
                      return <tr className="border-b border-mediumGray">
                        <th className="px-6 py-4 ">#{data?._id?.slice(20)}</th>
                        <td className="px-6 py-4">
                          <img className='h-8 w-8 rounded-md' src={"/assets/profile.png"} alt="" />
                        </td>
                        <td className="px-6 py-4">{data?.firstname} {data?.lastname}</td>
                        <td className="px-6 py-4">{data?.username}</td>
                        <td className="px-6 py-4">{data?.email}</td>
                        <td className="px-6 py-4">{data?.phonenumber}</td>
                        <td className="px-6 py-4">
                          <div className='flex items-center gap-6 text-lg'>
                            <BiEditAlt className='hover:cursor-pointer text-green' />
                            <RiDeleteBinLine className='hover:cursor-pointer text-red-600' />
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
      <RestoProfile showResto={showResto} setShowResto={setShowResto} />
      <AddRider setAddRider={setAddRider} addRider={addRider} />
    </>
  )
}

export default Rider