import React, { useEffect, useRef, useState } from 'react'
import Input from './Input'
import { BiLink } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import axios from 'axios'

const UploadInput = ({ label, onChange, value, id, disabled = false, item }) => {
	const inputRef = useRef();
	const cloudinaryRef = useRef();
	const widgetRef = useRef();
	const [placeholder, setPlaceholder] = useState(value ? value : "Upload Document");
	useEffect(() => {
		cloudinaryRef.current = window.cloudinary;
		widgetRef.current = cloudinaryRef.current.createUploadWidget({
			cloudName: "dfncnjaz9",
			uploadPreset: "hykcy6yp",
			multiple: false,
			showAdvancedOptions: false,
			showUploadMoreButton: false,
			singleUploadAutoClose: true,
			clientAllowedFormats: ["jpg", "webp", "png", "jpeg"],
			sources: ["local"],
			theme: "minimal"
		}, (err, res) => {
			if (res.event === "success") {
				onChange( res.info.secure_url)
			}
		});
	}, []);
	return (
		<div className='grid grid-cols-12 items-center '>
			<div className='col-span-10' onClick={() => disabled && widgetRef.current.open()}>
				<label htmlFor='input' className='Lexend flex flex-col justify-center'>
					<span className='text-white' >{label}</span>
					<input disabled={disabled} id={id} value={value} className='px-4 py-3 mt-1 outline-none border border-textGray text-white bg-darkGray rounded-lg' type={"text"} placeholder={placeholder} />
				</label>
			</div>
			<input id='input' className='opacity-0 pointer-events-none' type="file" ref={inputRef} />
			<Link to={value} target='_blank'>
				<BiLink className='text-xl text-blue-700 col-span-1' />
			</Link>
		</div >
	)
}

export default UploadInput