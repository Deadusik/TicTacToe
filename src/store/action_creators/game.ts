import { GameFieldCell } from "../../models/gameFieldCell"
import { GameActionTypes } from "../../types/game"

export const makeMove = (cell: GameFieldCell) => ({
    type: GameActionTypes.MAKE_MOVE,
    payload: cell
})

export const makeMoveAI = () => ({
    type: GameActionTypes.AI_MAKE_MOVE
})

export const endGame = () => ({
    type: GameActionTypes.END_GAME
})

