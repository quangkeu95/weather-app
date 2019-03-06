import React from "react";
import PropTypes from "prop-types";
import { AutoComplete, Button, Icon } from "antd";
import { debounce } from "lodash";

import styled from "styled-components";

const Option = AutoComplete.Option;

const SearchInputWrapper = styled.div`
	padding: 30px 0;
`;

const SearchInput = props => {
	const {
		onSearch,
		onSelect,
		onFetchWeather,
		isFetching,
		cities,
		cityId
	} = props;

	// Duplicate city name issue, so i append index into key
	const dataSource = cities.map((item, index) => (
		<Option key={`${item.id}-${index}`} value={`${item.id}-${index}`}>
			{`${item.name}, ${item.country}`}
		</Option>
	));

	const onSearchComponent = debounce(cityName => {
		if (cityName.length > 0) {
			onSearch(cityName);
		}
	}, 1000);

	const onFetchWeatherComponent = () => {
		if (cityId) {
			const found = cities.filter(item => item.id + "" === cityId);
			if (found.length > 0) {
				onFetchWeather(cityId);
			}
		}
	};

	return (
		<SearchInputWrapper>
			<AutoComplete
				placeholder="Location..."
				autoFocus={true}
				disabled={isFetching}
				dataSource={dataSource}
				onSelect={value => onSelect(value)}
				onSearch={value => onSearchComponent(value)}
			/>
			<Button
				type="primary"
				disabled={isFetching}
				onClick={event => onFetchWeatherComponent()}
			>
				<Icon type={isFetching ? "loading" : "search"} />
			</Button>
		</SearchInputWrapper>
	);
};

export default SearchInput;

SearchInput.propTypes = {
	isFetching: PropTypes.bool,
	cities: PropTypes.array,
	onSearch: PropTypes.func,
	onSelect: PropTypes.func,
	onFetchWeather: PropTypes.func,
	cityId: PropTypes.string
};
