import { IGameFieldCell } from "../models/gameFieldCell"

export enum GameActionTypes {
    MAKE_MOVE,
    ABORT_GAME
}

export interface IGameState {
    field: any[],
    isCrossTurn: boolean,
    isGameEnd: boolean
}

export interface IMakeMove {
    type: GameActionTypes.MAKE_MOVE,
    payload: IGameFieldCell
}

export interface IAbortGame {
    type: GameActionTypes.ABORT_GAME
}

export type IGameAction = IMakeMove | IAbortGame