import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Input, AutoComplete, Button, Icon } from "antd";
import _ from "lodash";

import styled from "styled-components";

// const Search = Input.Search;

const SearchInput = props => {
	const { onSearch } = props;

	const onSearchComponent = value => {
		_.debounce(event => {
			onSearch(value);
		}, 1500);
	};

	return (
		<Fragment>
			<AutoComplete
				placeholder="Location..."
				onSearch={value => onSearchComponent(value)}
			/>
			<Button type="primary">
				<Icon type="search" />
			</Button>
		</Fragment>
	);
};

export default SearchInput;

SearchInput.propTypes = {
	onSearch: PropTypes.func
};
