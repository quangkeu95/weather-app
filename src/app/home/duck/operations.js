import axios from "axios";

import types from "./types";
import creators from "./actions";

const fetchCity = city => {
	return dispatch => {
		const url = `https://quangkeu95-city-api.herokuapp.com/city?name_like=^${city}`;

		dispatch({ type: types.FETCH_CITY_REQUEST });
		axios.get(url).then(
			function(response) {
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
			function(error) {
				dispatch({
					type: types.FETCH_CITY_ERROR,
					payload: error
				});
			}
		);
	};
};

const fetchCurrentWeather = cityId => {
	return dispatch => {
		const url = ``;
	};
};

export default {
	fetchCity
};
