import { GameFieldCell, IGameFieldCell } from "../models/gameFieldCell";
import { GAME_FIELD_CELL_SIZE } from "./constants";
import { CellTypes } from "./enums";

export const initGameField = (): Array<IGameFieldCell> => {
    let gameField = []
    for (let i = 0; i < GAME_FIELD_CELL_SIZE; i++) {
        gameField.push(new GameFieldCell(CellTypes.EMPTY, i + 1))
    }
    return gameField
}

export const replaceGameFieldCell = (field: Array<IGameFieldCell>, cell: IGameFieldCell)
    : Array<IGameFieldCell> => {
    field
        .filter(cellItem => cellItem.Position === cell.Position)
        .push(cell)

    return field
}