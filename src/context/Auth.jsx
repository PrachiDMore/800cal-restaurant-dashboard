import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [token, setToken] = useState("");
	const [user, setUser] = useState();

	useEffect(() => {
		const tokenInfo = localStorage.getItem("token");
		if (tokenInfo) {
			setToken(tokenInfo)
		} else {
			setToken("")
		}
	}, []);

	useEffect(() => {
		if (token || localStorage.getItem("token")) {
			axios(`${process.env.REACT_APP_BASE_URL}/restaurant/profile`, {
				method: "GET",
				headers: {
					"Authorization": `Bearer ${localStorage.getItem("token")}`
				}
			})
				.then((res) => {
					setUser(res.data.restaurant)
				})
				.catch((err) => {
					console.log(err)
				})
		}
	}, [token]);


	return <AuthContext.Provider value={{ token, setToken, user }}>
		{children}
	</AuthContext.Provider>
}

const UseAuthContext = () => {
	return useContext(AuthContext);
}

export { AuthContextProvider, UseAuthContext };