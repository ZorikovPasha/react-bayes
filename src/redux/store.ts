import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers/index";

export interface IRootState {
  playersReducer: { players: string[] }
  featuresReducer: { features: number[] }
}

const composeEnhancer = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) as typeof compose || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)) );

export default store;