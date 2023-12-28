import { IGameFieldCell } from "../models/gameFieldCell"
import { GameStatus } from "../utils/enums"

export enum GameActionTypes {
    MAKE_MOVE,
    ABORT_GAME
}

export interface IGameState {
    field: Array<IGameFieldCell>,
    isCrossTurn: boolean,
    gameStatus: GameStatus
}

export interface IMakeMove {
    type: GameActionTypes.MAKE_MOVE,
    payload: IGameFieldCell
}

export interface IAbortGame {
    type: GameActionTypes.ABORT_GAME
}

export type IGameAction = IMakeMove | IAbortGame