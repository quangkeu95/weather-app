import types from "./types";
import axios from "axios";

const fetchCity = city => {
	console.log(city);
	return dispatch => {
		// const url = `http://gd.geobytes.com/AutoCompleteCity?q=${city}`;
		const url = `https://quangkeu95-city-api.herokuapp.com/city?name_like=^${city}`;

		axios.get(url).then(
			function(response) {
				console.log(response);
			},
			function(error) {
				console.log(error);
			}
		);
	};
};

export default {
	fetchCity
};
