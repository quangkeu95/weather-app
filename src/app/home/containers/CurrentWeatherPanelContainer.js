import { connect } from "react-redux";

import CurrentWeatherPanelComponent from "../components/CurrentWeatherPanelComponent";
import { homeSelectors, homeOperations } from "../duck";

const mapStateToProps = state => {
	const { isFetching } = homeSelectors.weatherSelector(state);

	const currentWeather = homeSelectors.getCurrentWeatherSelector(state);

	return {
		isFetching,
		currentWeather
	};
};

const mapDispatchToProps = {
	onFetchWeather: homeOperations.fetchWeather
};

const CurrentWeatherPanelContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CurrentWeatherPanelComponent);

export default CurrentWeatherPanelContainer;
