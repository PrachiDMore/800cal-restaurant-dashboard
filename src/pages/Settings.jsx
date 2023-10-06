import React, { useState } from 'react'
import Layout from '../components/Layout'
import RestoProfile from '../components/RestoProfile'
import Input from '../components/Input'
import { UseAuthContext } from '../context/Auth'

const Settings = () => {
  const [showResto, setShowResto] = useState(false)
  const { user } = UseAuthContext();

  return (
    <>
      <Layout>
        <div className='w-4/5  Lexend'>
          {/* topbar */}
          <div className='w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold'>
            Settings
            <img onClick={() => { setShowResto(true) }} className='border-green border-2 rounded-3xl p-1 h-12 w-12' src="/assets/resto.png" alt="" />
          </div>

          <div className='w-full p-5 grid gap-5'>
            <div className='grid gap-1'>
              <h1 className='text-lg font-semibold'>Owner Details</h1>
              <div className='grid grid-cols-3 gap-4'>
                <Input value={user?.ownername} type={"text"} label={"Name"} placeholder={"Enter name of owner"} />
                <Input value={user?.ownernumber} type={"text"} label={"Number"} placeholder={"Enter number of owner"} />
                <Input value={user?.owneremail} type={"email"} label={"Email"} placeholder={"Enter email of owner"} />
              </div>
            </div>
            <div className='grid gap-1'>
              <h1 className='text-lg font-semibold'>Manager Details</h1>
              <div className='grid grid-cols-3 gap-4'>
                <Input value={user?.managername} type={"text"} label={"Name"} placeholder={"Enter name of owner"} />
                <Input value={user?.managernumber} type={"text"} label={"Number"} placeholder={"Enter number of owner"} />
                <Input value={user?.manageremail} type={"email"} label={"Email"} placeholder={"Enter email of owner"} />
              </div>
            </div>
            <div className='grid gap-1'>
              <h1 className='text-lg font-semibold'>Contact Details</h1>
              <div className='grid grid-cols-3 gap-4'>
                <Input value={user?.contactname} type={"text"} label={"Name"} placeholder={"Enter name of owner"} />
                <Input value={user?.contactnumber} type={"text"} label={"Number"} placeholder={"Enter number of owner"} />
                <Input value={user?.contactemail} type={"email"} label={"Email"} placeholder={"Enter email of owner"} />
              </div>
            </div>
            <Input value={user?.ordersCanAccept} type={"number"} label={"How many meals can I accept"} placeholder={"Enter number of owner"} />

          </div>
        </div>
      </Layout>
      <RestoProfile showResto={showResto} setShowResto={setShowResto} />
    </>
  )
}

export default Settings