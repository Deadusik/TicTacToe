import { IGameFieldCell } from "../models/gameFieldCell"

export enum GameActionTypes {
    MAKE_MOVE,
    CHECK_GAME_WIN,
    ABORT_GAME
}

export interface IGameState {
    field: Array<IGameFieldCell>,
    isCrossTurn: boolean,
    isGameEnd: boolean
}

export interface ICheckGameWin {
    type: GameActionTypes.CHECK_GAME_WIN
}

export interface IMakeMove {
    type: GameActionTypes.MAKE_MOVE,
    payload: IGameFieldCell
}

export interface IAbortGame {
    type: GameActionTypes.ABORT_GAME
}

export type IGameAction = IMakeMove | IAbortGame | ICheckGameWin