import { CONST } from "../CONST"
import { featuresActionType } from "../types"


export type initialStateType = {
  features: []
}
const initialState = {
  features: []
}


export const featuresReducer = (state = initialState, action: featuresActionType) => {
  switch (action.type) {
    case CONST.FEATURES:
      return {
        ...state,
        features: action.payload
      }
    default:
      return state
  }
}