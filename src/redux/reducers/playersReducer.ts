import { CONST } from "../CONST"
import { playersActionType } from "../types"

const initialState = {
  players: []
}


export const playersReducer = (state = initialState, action: playersActionType) => {
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