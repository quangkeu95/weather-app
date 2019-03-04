import { combineReducers } from "redux";

const defaultReducer = (state = {}, action) => {
	switch (action) {
		default:
			return state;
	}
};

const rootReducers = combineReducers({
	home: defaultReducer
});

export default rootReducers;
