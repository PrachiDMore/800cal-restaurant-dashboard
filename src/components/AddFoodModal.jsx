import React, { useEffect, useState } from 'react'
import Input from './Input'
import Select from './Select'
import Button from './Button'
import axios from 'axios'
import SearchableSelect from './SearchableSelect'
import { UseProgramContext } from '../context/Program'
import { UseIngredientsContext } from '../context/Ingredients'
import UploadComponent from './UploadComponent'

const AddFoodModal = ({ showModal, setShowModal }) => {
  const { programOptions } = UseProgramContext()
  const { ingredientsOptions } = UseIngredientsContext()
  const initialState = {
    "name": "",
    "badge": "",
    "protien": "",
    "fat": "",
    "carbs": "",
    "calories": "",
    "category": "snack",
    "foodcode": ""
  }
  const [formstate, setFormState] = useState(initialState);
  const [foodIngredients, setFoodIngredients] = useState([]);
  const [image, setImage] = useState("")

  const handleChange = (e) => {
    setFormState({
      ...formstate,
      [e.target.id]: e.target.value
    })
  }

  useEffect(() => {
    if (showModal?.update && showModal.data) {
      setFormState(showModal.data)
    }
  }, [showModal])


  const handleSubmit = (e) => {
    e.preventDefault();
    axios(`${process.env.REACT_APP_BASE_URL}/food/create`, {
      method: "POST",
      data: { ...formstate, ingredients: foodIngredients, image },
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
      <div id="defaultModal" tabindex="-1" aria-hidden="true" className={showModal?.show ? "fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden bg-black/50 overflow-y-auto h-screen opacity-100 duration-500 flex items-center justify-center" : " flex items-center justify-centerfixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden bg-black/50 overflow-y-auto h-screen opacity-0 pointer-events-none duration-500"}>
        <div className="relative w-[70%] max-h-full overflow-y-scroll m-auto">

          <form onSubmit={handleSubmit} className="relative rounded-lg shadow bg-darkGray">

            <div className="flex items-start justify-between p-4 border-b rounded-t border-textGray ">
              <h3 className="text-xl font-semibold text-white">
                {showModal?.update ? "Update Food" : "Add Food"}
              </h3>
              <button onClick={() => { setShowModal({ show: false, update: false, data: undefined }) }} type="button" className="text-white bg-transparent hover:bg-gray-600 duration-200 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center ">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-4">
              <UploadComponent setImage={setImage} image={image} />
              <div className='grid grid-cols-2 gap-x-4'>
                <Input value={formstate.name} id={"name"} onChange={handleChange} label={"Name"} type={"text"} placeholder={"Name of Food"} />
                <Input value={formstate.badge} id={"badge"} onChange={handleChange} label={"Badge"} type={"text"} placeholder={"Badge"} />
              </div>
              <Input value={formstate.foodcode} id={"foodcode"} onChange={handleChange} label={"Food Code"} type={"text"} placeholder={"Food Code"} />
              <SearchableSelect label={"Ingredients"} onChange={(e) => {
                setFoodIngredients(e.map((data) => {
                  return data._id
                }))
              }} id={"ingredients"} isMulti={true} placeholder={"Select the Ingredients"} options={ingredientsOptions} />
              {/* <SearchableSelect label={"Allergic Items"} id={"allergy"} isMulti={true} placeholder={"Select the Allergic Items"} options={ingredientsOptions} /> */}
              <Select value={formstate.protien} onChange={handleChange} id={"category"} label={"Category"} options={[
                {
                  label: "Breakfast",
                  value: "breakfast"
                },
                {
                  label: "Main Dish",
                  value: "main-dish"
                },
                {
                  label: "Snack",
                  value: "snack"
                },
              ]} />
              <div className='grid grid-cols-4 gap-x-4'>
                <Input value={formstate.protien} onChange={handleChange} id={"protien"} label={"Protien"} type={"text"} placeholder={"Protien"} />
                <Input value={formstate.fat} onChange={handleChange} id={"fat"} label={"Fat"} type={"text"} placeholder={"Fat"} />
                <Input value={formstate.carbs} onChange={handleChange} id={"carbs"} label={"Carbs"} type={"text"} placeholder={"Carbs"} />
                <Input value={formstate.calories} onChange={handleChange} id={"calories"} label={"Calories"} type={"text"} placeholder={"Calories"} />
              </div>
              <Input value={formstate.description} id={"description"} onChange={handleChange} label={"Description"} type={"text"} placeholder={"Description"} />
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