import { GameFieldCell, IGameFieldCell } from "../models/gameFieldCell";
import { GAME_FIELD_CELL_SIZE } from "./constants";
import { CellLocation, CellTypes, GameStatus } from "./enums";
import { getRandomInt } from "./random";
import circleSvgSrc from '../assets/svgs/ziro.svg'
import crossSvgSrc from '../assets/svgs/cross.svg'
import drawSvgSrc from '../assets/svgs/handShake.svg'
import svgFilterStyles from '../styles/svg/svgFilters.module.scss'

export const initGameField = (): Array<IGameFieldCell> => {
    let gameField = []

    for (let i = 0; i < GAME_FIELD_CELL_SIZE; i++) {
        gameField.push(new GameFieldCell(CellTypes.EMPTY, i))
    }

    return gameField
}

export const replaceGameFieldCell = (field: Array<IGameFieldCell>, cell: IGameFieldCell)
    : Array<IGameFieldCell> => {

    if (cell.Type === CellTypes.EMPTY)
        return field

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

export const getCellFromAI = (isCrossTurn: boolean, field: IGameFieldCell[]): GameFieldCell => {
    const cellType = isCrossTurn ? CellTypes.CROSS : CellTypes.ZIRO

    while (true) {
        const position = getRandomInt(9)
        if (field[position].Type === CellTypes.EMPTY) {
            return new GameFieldCell(cellType, position)
        }
    }
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

export const logGame = (gameStatus: GameStatus) => {
    let history = localStorage.getItem('history')
    let historyArray: GameStatus[] = history ? JSON.parse(history) : []
    historyArray.push(gameStatus)
    localStorage.setItem('history', JSON.stringify(historyArray))
}

export const getSvgSrcByWinner = (winner: number): string => {
    let svg = ''

    switch (winner) {
        case 1: {
            svg = drawSvgSrc
            break
        }
        case 2: {
            svg = circleSvgSrc
            break
        }
        case 3: {
            svg = crossSvgSrc
            break
        }
    }

    return svg
}

export const getSvgFilterByWinner = (winner: number): string => {
    let filter = ''

    switch (winner) {
        case 1: {
            filter = ''
            break
        }
        case 2: {
            filter = svgFilterStyles.Circle
            break
        }
        case 3: {
            filter = svgFilterStyles.Cross
            break
        }
    }

    return filter
}