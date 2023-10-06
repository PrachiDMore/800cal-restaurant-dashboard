import React, { useState } from 'react'
import Layout from '../components/Layout'
import RestoProfile from '../components/RestoProfile'
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const NewOrders = () => {
  const [showResto, setShowResto] = useState(false)

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/order-details');
  }

  return (
    <>
      <Layout>
        <div className='w-4/5 Lexend overflow-hidden'>
          {/* topbar */}
          <div className='w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold'>
            New Orders
            <img onClick={() => { setShowResto(true) }} className='border-green border-2 rounded-3xl p-1 h-12 w-12' src="/assets/resto.png" alt="" />
          </div>

          <div className='w-full p-5 grid gap-4'>
            <div className='w-full'>
              <input className='w-full outline-none bg-darkGray rounded-lg px-4 py-2' type="text" placeholder='Search...' />
            </div>

            <div className='flex gap-4'>
              <Button buttonClassName={"w-auto px-3 py-1"} text={"Excel"} />
              <Button buttonClassName={"w-auto px-3 py-1"} text={"Print"} />
            </div>

            <div className="w-full text-white h-[69vh] overflow-auto rounded-lg">
              <table className="w-full text-left bg-darkGray ">
                <thead className='sticky top-0 overflow-hidden '>
                  <tr className='bg-mediumGray rounded-t-lg'>
                    <th className="px-6 py-3">
                      Id
                    </th>
                    <th className="px-6 py-3">
                      Customer
                    </th>
                    <th className="px-6 py-3">
                      Date
                    </th>
                    <th className="px-6 py-3">
                      Description
                    </th>
                    <th className="px-6 py-3">
                      Quantity
                    </th>
                    <th className="px-6 py-3">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody className='text-sm'>
                  <tr onClick={handleClick} className="border-b border-mediumGray cursor-pointer">
                    <th className="px-6 py-4 ">
                      #123
                    </th>
                    <td className="px-6 py-4">
                      <div className='flex gap-1 items-center'>
                        <img className='h-8 w-8' src="/assets/profile.png" alt="" />
                        <div>
                          <p>John Doe</p>
                          <p className='text-xs text-mediumGray'>Garden view park, Kuwait</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      12th July, 2023 23:00
                    </td>
                    <td className="px-6 py-4">
                      Home delivery
                    </td>
                    <td className="px-6 py-4">
                      1
                    </td>
                    <td className="px-6 py-4">
                      Being delivered
                    </td>
                  </tr>
                  <tr onClick={handleClick} className="cursor-pointer">
                    <th className="px-6 py-4 ">
                      #123
                    </th>
                    <td className="px-6 py-4">
                      <div className='flex gap-1 items-center'>
                        <img className='h-8 w-8' src="/assets/profile.png" alt="" />
                        <div>
                          <p>John Doe</p>
                          <p className='text-xs text-mediumGray'>Garden view park, Kuwait</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      12th July, 2023 23:00
                    </td>
                    <td className="px-6 py-4">
                      Home delivery
                    </td>
                    <td className="px-6 py-4">
                      1
                    </td>
                    <td className="px-6 py-4">
                      Being delivered
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>
      <RestoProfile showResto={showResto} setShowResto={setShowResto} />
    </>
  )
}

export default NewOrders