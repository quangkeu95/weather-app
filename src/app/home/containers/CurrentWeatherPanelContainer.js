import React from "react";
import { connect } from "react-redux";

import CurrentWeatherPanelComponent from "../components/CurrentWeatherPanelComponent";
import { homeSelectors } from "../duck";

const mapStateToProps = state => {
	const { isFetching, currentWeather } = homeSelectors.weatherSelector(state);

	// const location = homeSelectors.getWeatherLocationSelector(state);

	return {
		isFetching,
		currentWeather
	};
};

const CurrentWeatherPanelContainer = connect(
	mapStateToProps,
	null
)(CurrentWeatherPanelComponent);

export default CurrentWeatherPanelContainer;
