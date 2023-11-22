import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { UseAuthContext } from "./Auth";

const MealsContext = createContext();

const MealsContextProvider = ({ children }) => {

	const [meals, setMeals] = useState([])
	const [mealsOptions, setMealsOptions] = useState([])
	// useEffect(() => {
	// 	const tokenInfo = localStorage.getItem("token");
	// 	if (tokenInfo) {
	// 		setToken(tokenInfo)
	// 	} else {
	// 		setToken("")
	// 	}
	// }, []);

	useEffect(() => {
		axios(`${process.env.REACT_APP_BASE_URL}/meal/`, {
			method: "GET",
			headers: {
				"Authorization": `Bearer ${localStorage.getItem("token")}`
			}
		})
			.then((res) => {
				setMeals(res.data.meal)
			})
			.catch((err) => {
				console.log(err)
			})
	}, []);

	useEffect(() => {
		if (meals) {
			const data = meals.map((obj) => {
				return { ...obj, label: obj?.name, value: obj._id }
			})
			setMealsOptions(data)
		}
	}, [meals]);


	return <MealsContext.Provider value={{ meals, mealsOptions }}>
		{children}
	</MealsContext.Provider>
}

const UseMealsContext = () => {
	return useContext(MealsContext);
}

export { MealsContextProvider, UseMealsContext };