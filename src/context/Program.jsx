import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { UseAuthContext } from "./Auth";

const ProgramContext = createContext();

const ProgramContextProvider = ({ children }) => {

	const [program, setProgram] = useState([])
	const [programOptions, setProgramOptions] = useState([])
	// useEffect(() => {
	// 	const tokenInfo = localStorage.getItem("token");
	// 	if (tokenInfo) {
	// 		setToken(tokenInfo)
	// 	} else {
	// 		setToken("")
	// 	}
	// }, []);

	useEffect(() => {
		axios(`${process.env.REACT_APP_BASE_URL}/program/`, {
			method: "GET",
			headers: {
				"Authorization": `Bearer ${localStorage.getItem("token")}`
			}
		})
			.then((res) => {
				setProgram(res.data.program)
			})
			.catch((err) => {
				console.log(err)
			})
	}, []);

	useEffect(() => {
		if (program) {
			const data = program.map((obj) => {
				return { ...obj, label: obj?.name, value: obj._id }
			})
			console.log(program)
			setProgramOptions(data)
		}
	}, [program]);


	return <ProgramContext.Provider value={{ program, programOptions }}>
		{children}
	</ProgramContext.Provider>
}

const UseProgramContext = () => {
	return useContext(ProgramContext);
}

export { ProgramContextProvider, UseProgramContext };