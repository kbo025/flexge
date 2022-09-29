import { useEffect, useState } from "react";
import axios from 'axios';

const URL = 'http://localhost:3000/api/auth/login';

const useLogin = (data) => {
	const [user, setUser] = useState({});

	useEffect(async () => {
		const response = await axios.post(URL, data);
		setUser(response.data);
	}, []);

	return user;
};

export default useLogin;