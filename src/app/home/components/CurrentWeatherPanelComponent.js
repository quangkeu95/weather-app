import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Row, Col, Statistic, Icon } from "antd";
import Spinner from "../../common/Spinner";

import { ReactComponent as SvgDropletIcon } from "../../assets/droplet.svg";
import { ReactComponent as SvgWindIcon } from "../../assets/wind.svg";
import { ReactComponent as SvgSunriseIcon } from "../../assets/sunrise.svg";
import { ReactComponent as SvgSunsetIcon } from "../../assets/sunset.svg";

const DisplayPanel = props => {
	const {
		city,
		country = "",
		datetimeInString,
		weatherIcon,
		tempInCelsius,
		weatherTitle,
		weatherDesc,
		sunriseTimeInString,
		sunsetTimeInString,
		humidity,
		windSpeed
	} = props;

	return (
		<div>
			<p>{`${city}, ${country}`}</p>
			<p>{datetimeInString}</p>
			<Row type="flex" justify="center">
				<Col xs={24} sm={16} md={10}>
					<Row type="flex" justify="center">
						<Col xs={24}>
							<Row gutter={8}>
								<Col span={12}>
									<img
										src={`http://openweathermap.org/img/w/${weatherIcon}.png`}
										alt="error"
									/>
								</Col>
								<Col span={12} style={{ textAlign: "start" }}>
									<div style={{ fontWeight: "700" }}>
										{weatherTitle}
									</div>
									<div>{weatherDesc}</div>
								</Col>
							</Row>
						</Col>
						<Col xs={24}>
							<Row style={{ padding: "8px 0" }}>
								<Statistic
									value={tempInCelsius}
									valueStyle={{ fontSize: "36px" }}
									suffix="&#8451;"
									precision={0}
								/>
							</Row>
						</Col>
						<Col xs={24}>
							<Row>
								<Col span={12}>
									<Statistic
										title="Humidity"
										value={humidity}
										prefix={<SvgDropletIcon />}
										suffix="%"
									/>
								</Col>
								<Col span={12}>
									<Statistic
										title="Wind Speed"
										precision={1}
										value={windSpeed}
										prefix={<SvgWindIcon />}
										suffix="m/s"
									/>
								</Col>
							</Row>
						</Col>
						<Col xs={24}>
							<Row>
								<Col span={12}>
									<Statistic
										title="Sunrise Time"
										value={sunriseTimeInString}
										prefix={<SvgSunriseIcon />}
									/>
								</Col>
								<Col span={12}>
									<Statistic
										title="Sunset Time"
										value={sunsetTimeInString}
										prefix={<SvgSunsetIcon />}
									/>
								</Col>
							</Row>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

const CurrentWeatherPanelComponent = props => {
	const { isFetching, currentWeather, onFetchWeather } = props;

	useEffect(() => {
		// Fetch weather for Ha Noi
		onFetchWeather("1581130");
	}, []);

	return (
		<Row type="flex" justify="center" align="middle">
			<Col span={20}>
				{isFetching && <Spinner />}
				{!isFetching && currentWeather.datetime !== undefined && (
					<DisplayPanel {...currentWeather} />
				)}
			</Col>
		</Row>
	);
};

CurrentWeatherPanelComponent.propTypes = {
	isFetching: PropTypes.bool,
	currentWeather: PropTypes.object,
	onFetchWeather: PropTypes.func
};

export default CurrentWeatherPanelComponent;
