import { GameActionTypes, IGameAction, IGameState } from "../../types/game"
import { initGameField, replaceGameFieldCell } from "../../utils/game"

export const initState: IGameState = {
    field: initGameField(),
    isCrossTurn: true,
    isGameEnd: false
}

export const gameReducer = (state = initState, action: IGameAction): IGameState => {
    switch (action.type) {
        case GameActionTypes.MAKE_MOVE: {
            return { ...state, field: replaceGameFieldCell(state.field, action.payload) }
        }
        case GameActionTypes.ABORT_GAME: {
            return { ...state }
        }
        default:
            return state
    }
}