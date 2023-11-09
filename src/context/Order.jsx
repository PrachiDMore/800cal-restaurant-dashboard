import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { UseAuthContext } from "./Auth";

const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {

	const [orders, setOrders] = useState([])

	useEffect(() => {
		axios(`${process.env.REACT_APP_BASE_URL}/calendar/restaurant`, {
			method: "GET",
			headers: {
				"Authorization": `Bearer ${localStorage.getItem("token")}`
			}
		})
			.then((res) => {
				setOrders(res.data.calendar)
			})
			.catch((err) => {
				console.log(err.message)
			})
	}, []);


	return <OrderContext.Provider value={{ orders }}>
		{children}
	</OrderContext.Provider>
}

const UseOrderContext = () => {
	return useContext(OrderContext);
}

export { OrderContextProvider, UseOrderContext };