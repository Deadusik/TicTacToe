import { GameFieldCell, IGameFieldCell } from "../models/gameFieldCell";
import { GAME_FIELD_CELL_SIZE } from "./constants";
import { CellLocation, CellTypes, GameStatus } from "./enums";

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
            field[cell.Position] = cell
            return field
        }
    }

    return field
}

export const checkIsGameEnd = (field: Array<IGameFieldCell>): GameStatus => {
    const winLines = [
        [
            field[CellLocation.TOP_LEFT],
            field[CellLocation.TOP_CENTER],
            field[CellLocation.TOP_RIGHT]
        ],
        [
            field[CellLocation.MIDDLE_LEFT],
            field[CellLocation.MIDDLE_CENTER],
            field[CellLocation.MIDDLE_RIGHT]
        ],
        [
            field[CellLocation.BOTTOM_LEFT],
            field[CellLocation.BOTTOM_CENTER],
            field[CellLocation.BOTTOM_RIGHT]
        ],
        [
            field[CellLocation.TOP_LEFT],
            field[CellLocation.MIDDLE_LEFT],
            field[CellLocation.BOTTOM_LEFT]
        ],
        [
            field[CellLocation.TOP_CENTER],
            field[CellLocation.MIDDLE_CENTER],
            field[CellLocation.BOTTOM_CENTER]
        ],
        [
            field[CellLocation.TOP_RIGHT],
            field[CellLocation.MIDDLE_RIGHT],
            field[CellLocation.BOTTOM_RIGHT]
        ],
        [
            field[CellLocation.TOP_LEFT],
            field[CellLocation.MIDDLE_CENTER],
            field[CellLocation.BOTTOM_RIGHT]
        ],
        [
            field[CellLocation.TOP_RIGHT],
            field[CellLocation.MIDDLE_CENTER],
            field[CellLocation.BOTTOM_LEFT]
        ]
    ]

    let result = GameStatus.GAME_ON

    for (const winLine of winLines) {
        result = checkWinLine(winLine)

        if (result !== GameStatus.GAME_ON)
            return result
    }

    // is field full
    result = checkIsDraw(field)

    return result
}

const checkIsDraw = (field: IGameFieldCell[]): GameStatus => {
    for (const cell of field) {
        if (cell.Type === CellTypes.EMPTY)
            return GameStatus.GAME_ON
    }
    return GameStatus.DRAW
}

const checkWinLine = (cellLine: IGameFieldCell[]): GameStatus => {
    const checkingCellType = cellLine[cellLine.length - 1].Type
    cellLine.pop()

    for (const cell of cellLine) {
        if (cell.Type !== checkingCellType)
            return GameStatus.GAME_ON
    }

    return getGameStatus(checkingCellType)
}

const getGameStatus = (cellType: CellTypes): GameStatus => {
    switch (cellType) {
        case CellTypes.CROSS:
            return GameStatus.CROSS_WIN
        case CellTypes.ZIRO:
            return GameStatus.ZIRO_WIN
        default:
            return GameStatus.GAME_ON
    }
}