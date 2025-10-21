import { GameFieldCell } from "../../models/gameFieldCell"
import { GameActionTypes } from "../../types/game"

export const makeMove = (cell: GameFieldCell) => ({
    type: GameActionTypes.MAKE_MOVE,
    payload: cell
})

export const makeMoveEasyAI = () => ({
    type: GameActionTypes.EASY_AI_MAKE_MOVE
})

export const makeMoveMiddleAI = () => ({
    type: GameActionTypes.MIDDLE_AI_MAKE_MOVE
})

export const makeMoveHardAI = () => ({
    type: GameActionTypes.HARD_AI_MAKE_MOVE
})

export const endGame = () => ({
    type: GameActionTypes.END_GAME
})

