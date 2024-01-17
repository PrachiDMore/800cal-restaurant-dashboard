import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { UseAuthContext } from "./Auth";

const IngredientsContext = createContext();

const IngredientsContextProvider = ({ children }) => {

	const [ingredients, setIngredients] = useState([])
	const [ingredientsOptions, setIngredientsOptions] = useState([])
	const { user } = UseAuthContext()

	useEffect(() => {
		if (user) {
			setInterval(() => {
				axios(`${process.env.REACT_APP_BASE_URL}/ingredients/`, {
					method: "GET",
				})
					.then((res) => {
						setIngredients(res.data.ingredients?.filter((data) => {
							return data?.restaurant?._id === user?._id || data?.restaurant == undefined || data?.restaurant == null
						}))
					})
					.catch((err) => {
						console.log(err)
					})
			}, 10000);
		}
	}, [user]);

	useEffect(() => {
		if (ingredients) {
			const data = ingredients.map((obj) => {
				return { ...obj, label: obj?.title, value: obj._id }
			})
			setIngredientsOptions(data)
		}
	}, [ingredients]);


	return <IngredientsContext.Provider value={{ ingredients, ingredientsOptions }}>
		{children}
	</IngredientsContext.Provider>
}

const UseIngredientsContext = () => {
	return useContext(IngredientsContext);
}

export { IngredientsContextProvider, UseIngredientsContext };