import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { UseAuthContext } from "./Auth";

const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {

	const [orders, setOrders] = useState([])
	const { token } = UseAuthContext()

	const fetchData = () => {
		axios(`${process.env.REACT_APP_BASE_URL}/calendar/restaurant/${Date.now()}`, {
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
	}

	useEffect(() => {
		if (token) {
			fetchData()
			setInterval(fetchData, 10000);
		}
	}, [token]);




	return <OrderContext.Provider value={{ orders }}>
		{children}
	</OrderContext.Provider>
}

const UseOrderContext = () => {
	return useContext(OrderContext);
}

export { OrderContextProvider, UseOrderContext };