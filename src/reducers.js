import { combineReducers } from "redux";
import homeReducer from "./app/home/duck";

const rootReducers = combineReducers({
	home: homeReducer
});

export default rootReducers;
