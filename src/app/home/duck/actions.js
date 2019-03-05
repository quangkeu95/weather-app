import types from "./types";

const selectCity = cityId => ({
	type: types.SELECT_CITY,
	payload: cityId.split("-")[0]
});

export default {
	selectCity
};
