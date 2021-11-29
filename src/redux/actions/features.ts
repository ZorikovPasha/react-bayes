import { ThunkAction } from 'redux-thunk';

import { CONST } from "../CONST"
import { featuresActionType } from "../types"
import { fetchFeatures } from "../../api";

const featuresActionCreator = (features: number[]): featuresActionType => ({
  type: CONST.FEATURES,
  payload: features

})

export const featuresThunkCreator = (id: number): ThunkAction<void, number, unknown, featuresActionType> => {
  return (dispatch) => {
    fetchFeatures(dispatch, id, featuresActionCreator)
  }
}