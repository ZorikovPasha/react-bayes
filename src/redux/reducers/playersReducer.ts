import { CONST } from "../CONST"
import { playersActionCreatorType } from "../types"

const initialState = {
  players: []
}


export const playersReducer = (state = initialState, action: playersActionCreatorType) => {
  switch (action.type) {
    case CONST.PLAYERS:
      return {
        ...state,
        players: action.payload
      }
    default:
      return state
  }
}