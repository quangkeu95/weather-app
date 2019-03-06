import axios from "axios";

import types from "./types";
import creators from "./actions";

// WEATHER API KEY
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const selectCity = creators.selectCity;

const fetchCity = city => {
	return dispatch => {
		const url = `https://quangkeu95-city-api.herokuapp.com/city?name_like=^${city}`;

		dispatch({ type: types.FETCH_CITY_REQUEST });
		axios.get(url).then(
			response => {
				if (response.status === 200) {
					dispatch({
						type: types.FETCH_CITY_SUCCESS,
						payload: response.data
					});
				} else {
					dispatch({
						type: types.FETCH_CITY_ERROR,
						payload: "error"
					});
				}
			},
			error => {
				dispatch({
					type: types.FETCH_CITY_ERROR,
					payload: error
				});
			}
		);
	};
};

const fetchWeather = cityId => {
	return dispatch => {
		const url = `https://api.openweathermap.org/data/2.5/weather?appId=${WEATHER_API_KEY}&id=${cityId}`;

		dispatch({ type: types.FETCH_CURRENT_WEATHER_REQUEST });
		axios.get(url).then(
			response => {
				if (response.status === 200) {
					dispatch({
						type: types.FETCH_CURRENT_WEATHER_SUCCESS,
						payload: response.data
					});
				} else {
					dispatch({
						type: types.FETCH_CURRENT_WEATHER_ERROR,
						payload: "error"
					});
				}
			},
			error => {
				dispatch({
					type: types.FETCH_CURRENT_WEATHER_ERROR,
					payload: error
				});
			}
		);
	};
};

export default {
	selectCity,
	fetchCity,
	fetchWeather
};
