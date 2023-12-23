import { GameFieldCell } from "../../models/gameFieldCell"
import { GameActionTypes } from "../../types/game"

export const makeMove = (cell: GameFieldCell) => ({
    type: GameActionTypes.MAKE_MOVE,
    payload: cell
})

export const checkGameWin = () => ({
    type: GameActionTypes.CHECK_GAME_WIN
})

export const abortGame = () => ({
    type: GameActionTypes.ABORT_GAME
})

