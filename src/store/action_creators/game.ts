import { GameFieldCell } from "../../models/gameFieldCell"
import { GameActionTypes } from "../../types/game"

export const MakeMove = (cell: GameFieldCell) => ({
    type: GameActionTypes.MAKE_MOVE,
    payload: cell
})

export const AbortGame = () => ({
    type: GameActionTypes.ABORT_GAME
})