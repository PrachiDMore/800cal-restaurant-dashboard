import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout';
import Input from '../components/Input';
import Button from '../components/Button';
import { useParams } from 'react-router-dom';
import UploadComponent from '../components/UploadComponent';
import RestoProfile from '../components/RestoProfile';
import Select from '../components/Select';
import { UseAuthContext } from '../context/Auth';

const RiderForm = () => {
	const [showResto, setShowResto] = useState(false)
	const { _id } = useParams();
	const { user } = UseAuthContext()
	const [image, setImage] = useState("");
	const initialState = {
		"firstname": "",
		"lastname": "",
		"username": "",
		"password": "",
		"email": "",
		"phonenumber": "",
		"licenseNo": "",
		"civilID": "",
		"disabled": false,
		"delete": false
	}
	const [formState, setFormState] = useState(initialState);

	const handleChange = (e) => {
		setFormState({
			...formState,
			[e.target.id]: e.target.value
		})
	}

	useEffect(() => {
		if (_id) {
			axios(`${process.env.REACT_APP_BASE_URL}/rider/info/${_id}`, {
				method: "GET",
			})
				.then((res) => {
					setFormState(res.data.rider)
					setImage(res.data?.rider?.image)
				})
				.catch((err) => {
					console.log(err)
				})
		}
	}, [_id])


	const handleSubmit = (e) => {
		e.preventDefault();
		if (image) {
			if (_id) {
				axios(`${process.env.REACT_APP_BASE_URL}/rider/admin/update/${_id}`, {
					method: "PATCH",
					data: { ...formState, image: image, restaurant: user?._id },
				})
					.then((res) => {
						alert(res.data.message)
					})
					.catch((err) => {
						console.log(err)
					})
			} else {
				axios(`${process.env.REACT_APP_BASE_URL}/rider/signup`, {
					method: "POST",
					data: { ...formState, image: image, restaurant: user?._id },
					headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`
					}
				})
					.then((res) => {
						if (res.data.error) {
							alert(res.data.message)
						} else {
							alert(res.data.message)
						}
					})
					.catch((err) => {
						console.log(err)
					})
			}
		} else {
			alert("Upload the image")
		}
	}

	return (
		<>
			<Layout navbar={true}>
				<div className='w-4/5  Lexend'>
					{/* topbar */}
					<div className='w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold'>
						{_id ? "Edit Rider" : "Add Rider"}
					</div>

					<form onSubmit={handleSubmit} className='w-full p-5 grid gap-5 max-h-[90vh] overflow-scroll'>
						<div className='grid grid-cols-2 gap-4'>
							<div className='col-span-2'><UploadComponent setImage={setImage} image={image} /></div>
							<Input onChange={handleChange} id={"firstname"} value={formState?.firstname} type={"text"} label={"Firstname"} placeholder={"Enter firstname"} />
							<Input onChange={handleChange} id={"lastname"} value={formState?.lastname} type={"text"} label={"Lastname"} placeholder={"Enter lastname"} />
							<Input onChange={handleChange} id={"email"} value={formState?.email} type={"email"} label={"Email"} placeholder={"Enter Email address"} />
							<Input onChange={handleChange} id={"username"} value={formState?.username} type={"text"} label={"Username"} placeholder={"Enter username"} />
							<Input onChange={handleChange} id={"phonenumber"} value={formState?.phonenumber} type={"text"} label={"Phone Number"} placeholder={"Enter Phone Number"} />
							{!_id && <Input disabled={_id} onChange={handleChange} id={"password"} value={formState?.password} type={"password"} label={"Password"} placeholder={"Enter password"} />}
							<Input onChange={handleChange} id={"civilID"} value={formState?.civilID} type={"text"} label={"Civil ID"} placeholder={"Enter Civil ID"} />
							<Input onChange={handleChange} id={"licenseNo"} value={formState?.licenseNo} type={"text"} label={"License No."} placeholder={"Enter License No."} />
							<Select value={formState?.disabled} onChange={handleChange} id={"disabled"} label={"Disable"} options={[
								{
									label: "Disable",
									value: true
								},
								{
									label: "Enable",
									value: false
								}
							]} />
						</div>
						<Button text={"Submit"} type={"submit"} />
					</form>
				</div>
			</Layout>
			<RestoProfile showResto={showResto} setShowResto={setShowResto} />
		</>
	)
}

export default RiderForm