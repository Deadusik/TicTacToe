import { GameFieldCell, IGameFieldCell } from "../models/gameFieldCell";
import { GAME_FIELD_CELL_SIZE } from "./constants";
import { CellTypes } from "./enums";

export const initGameField = (): Array<IGameFieldCell> => {
    let gameField = []
    for (let i = 0; i < GAME_FIELD_CELL_SIZE; i++) {
        gameField.push(new GameFieldCell(CellTypes.EMPTY, i))
    }
    return gameField
}

export const replaceGameFieldCell = (field: Array<IGameFieldCell>, cell: IGameFieldCell)
    : Array<IGameFieldCell> => {
    for (const cellItem of field) {
        if (cellItem.Position === cell.Position) {
            field[cellItem.Position] = cell
            return field
        }
    }

    return field
}

export const checkGameWin = (field: Array<IGameFieldCell>): boolean => {
    let countBusyCells = 0

    for (const cell of field) {
        if (cell.Type !== CellTypes.EMPTY) countBusyCells++
    }

    if (countBusyCells === 9)
        return true

    return false
}