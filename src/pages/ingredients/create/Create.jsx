import React, { useState } from 'react'
import Layout from '../../../components/Layout'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import UploadComponent from "../../../components/UploadComponent"
import axios from 'axios'

const CreateIngredients = () => {
  const [image, setImage] = useState("");
  const initialFormState = {
    title: "",
    location: "",
    protien: "",
    carbs: "",
    fat: "",
    calories: ""
  }

  const [formState, setFormState] = useState(initialFormState)

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value
    })
  }
  const handleCreate = (e) => {
    e.preventDefault()
    if (image && formState.location) {
      axios(`${process.env.REACT_APP_BASE_URL}/ingredients/create`, {
        method: "POST",
        data: {
          ...formState,
          image
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
        .then((res) => {
          console.log(res.data)
        })
    } else {
      alert("Please fill the form")
    }
  }
  return (
    <>
      <Layout>
        <div className='w-4/5  Lexend'>
          {/* topbar */}
          <div className='w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold'>
            Create Ingredient
          </div>

          <div className='w-full p-5 grid gap-4 h-full'>
            <div className="w-full text-white rounded-lg max-h-[83vh] overflow-scroll">
              <form onSubmit={handleCreate} className='p-10 flex flex-col gap-y-3'>
                <UploadComponent setImage={setImage} image={image} />
                <Input placeholder={"Enter the Ingredient name"} label={"Name"} id={"title"} type={"text"} value={formState.title} onChange={handleChange} />
                <Input placeholder={"Enter the Ingredient location"} label={"Location"} id={"location"} type={"text"} value={formState.location} onChange={handleChange} />
                <Input placeholder={"Enter the Ingredient protien"} label={"Protien"} id={"protien"} type={"number"} value={formState.protien} onChange={handleChange} />
                <Input placeholder={"Enter the Ingredient fat"} label={"Fat"} id={"fat"} type={"number"} value={formState.fat} onChange={handleChange} />
                <Input placeholder={"Enter the Ingredient carbs"} label={"Carbs"} id={"carbs"} type={"number"} value={formState.carbs} onChange={handleChange} />
                <Input placeholder={"Enter the Ingredient calories"} label={"Calories"} id={"calories"} type={"number"} value={formState.calories} onChange={handleChange} />
                <Button type={"submit"} text={"Submit"} />
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default CreateIngredients