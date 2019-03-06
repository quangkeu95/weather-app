import React from "react";

import { Layout } from "antd";
import styled from "styled-components";

const { Header, Content, Footer } = Layout;

const HomeMain = styled.div`
	height: 100vh;
	background-color: #fff;
`;

const HomeLayoutComponent = props => {
	return (
		<Layout>
			{/* <Header>header</Header> */}
			<Content>
				<HomeMain>{props.children}</HomeMain>
			</Content>
			<Footer>
				Weather App - All times are displayed in local timezone
			</Footer>
		</Layout>
	);
};

export default HomeLayoutComponent;
