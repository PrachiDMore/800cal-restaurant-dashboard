import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const RiderContext = createContext();

const RiderContextProvider = ({ children }) => {
	const [rider, setRider] = useState([]);

	useEffect(() => {
		axios(`${process.env.REACT_APP_BASE_URL}/rider/all`, {
			method: "GET",
		})
			.then((res) => {
				console.log(res.data.riders)
				setRider(res.data.riders)
			})
			.catch((err) => {
				console.log(err)
			})
	}, []);


	return <RiderContext.Provider value={{ rider }}>
		{children}
	</RiderContext.Provider>
}

const UseRiderContext = () => {
	return useContext(RiderContext);
}

export { RiderContextProvider, UseRiderContext };