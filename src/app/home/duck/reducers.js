import { combineReducers } from "redux";

import types from "./types";
import utils from "../../utils";

const cityInitialState = {
	isFetching: false,
	cities: [],
	cityId: undefined
};

const weatherInitialState = {
	isFetching: false,
	currentWeather: {
		city: "",
		country: "",
		temp: undefined,
		humidity: undefined,
		pressure: undefined,
		windSpeed: undefined,
		sunriseTime: undefined,
		sunsetTime: undefined,
		weatherIcon: "",
		weatherTitle: "",
		weatherDesc: "",
		datetime: undefined
	}
};

const weatherReducer = (state = weatherInitialState, action) => {
	switch (action.type) {
		case types.FETCH_CURRENT_WEATHER_REQUEST: {
			return {
				...state,
				isFetching: true
			};
		}
		case types.FETCH_CURRENT_WEATHER_SUCCESS: {
			return {
				...state,
				currentWeather: utils.transformCurrentWeather(action.payload),
				isFetching: false
			};
		}
		case types.FETCH_CURRENT_WEATHER_ERROR: {
			return {
				...state,
				isFetching: false
			};
		}
		default:
			return state;
	}
};

const cityReducer = (state = cityInitialState, action) => {
	switch (action.type) {
		case types.FETCH_CITY_REQUEST: {
			return {
				...state,
				isFetching: true
			};
		}
		case types.FETCH_CITY_SUCCESS: {
			return {
				...state,
				cities: action.payload,
				isFetching: false
			};
		}
		case types.FETCH_CITY_ERROR: {
			return {
				...state,
				cities: [],
				isFetching: false
			};
		}
		case types.SELECT_CITY: {
			return {
				...state,
				cityId: action.payload
			};
		}
		default:
			return state;
	}
};

export default combineReducers({
	city: cityReducer,
	weather: weatherReducer
});
