import { CellTypes } from "../utils/enums";

export interface IGameFieldCell {
    get Position(): number
    get Type(): CellTypes
    set Type(type: CellTypes)
}

export class GameFieldCell implements IGameFieldCell {
    private type: CellTypes
    private position: number

    constructor(type: CellTypes = CellTypes.EMPTY, position: number = -1) {
        this.type = type
        this.position = position
    }

    get Position(): number {
        return this.position
    }

    set Type(type: CellTypes) {
        this.type = type
    }

    get Type(): CellTypes {
        return this.type
    }
}