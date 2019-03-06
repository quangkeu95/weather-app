import { createSelector } from "reselect";

const citySelector = state => state.home.city;

const weatherSelector = state => state.home.weather;
const currentWeatherSelector = state => state.home.weather.currentWeather;

const getCurrentWeatherSelector = createSelector(
	currentWeatherSelector,
	currentWeather => {
		const convertSecondToDate = second => {
			return new Date(second * 1000);
		};

		const convertTime = time => {
			if (time < 10) {
				return `0${time}`;
			}
			return time;
		};

		const sunsetTime = convertSecondToDate(currentWeather.sunsetTime);
		const sunriseTime = convertSecondToDate(currentWeather.sunriseTime);

		const sunsetTimeInString = `${convertTime(
			sunsetTime.getHours()
		)}:${convertTime(sunsetTime.getMinutes())}`;

		const sunriseTimeInString = `${convertTime(
			sunriseTime.getHours()
		)}:${convertTime(sunriseTime.getMinutes())}`;

		const datetimeInString = `${convertSecondToDate(
			currentWeather.datetime
		).toLocaleTimeString()}, ${convertSecondToDate(
			currentWeather.datetime
		).toDateString()} `;

		return {
			...currentWeather,
			tempInCelsius: currentWeather.temp - 270.15,
			sunsetTimeInString,
			sunriseTimeInString,
			datetimeInString
		};
	}
);

export default {
	citySelector,
	weatherSelector,
	getCurrentWeatherSelector
};
