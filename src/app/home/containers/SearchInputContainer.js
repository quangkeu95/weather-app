import React from "react";
import { connect } from "react-redux";
import { homeOperations } from "../duck";

import SearchInputComponent from "../components/SearchInputComponent";

// const mapDispatchToProps = dispatch => {
// 	return {
// 		onSearch: (value) => dispatch(homeOperation.fetchCity(value));
// 	};
// };

const mapDispatchToProps = {
	onSearch: homeOperations.fetchCity
};

const SearchInputContainer = connect(
	null,
	mapDispatchToProps
)(SearchInputComponent);

export default SearchInputContainer;
