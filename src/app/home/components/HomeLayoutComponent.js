import React from "react";

import { Row, Col, Layout } from "antd";
import styled from "styled-components";

const { Header, Content, Footer } = Layout;

const HomeMain = styled(Col)`
	height: 90vh;
	background-color: #fff;
`;

const HomeLayoutComponent = props => {
	return (
		<Layout>
			{/* <Header>header</Header> */}
			<Content>
				<HomeMain>{props.children}</HomeMain>
			</Content>
			<Footer>Weather App</Footer>
		</Layout>
	);
};

export default HomeLayoutComponent;
