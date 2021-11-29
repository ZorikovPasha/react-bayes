import { combineReducers } from "redux";

import { featuresReducer } from "./featuresReducer";
import { playersReducer } from "./playersReducer";

const rootReducer = combineReducers({playersReducer, featuresReducer});

export default rootReducer;