import { CONST } from "./CONST"


export type playersActionType = {
  type: typeof CONST.PLAYERS
  payload: string[]
}


export type featuresActionType = {
  type: typeof CONST.FEATURES
  payload: number[]
}

export type playersActionCreatorType = (players: string[]) => playersActionType;

export type featuresActionCreatorType = (arrfeatures: number[]) => featuresActionType;