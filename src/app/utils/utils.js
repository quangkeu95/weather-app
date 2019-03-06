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
