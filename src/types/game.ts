import { IGameFieldCell } from "../models/gameFieldCell"
import { GameStatus } from "../utils/enums"

export enum GameActionTypes {
    MAKE_MOVE,
    EASY_AI_MAKE_MOVE,
    MIDDLE_AI_MAKE_MOVE,
    HARD_AI_MAKE_MOVE,
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

export interface IMakeMoveEasyAI {
    type: GameActionTypes.EASY_AI_MAKE_MOVE
}

export interface IMakeMoveMiddleAI {
    type: GameActionTypes.MIDDLE_AI_MAKE_MOVE
}

export interface IMakeMoveHardAI {
    type: GameActionTypes.HARD_AI_MAKE_MOVE
}


export interface IEndGame {
    type: GameActionTypes.END_GAME
}

export type IGameAction = IMakeMove | IEndGame | IMakeMoveEasyAI | IMakeMoveMiddleAI | IMakeMoveHardAI