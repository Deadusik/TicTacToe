import { CellLocation, CellTypes } from "../utils/enums";
import { getRandomInt } from "../utils/random";
import { GameFieldCell, IGameFieldCell } from "./gameFieldCell";

export class TicTacToeIA {
    makeMove(cellType: CellTypes, field: IGameFieldCell[]): GameFieldCell {
        const randNum = getRandomInt(9)
        if (field[CellLocation.MIDDLE_CENTER].Type === CellTypes.EMPTY) {

        }

        return new GameFieldCell()
    }
}