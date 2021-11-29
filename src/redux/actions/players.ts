import { ThunkAction } from 'redux-thunk';
import { CONST } from '../CONST';

import { playersActionType } from "../types";

export const playersActionCreator = (items: string[]) => ({
  type: CONST.PLAYERS,
  payload: items
})

export const playersThunkCreator = (): ThunkAction<void, void, unknown, playersActionType> => {
  return dispatch => {
    try {
      fetch("http://localhost:3000/db.json")
        .then(response => {
          return response.json()
        })
        .then(data => {
          const players = data.v1.games["0"].lineup["0"];
          return players;
        })
        .then((players) => {
          dispatch(playersActionCreator(players))
        })
    } catch (error){
      console.log(error);
    }
  }
  
}