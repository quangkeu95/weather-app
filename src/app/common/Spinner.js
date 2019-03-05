import React from "react";
import { Spin, Icon } from "antd";

const Spinner = props => {
	return <Spin size="large" indicator={<Icon type="loading" />} />;
};

export default Spinner;
