import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import RestoProfile from '../components/RestoProfile'
import Input from '../components/Input'
import { UseAuthContext } from '../context/Auth'
import Button from '../components/Button'
import axios from 'axios'

const Settings = () => {
  const [showResto, setShowResto] = useState(false)
  const initialFormState = {
    ownername: "",
    ownernumber: "",
    owneremail: "",
    managername: "",
    managernumber: "",
    manageremail: "",
    contactname: "",
    contactnumber: "",
    contactemail: "",
    ordersCanAccept: 0
  }

  const [formState, setFormState] = useState(initialFormState)

  useEffect(() => {
    axios(`${process.env.REACT_APP_BASE_URL}/restaurant/profile`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then((res) => {
        console.log(res.data)
        setFormState(res.data.restaurant)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])


  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value
    })
  }

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
                <Input onChange={handleChange} id={"ownername"} value={formState?.ownername} type={"text"} label={"Name"} placeholder={"Enter name of owner"} />
                <Input onChange={handleChange} id={"ownernumber"} value={formState?.ownernumber} type={"text"} label={"Number"} placeholder={"Enter number of owner"} />
                <Input onChange={handleChange} id={"owneremail"} value={formState?.owneremail} type={"email"} label={"Email"} placeholder={"Enter email of owner"} />
              </div>
            </div>
            <div className='grid gap-1'>
              <h1 className='text-lg font-semibold'>Manager Details</h1>
              <div className='grid grid-cols-3 gap-4'>
                <Input onChange={handleChange} id={"managername"} value={formState?.managername} type={"text"} label={"Name"} placeholder={"Enter name of owner"} />
                <Input onChange={handleChange} id={"managernumber"} value={formState?.managernumber} type={"text"} label={"Number"} placeholder={"Enter number of owner"} />
                <Input onChange={handleChange} id={"manageremail"} value={formState?.manageremail} type={"email"} label={"Email"} placeholder={"Enter email of owner"} />
              </div>
            </div>
            <div className='grid gap-1'>
              <h1 className='text-lg font-semibold'>Contact Details</h1>
              <div className='grid grid-cols-3 gap-4'>
                <Input onChange={handleChange} id={"contactname"} value={formState?.contactname} type={"text"} label={"Name"} placeholder={"Enter name of owner"} />
                <Input onChange={handleChange} id={"contactnumber"} value={formState?.contactnumber} type={"text"} label={"Number"} placeholder={"Enter number of owner"} />
                <Input onChange={handleChange} id={"contactemail"} value={formState?.contactemail} type={"email"} label={"Email"} placeholder={"Enter email of owner"} />
              </div>
            </div>
            <Input onChange={handleChange} id={"ordersCanAccept"} value={formState?.ordersCanAccept} type={"text"} label={"How many meals can I accept"} placeholder={"Enter number of order"} />
            <Button text={"Submit"} onClick={() => {
              axios(`${process.env.REACT_APP_BASE_URL}/restaurant/update`, {
                method: "PATCH",
                data: formState,
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`
                }
              })
                .then((res) => {
                  console.log(res.data)
                })
                .catch((err) => {
                  alert(err.message);
                })
            }} />
          </div>
        </div>
      </Layout>
      <RestoProfile showResto={showResto} setShowResto={setShowResto} />
    </>
  )
}

export default Settings