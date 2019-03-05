import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Card, Row, Col, Statistic, Spin, Icon } from "antd";
import Spinner from "../../common/Spinner";

const { Meta } = Card;

const ColWrapper = styled(Col)`
	/* border: 1px solid black; */
	border-radius: 4px;
	-webkit-box-shadow: 3px 3px 10px 0px rgba(194, 194, 194, 0.6);
	-moz-box-shadow: 3px 3px 10px 0px rgba(194, 194, 194, 0.6);
	box-shadow: 3px 3px 10px 0px rgba(194, 194, 194, 0.6);
	height: 40vh;
`;

const DisplayPanel = props => {
	const {
		city,
		country,
		datetimeInString,
		weatherIcon,
		tempInCelsius
	} = props;

	return (
		<div>
			<p>{`${city}, ${country}`}</p>
			<p>{datetimeInString}</p>
			<Row type="flex" justify="center">
				<Col span={8}>
					<Row type="flex" justify="center">
						<Col span={8}>
							<img
								src={`http://openweathermap.org/img/w/${weatherIcon}.png`}
								alt="error"
							/>
						</Col>
						<Col span={8}>
							<Statistic
								value={tempInCelsius}
								suffix="&#8451;"
								precision={0}
							/>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

const CurrentWeatherPanelComponent = props => {
	const { isFetching, currentWeather } = props;

	return (
		<Row type="flex" justify="center" align="middle">
			<ColWrapper span={20}>
				{isFetching && <Spinner />}
				{!isFetching && currentWeather.datetime !== undefined && (
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
	);
};

CurrentWeatherPanelComponent.propTypes = {
	isFetching: PropTypes.bool,
	currentWeather: PropTypes.object
};

export default CurrentWeatherPanelComponent;
