import { GameActionTypes, IGameAction, IGameState } from "../../types/game"
import { GameStatus } from "../../utils/enums"
import { checkIsGameEnd, getCellFromEasyAI, getCellFromHardAI, getCellFromMiddleAI, initGameField, replaceGameFieldCell } from "../../utils/game"

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
        case GameActionTypes.EASY_AI_MAKE_MOVE: {
            return {
                ...state,
                isCrossTurn: !state.isCrossTurn,
                field: replaceGameFieldCell(state.field, getCellFromEasyAI(state.isCrossTurn, state.field)),
                gameStatus: checkIsGameEnd(state.field)
            }
        }
        case GameActionTypes.MIDDLE_AI_MAKE_MOVE: {
            return {
                ...state,
                isCrossTurn: !state.isCrossTurn,
                field: replaceGameFieldCell(state.field, getCellFromMiddleAI(state.isCrossTurn, state.field)),
                gameStatus: checkIsGameEnd(state.field)
            }
        }
        case GameActionTypes.HARD_AI_MAKE_MOVE: {
            return {
                ...state,
                isCrossTurn: !state.isCrossTurn,
                field: replaceGameFieldCell(state.field, getCellFromHardAI(state.isCrossTurn, state.field)),
                gameStatus: checkIsGameEnd(state.field)
            }
        }
        case GameActionTypes.END_GAME: {
            return {
                field: initGameField(),
                isCrossTurn: true,
                gameStatus: GameStatus.GAME_ON
            }
        }
        default:
            return state
    }
}