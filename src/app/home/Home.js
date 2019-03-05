import React from "react";
import SearchInput from "./containers/SearchInputContainer";
import HomeLayout from "./components/HomeLayoutComponent";

import CurrentWeatherPanel from "./containers/CurrentWeatherPanelContainer";

const Home = props => {
	return (
		<HomeLayout>
			<SearchInput />
			<CurrentWeatherPanel />
		</HomeLayout>
	);
};

export default Home;
