import { GameActionTypes, IGameAction, IGameState } from "../../types/game"
import { GameStatus } from "../../utils/enums"
import { checkIsGameEnd, initGameField, replaceGameFieldCell } from "../../utils/game"

export const initState: IGameState = {
    field: initGameField(),
    isCrossTurn: true,
    gameStatus: GameStatus.GAME_ON
}

export const gameReducer = (state = initState, action: IGameAction): IGameState => {
    switch (action.type) {
        case GameActionTypes.MAKE_MOVE: {
            return {
                ...state,
                isCrossTurn: !state.isCrossTurn,
                field: replaceGameFieldCell(state.field, action.payload),
                gameStatus: checkIsGameEnd(state.field)
            }
        }
        case GameActionTypes.ABORT_GAME: {
            return { ...state }
        }
        default:
            return state
    }
}