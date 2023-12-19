import { CellTypes } from "../utils/enums";

export interface IGameFieldCell {
    setCell(type: CellTypes, position: number): void
    get Position(): number
    get CellType(): CellTypes
}

export class GameFieldCell implements IGameFieldCell {
    private type: CellTypes
    private position: number

    constructor(type: CellTypes = CellTypes.EMPTY, position: number = -1) {
        this.type = type
        this.position = position
    }

    setCell(type: CellTypes, position: number) {
        this.type = type
        this.position = position
    }

    get Position(): number {
        return this.position
    }

    get CellType(): CellTypes {
        return this.type
    }
}