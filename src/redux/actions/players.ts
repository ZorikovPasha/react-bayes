import { ThunkAction } from 'redux-thunk';
import { CONST } from '../CONST';

import { playersActionCreatorType } from "../types";

export const playersActionCreator = (items: string[]) => ({
  type: CONST.PLAYERS,
  payload: items
})

export const playersThunkCreator = (): ThunkAction<void, void, string, playersActionCreatorType> => {
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