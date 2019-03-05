import React from "react";
import PropTypes from "prop-types";

import { Card, Row, Col, Statistic, Spin, Icon } from "antd";
import Spinner from "../../common/Spinner";
import styled from "styled-components";

const ColWrapper = styled(Col)`
	/* border: 1px solid black; */
	border-radius: 4px;
	-webkit-box-shadow: 3px 3px 10px 0px rgba(194, 194, 194, 0.6);
	-moz-box-shadow: 3px 3px 10px 0px rgba(194, 194, 194, 0.6);
	box-shadow: 3px 3px 10px 0px rgba(194, 194, 194, 0.6);
	height: 40vh;
`;

const DisplayPanel = props => {
	const { name, country } = props.sys;

	return <span>{`${city}, ${country}`}</span>;
};

const CurrentWeatherPanelComponent = props => {
	const { isFetching, currentWeather } = props;

	return (
		<Row type="flex" justify="center" align="middle">
			<ColWrapper span={20}>
				{isFetching && <Spinner />}
				{!isFetching && Object.keys(currentWeather).length > 0 && (
					<DisplayPanel {...currentWeather} />
				)}
				{/* {iconId && (
					<img
						alt="error loading image"
						src={`http://openweathermap.org/img/w/${iconId}.png`}
					/>
				)} */}
			</ColWrapper>
		</Row>
		// <Card cover={}>
		// </Card>
	);
};

CurrentWeatherPanelComponent.propTypes = {
	isFetching: PropTypes.bool,
	currentWeather: PropTypes.object
};

export default CurrentWeatherPanelComponent;
