import React, { useState } from 'react'
import Layout from '../components/Layout'
import Input from '../components/Input'
import Button from '../components/Button'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { UseAuthContext } from '../context/Auth';

const SignIn = () => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("");
	const { setToken } = UseAuthContext()
	const handleSubmit = (e) => {
		e.preventDefault();
		axios(`${process.env.REACT_APP_BASE_URL}/restaurant/signin`, {
			method: "POST",
			data: {
				username,
				password
			}
		})
			.then((res) => {
				if (res.data.error) {
					alert(res.data.message)
				} else {
					alert(res.data.message)
					setToken(res.data.token)
					localStorage.setItem("token", res.data.token)
					window.location.href = "/home"
				}
			})
			.catch((err) => {
				alert(err.message)
			})
	}
	return (
		<Layout navbar={false}>
			<div className='h-screen w-screen flex items-center justify-center'>
				<div className='w-[40%] flex flex-col items-center mb-20'>
					<img src="/assets/logo.png" alt="" />
					<form onSubmit={handleSubmit} className='w-[90%] flex flex-col gap-y-3'>
						<Input value={username} label={"Username"} onChange={(e) => { setUsername(e.target.value) }} placeholder={"Enter your username"} />
						<Input value={password} onChange={(e) => { setPassword(e.target.value) }} label={"Password"} placeholder={"Enter your password"} type={"password"} />
						<Button type={"submit"} text={"Login"} className={"mt-3"} />
						<div className='font-medium'>Don't have an account? <Link to={"/signup"} className='text-green'>Sign Up</Link></div>
					</form>
				</div>
			</div>
		</Layout>
	)
}

export default SignIn
