import { createSelector } from "reselect";

const citySelector = state => state.home.city;
const weatherSelector = state => state.home.weather;
const currentWeatherSelector = state => state.home.weather.currentWeather;

const getWeatherLocationSelector = createSelector(
	currentWeatherSelector,
	currentWeather => {
		return {
			city: currentWeather.name ? currentWeather.name : "",
			country: currentWeather.sys ? currentWeather.sys.country : ""
		};
	}
);

export default {
	citySelector,
	weatherSelector,
	currentWeatherSelector,
	getWeatherLocationSelector
};
