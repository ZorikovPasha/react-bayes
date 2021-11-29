import { combineReducers } from "redux";

import { playersReducer } from "./playersReducer";

const rootReducer = combineReducers({playersReducer});

export default rootReducer;