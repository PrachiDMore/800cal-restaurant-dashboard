import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const IngredientsContext = createContext();

const IngredientsContextProvider = ({ children }) => {

	const [ingredients, setIngredients] = useState([])
	const [ingredientsOptions, setIngredientsOptions] = useState([])

	useEffect(() => {
		setInterval(() => {
			axios(`${process.env.REACT_APP_BASE_URL}/ingredients/`, {
				method: "GET",
				headers: {
					"Authorization": `Bearer ${localStorage.getItem("token")}`
				}
			})
				.then((res) => {
					setIngredients(res.data.ingredients)
				})
				.catch((err) => {
					console.log(err)
				})
		}, 10000);
	}, []);

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