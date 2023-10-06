import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import axios from 'axios'

const AddFoodModal = ({ showModal, setShowModal }) => {
  const initialState = {
    "name": "",
    "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyfGVufDB8fDB8fHww&w=1000&q=80",
    "program": "6513bdf1c8a98cbbaabc44f7",
    "meal": "6514296184ad16ae99f022ff",
    "badge": "",
    "ingredients": [],
    "protien": "",
    "fat": "",
    "carbs": "",
    "calories": ""
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
    axios(`${process.env.REACT_APP_BASE_URL}/food/create`, {
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
      <div id="defaultModal" tabindex="-1" aria-hidden="true" className={showModal ? "fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden bg-black/50 overflow-y-auto h-screen opacity-100 duration-500" : "fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden bg-black/50 overflow-y-auto h-screen opacity-0 pointer-events-none duration-500"}>
        <div className="relative w-[80%] max-h-full overflow-y-scroll m-auto">

          <form onSubmit={handleSubmit} className="relative rounded-lg shadow bg-darkGray">

            <div className="flex items-start justify-between p-4 border-b rounded-t border-textGray ">
              <h3 className="text-xl font-semibold text-white">
                Add Food
              </h3>
              <button onClick={() => { setShowModal(false) }} type="button" className="text-white bg-transparent hover:bg-gray-600 duration-200 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center ">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className='grid grid-cols-2 gap-x-4'>
                <Input value={formstate.name} id={"name"} onChange={handleChange} label={"Name"} type={"text"} placeholder={"Name of Food"} />
                <Input id={"image"} onChange={handleChange} label={"Image"} type={"file"} placeholder={"Name of Food"} />
              </div>
              <Input value={formstate.program} id={"program"} onChange={handleChange} label={"Program"} type={"text"} placeholder={"Program"} />
              <Input value={formstate.badge} id={"badge"} onChange={handleChange} label={"Badge"} type={"text"} placeholder={"Badge"} />
              <Input value={formstate.ingredients} id={"ingredients"} label={"Ingredients"} type={"text"} placeholder={"Ingredients"} />
              <Input value={formstate.allergy} id={"allergy"} label={"Allergic Items"} type={"text"} placeholder={"Allergic Items"} />
              <div className='grid grid-cols-4 gap-x-4'>
                <Input value={formstate.protien} onChange={handleChange} id={"protien"} label={"Protien"} type={"text"} placeholder={"Protien"} />
                <Input value={formstate.fat} onChange={handleChange} id={"fat"} label={"Fat"} type={"text"} placeholder={"Fat"} />
                <Input value={formstate.carbs} onChange={handleChange} id={"carbs"} label={"Carbs"} type={"text"} placeholder={"Carbs"} />
                <Input value={formstate.calories} onChange={handleChange} id={"calories"} label={"Calories"} type={"text"} placeholder={"Calories"} />
              </div>
            </div>

            <div className="flex items-center justify-center pb-6  rounded-b ">
              <Button text={"Add Food"} className={"w-1/6"} />
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default AddFoodModal