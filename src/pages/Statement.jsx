import React, { useState } from 'react'
import Layout from '../components/Layout'
import Button from '../components/Button'
import RestoProfile from '../components/RestoProfile'
import Input from '../components/Input'

const Statement = () => {
  const [showResto, setShowResto] = useState(false)

  return (
    <>
      <Layout>
        <div className='w-4/5  Lexend'>
          {/* topbar */}
          <div className='w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold'>
            Statement
            <img onClick={() => { setShowResto(true) }} className='border-green border-2 rounded-3xl p-1 h-12 w-12' src="/assets/resto.png" alt="" />
          </div>

          <div className='w-full p-5 grid gap-4'>
            <h1 className='text-xl font-medium'>Transaction History</h1>
            <div className='bg-darkGray rounded-md w-full flex justify-between p-5'>
              <div className=''>
                <h1 className='font-medium text-lg'>Earnings</h1>
                <p className='text-sm text-textGray'>Your sales, cash in and referral earnings</p>
              </div>
              <div>
                <p className='text-sm text-textGray'>Available Balance: <span className='text-lg text-white font-medium'>$998750.00</span></p>
              </div>
              <div>
                <Button text={"Create a transaction"}/>
              </div>
            </div>

            <div className='w-full flex items-center gap-3'>
              <Input type={"date"} placeholder={"Start Date"}/>
              <Input type={"date"} placeholder={"End Date"}/>
              <Input type={"text"} placeholder={"All transaction"}/>
            </div>

            <div className='flex gap-4 '>
              <Button buttonClassName={"w-auto px-3 py-1"} text={"Excel"} />
              <Button buttonClassName={"w-auto px-3 py-1"} text={"Print"} />
            </div>

            <div className="w-full text-white  overflow-hidden rounded-lg">
              <table className="w-full text-left bg-darkGray ">
                <thead className='overflow-hidden '>
                  <tr className='bg-mediumGray rounded-t-lg'>
                    <th className="px-6 py-3">Date</th>
                    <th className="px-6 py-3">Transaction</th>
                    <th className="px-6 py-3">Debit/Credit</th>
                    <th className="px-6 py-3">Running Balance</th>
                  </tr>
                </thead>

                <tbody className='text-sm'>
                  <tr className="border-b border-mediumGray">
                    <th className="px-6 py-4 ">Fri, September 29, 2023</th>
                    <td className="px-6 py-4">Payout to 78****78</td>
                    <td className="px-6 py-4">($10.00)</td>
                    <td className="px-6 py-4">$998750.00</td>
                  </tr>
                  <tr className="">
                    <th className="px-6 py-4 ">Fri, September 29, 2023</th>
                    <td className="px-6 py-4">Payout to 78****78</td>
                    <td className="px-6 py-4">($10.00)</td>
                    <td className="px-6 py-4">$998750.00</td>
                  </tr>
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

export default Statement