import { useState } from "react";

const initialState = {
	user: {},
}

const useInitialState = () => {
	const [state, setState] = useState(initialState);

	const login = (payload) => {
		setState({
			...state,
			user: payload
		});
	};

	const logout = () => {
		setState({
			...state,
			user: {},
		});
	}

	return {
		state,
		login,
		logout
	}
}

export default useInitialState;
