import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { UseAuthContext } from "./Auth";

const FoodContext = createContext();

const FoodContextProvider = ({ children }) => {

	const [food, setFood] = useState([])
	// useEffect(() => {
	// 	const tokenInfo = localStorage.getItem("token");
	// 	if (tokenInfo) {
	// 		setToken(tokenInfo)
	// 	} else {
	// 		setToken("")
	// 	}
	// }, []);

	useEffect(() => {
		axios(`${process.env.REACT_APP_BASE_URL}/food/restaurant/token`, {
			method: "GET",
			headers: {
				"Authorization": `Bearer ${localStorage.getItem("token")}`
			}
		})
			.then((res) => {
				setFood(res.data.food)
			})
			.catch((err) => {
				console.log(err)
			})
	}, []);


	return <FoodContext.Provider value={{ food }}>
		{children}
	</FoodContext.Provider>
}

const UseFoodContext = () => {
	return useContext(FoodContext);
}

export { FoodContextProvider, UseFoodContext };