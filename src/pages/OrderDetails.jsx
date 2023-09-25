import React, { useState } from 'react'
import Layout from '../components/Layout'
import RestoProfile from '../components/RestoProfile'
import Button from '../components/Button'
import { BsHandbag } from 'react-icons/bs'
import { FaRegUser } from 'react-icons/fa'
import { SlLocationPin } from 'react-icons/sl'
import { LiaCarSideSolid } from 'react-icons/lia'

const OrderDetails = () => {
  const [showResto, setShowResto] = useState(false)

  return (
    <>
      <Layout>
        <div className='w-4/5  Lexend'>
          {/* topbar */}
          <div className='w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold'>
            Order Details
            <img onClick={() => { setShowResto(true) }} className='border-green border-2 rounded-3xl p-1 h-12 w-12' src="/assets/resto.png" alt="" />
          </div>

          <div className='w-full p-5'>
            <div className='w-full flex justify-between items-center'>
              <h1 className='text-2xl font-medium'>Current Status: <span className='text-green'>Processing</span></h1>
              <div><Button text={"Update Status"} /></div>
            </div>

            <div className='w-full grid gap-5'>
              <div className='w-full flex gap-5 mt-4'>
                <div className='bg-darkGray w-1/2 p-4 grid gap-4 rounded-lg'>
                  <div className='grid gap-1'>
                    <div className='flex items-center gap-6'>
                      <div className='flex items-center gap-3'>
                        <BsHandbag className='text-textGray text-xl' />
                        <p className='text-lg font-medium'>Order #12345</p>
                      </div>
                      <p className='text-xs text-green bg-green/30 rounded-2xl px-4 py-1'>New</p>
                    </div>
                    <div className='ml-12'>
                      <p className='text-sm text-textGray '>Placed on Fri, August 25, 2023 3:38pm</p>
                    </div>
                  </div>
                  <div className='grid gap-1'>
                    <div className='flex items-center gap-6'>
                      <div className='flex items-center gap-3'>
                        <FaRegUser className='text-textGray text-xl' />
                        <p className='text-lg font-medium'>Customer</p>
                      </div>
                    </div>
                    <div className='ml-12'>
                      <p className='text-sm text-textGray '>Mike Dunny <br /> 1234567890 <br /> serviislas@gmail.com</p>
                      <p className='text-xs text-green'>3 Orders</p>
                    </div>
                  </div>
                  <div className='grid gap-1'>
                    <div className='flex items-center gap-6'>
                      <div className='flex items-center gap-3'>
                        <SlLocationPin className='text-textGray text-xl' />
                        <p className='text-lg font-medium'>Delivery Information:</p>
                      </div>
                    </div>
                    <div className='ml-12'>
                      <p className='text-sm text-textGray '>Mike Dunny <br /> 1234567890 <br /> Home: Los Angeles, CA, USA</p>
                      <p className='text-xs text-green'>Get direction</p>
                    </div>
                  </div>
                  <div className='grid gap-2'>
                    <div className='flex items-center gap-6'>
                      <div className='flex items-center gap-3'>
                        <LiaCarSideSolid className='text-textGray text-xl' />
                        <p className='text-lg font-medium'>Assign Driver:</p>
                      </div>
                    </div>
                    <div className='ml-12 '>
                      <Button buttonClassName={"w-auto text-sm px-3 py-1"} text={"Assign Driver"} />
                    </div>
                  </div>
                </div>
                <div className='bg-darkGray w-1/2 p-4 rounded-lg'>
                  <p className='text-lg font-medium'>Summary</p>

                  <div className="w-full text-white mt-4 overflow-hidden rounded-lg">
                    <table className="w-full text-left bg-darkGray ">
                      <tbody className='text-sm'>
                        <tr className="border-b border-mediumGray">
                          <td className="px-6 py-4 ">
                            <img className='h-8 w-8' src="/assets/food.png" alt="" />
                          </td>
                          <td className="px-6 py-4">
                            <p className='text-sm '>1x McFlurry w/ Oreo <br /><span className='text-xs text-textGray'>KWD 53.00</span></p>
                          </td>
                          <td className="px-6 py-4">
                            <p className='text-sm '>KWD 53.00</p>
                          </td>
                        </tr>
                        
                        <tr className="border-b border-mediumGray">
                          <td className="px-6 py-4 ">
                            <img className='h-8 w-8' src="/assets/food.png" alt="" />
                          </td>
                          <td className="px-6 py-4">
                            <p className='text-sm '>1x McFlurry w/ Oreo <br /><span className='text-xs text-textGray'>KWD 53.00</span></p>
                          </td>
                          <td className="px-6 py-4">
                            <p className='text-sm '>KWD 53.00</p>
                          </td>
                        </tr>

                        <tr className="border-b border-mediumGray">
                          <td className="px-6 py-4 ">
                            <p></p>
                          </td>
                          <td className="px-6 py-4 ">
                            <p className='text-sm text-textGray'>Sub total (2 items)</p>
                            <p className='text-sm text-textGray'>Service Fee</p>
                            <p className='text-sm text-textGray'>Delivery Fee</p>
                            <p className='text-sm text-textGray'>Tax (10% include)</p>
                          </td>
                          <td className="px-6 py-4">
                            <p className='text-sm text-textGray'>KWD 106.00</p>
                            <p className='text-sm text-textGray'>KWD 5.00</p>
                            <p className='text-sm text-textGray'>KWD 5.00</p>
                            <p className='text-sm text-textGray'>KWD 10.00</p>
                          </td>
                        </tr>

                        <tr className="">
                          <td className="px-6 py-4 ">
                            <p></p>
                          </td>
                          <td className="px-6 py-4">
                            <p className='text-base '>Total</p>
                          </td>
                          <td className="px-6 py-4">
                            <p className=' '>KWD 126.00</p>
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className='w-full flex gap-5'>
                <Button buttonClassName={"w-auto px-3 py-1"} text={"Print sticker"} />
                <Button buttonClassName={"w-auto px-3 py-1 bg-accent border border-green"} text={"Download invoive"} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <RestoProfile showResto={showResto} setShowResto={setShowResto} />
    </>
  )
}

export default OrderDetails