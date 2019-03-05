import React from "react";
import { connect } from "react-redux";
import { homeOperations, homeSelectors } from "../duck";

import SearchInputComponent from "../components/SearchInputComponent";

// const mapDispatchToProps = dispatch => {
// 	return {
// 		onSearch: (value) => dispatch(homeOperation.fetchCity(value));
// 	};
// };

const mapStateToProps = state => {
	const { isFetching, cities, cityId } = homeSelectors.citySelector(state);

	return {
		isFetching,
		cities,
		cityId
	};
};

const mapDispatchToProps = {
	onSearch: homeOperations.fetchCity,
	onSelect: homeOperations.selectCity,
	onFetchWeather: homeOperations.fetchWeather
};

const SearchInputContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchInputComponent);

export default SearchInputContainer;
