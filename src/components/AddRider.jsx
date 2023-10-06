import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import axios from 'axios'

const AddRider = ({addRider, setAddRider}) => {
  const initialState = {
    "firstname": "",
    "lastname": "",
    "username": "",
    "password": "",
    "email": "",
    "phonenumber":"",
    "image": "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
}
  const [formstate, setFormState] = useState(initialState);

  const handleChange = (e) => {
    setFormState({
      ...formstate,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios(`${process.env.REACT_APP_BASE_URL}/rider/signup`, {
      method: "POST",
      data: formstate,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }


  return (
    <>
      <div id="defaultModal" tabindex="-1" aria-hidden="true" className={addRider ? "fixed flex justify-center items-center top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden bg-black/50 overflow-y-auto h-screen opacity-100 duration-500" : "fixed flex justify-center items-center top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden bg-black/50 overflow-y-auto h-screen opacity-0 pointer-events-none duration-500"}>
        <div className="relative w-[80%] max-h-full overflow-y-scroll m-auto">

          <form onSubmit={handleSubmit} className="relative rounded-lg shadow bg-darkGray">

            <div className="flex items-start justify-between p-4 border-b rounded-t border-textGray ">
              <h3 className="text-xl font-semibold text-white">
                Add Rider
              </h3>
              <button onClick={() => { setAddRider(false) }} type="button" className="text-white bg-transparent hover:bg-gray-600 duration-200 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center ">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className='grid grid-cols-2 gap-x-4'>
                <Input value={formstate.firstname} onChange={handleChange} id={"firstname"} label={"Firstname"} type={"text"} placeholder={"Enter firstname"} />
                <Input value={formstate.lastname} onChange={handleChange} id={"lastname"} label={"Name"} type={"text"} placeholder={"Enter lastname"} />
                <Input id={"image"} label={"Image"} type={"file"} placeholder={"Choose Image"} />
                <Input value={formstate.username} onChange={handleChange} id={"username"} label={"Username"} type={"text"} placeholder={"Enter username"} />
                <Input value={formstate.email} onChange={handleChange} id={"email"} label={"Email"} type={"email"} placeholder={"Enter email"} />
                <Input value={formstate.phonenumber} onChange={handleChange} id={"phonenumber"} label={"Phone Number"} type={"number"} placeholder={"Enter phone number"} />
                <Input value={formstate.password} onChange={handleChange} id={"password"} label={"Password"} type={"password"} placeholder={"Enter password"} />
              </div>
              {/* <Input label={"Allergic Items"} type={"text"} placeholder={"Allergic Items"} />
              <div className='grid grid-cols-4 gap-x-4'>
                <Input label={"Protien"} type={"text"} placeholder={"Protien"} />
                <Input label={"Fat"} type={"text"} placeholder={"Fat"} />
                <Input label={"Carbs"} type={"text"} placeholder={"Carbs"} />
                <Input label={"Calories"} type={"text"} placeholder={"Calories"} />
              </div> */}
            </div>

            <div className="flex items-center justify-center pb-6  rounded-b ">
              <Button text={"Add Rider"} className={"w-1/6"} />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddRider