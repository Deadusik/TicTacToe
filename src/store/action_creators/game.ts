import { GameFieldCell } from "../../models/gameFieldCell"
import { GameActionTypes } from "../../types/game"

export const makeMove = (cell: GameFieldCell) => ({
    type: GameActionTypes.MAKE_MOVE,
    payload: cell
})

export const makeMoveAI = (cell: GameFieldCell) => ({
    type: GameActionTypes.AI_MAKE_MOVE,
    payload: cell
})

export const abortGame = () => ({
    type: GameActionTypes.ABORT_GAME
})

