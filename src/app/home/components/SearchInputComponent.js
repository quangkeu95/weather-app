import React from "react";
import PropTypes from "prop-types";
import { Input } from "antd";

const Search = Input.Search;

const SearchInput = props => {
	const { onSearch } = props;
	return (
		<Search placeholder="Location..." onSearch={value => onSearch(value)} />
	);
};

export default SearchInput;

SearchInput.propTypes = {
	onSearch: PropTypes.func
};
