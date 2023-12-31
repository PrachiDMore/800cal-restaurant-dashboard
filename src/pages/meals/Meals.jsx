import React, { useState } from 'react'
import Layout from '../../components/Layout'
import Button from '../../components/Button'
import { BiEditAlt } from "react-icons/bi"
import { RiDeleteBinLine } from "react-icons/ri"
import RestoProfile from '../../components/RestoProfile'
import { UseMealsContext } from '../../context/Meals'
import { Link } from 'react-router-dom'

const Meals = () => {
  const { meals } = UseMealsContext();
  const [showResto, setShowResto] = useState(false)
  return (
    <>
      <Layout>
        <div className='w-4/5  Lexend'>
          {/* topbar */}
          <div className='w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold'>
            Meals
            <img onClick={() => { setShowResto(!showResto) }} className='border-green border-2 rounded-3xl p-1 h-12 w-12' src="/assets/resto.png" alt="" />
          </div>

          <div className='w-full p-5 grid gap-4'>
            <div className='w-full flex gap-4 '>
              <input className='w-full outline-none bg-darkGray rounded-lg px-4 py-3' type="text" placeholder='Search...' />
              {/* <Button text={"Add Food"} onClick={() => {  }} className={"w-1/6"} /> */}
            </div>

            <div className='hidden gap-4 '>
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
                    <th className="px-6 py-3">Program</th>
                    <th className="px-6 py-3">Apply</th>
                  </tr>
                </thead>

                <tbody className='text-sm'>
                  {
                    meals?.map((data) => {
                      return <tr className="border-b border-mediumGray">
                        <th className="px-6 py-4 "><Link to={`/meal/${data._id}`}>#{data._id?.slice(20)}</Link></th>
                        <td className="px-6 py-4">
                          <img className='h-10 w-10 rounded-md' src={data?.logo} alt="" />
                        </td>
                        <td className="px-6 py-4">{data?.name}</td>
                        <td className="px-6 py-4">{data?.program?.name}</td>
                        <td className="px-6 py-4 cursor-pointer"><Link to={`/meal/${data._id}`}>View</Link></td>
                      </tr>
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>
      <RestoProfile setShowResto={setShowResto} showResto={showResto} />
    </>
  )
}

export default Meals