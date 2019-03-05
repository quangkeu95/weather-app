const getCurrentDate = () => {
	const date = new Date();

	const dayInWeekAsString = index => {
		console.log(index);
		return [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday"
		][index];
	};

	const monthInYearAsString = index => {
		return [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		][index];
	};

	const dayInWeek = dayInWeekAsString(date.getDay());
	const monthInYear = monthInYearAsString(date.getMonth());

	return `${dayInWeek}, ${monthInYear} ${date.getDate()} ${date.getFullYear()}`;
};

const kelvinToCelsius = kelvin => {
	return kelvin - 273.15;
};

const getCurrentTime = () => {
	const date = new Date();
};

const transformCurrentWeather = data => {
	return {
		city: data.name,
		country: data.sys.country,
		temp: data.main.temp,
		humidity: data.main.humidity,
		pressure: data.main.pressure,
		windSpeed: data.wind.speed,
		sunriseTime: data.sys.sunrise,
		sunsetTime: data.sys.sunset,
		weatherIcon: data.weather[0].icon,
		weatherTitle: data.weather[0].main,
		weatherDesc: data.weather[0].description,
		datetime: data.dt
	};
};

export default {
	transformCurrentWeather
};
