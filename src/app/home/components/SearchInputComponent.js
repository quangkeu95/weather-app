import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Input, AutoComplete, Button, Icon } from "antd";
import { debounce } from "lodash";

import styled from "styled-components";

const Option = AutoComplete.Option;

const SearchInput = props => {
	const { onSearch, isFetching, cities } = props;

	// Duplicate city name issue, so i append index into key
	const dataSource = cities.map((item, index) => (
		<Option key={`${item.id}-${index}`} value={`${item.id}-${index}`}>
			{`${item.name}, ${item.country}`}
		</Option>
	));

	const onSearchComponent = debounce(value => {
		onSearch(value);
	}, 1000);

	return (
		<Fragment>
			<AutoComplete
				placeholder="Location..."
				dataSource={dataSource}
				onSearch={value => onSearchComponent(value)}
			/>
			<Button type="primary" disabled={isFetching}>
				<Icon type={isFetching ? "loading" : "search"} />
			</Button>
		</Fragment>
	);
};

export default SearchInput;

SearchInput.propTypes = {
	isFetching: PropTypes.bool,
	cities: PropTypes.array,
	onSearch: PropTypes.func
};
