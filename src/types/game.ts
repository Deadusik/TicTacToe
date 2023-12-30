import { IGameFieldCell } from "../models/gameFieldCell"
import { GameStatus } from "../utils/enums"

export enum GameActionTypes {
    MAKE_MOVE,
    AI_MAKE_MOVE,
    END_GAME
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

export interface IMakeMoveAI {
    type: GameActionTypes.AI_MAKE_MOVE
}

export interface IEndGame {
    type: GameActionTypes.END_GAME
}

export type IGameAction = IMakeMove | IEndGame | IMakeMoveAI