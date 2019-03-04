import types from "./types";

const initialState = {
	isCityFetching: false,
	cities: []
};

const homeReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCH_CITY_REQUEST: {
			return {
				...state,
				isCityFetching: true
			};
		}
		case types.FETCH_CITY_SUCCESS: {
			return {
				...state,
				cities: action.payload,
				isCityFetching: false
			};
		}
		case types.FETCH_CITY_ERROR: {
			return {
				...state,
				cities: [],
				isCityFetching: false
			};
		}
		default:
			return state;
	}
};

export default homeReducer;
