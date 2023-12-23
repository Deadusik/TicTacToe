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
            return { ...state, isCrossTurn: !state.isCrossTurn, field: replaceGameFieldCell([...state.field], action.payload) }
        }
        case GameActionTypes.CHECK_GAME_WIN: {
            return { ...state }
        }
        case GameActionTypes.ABORT_GAME: {
            return { ...state }
        }
        default:
            return state
    }
}