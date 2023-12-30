import { useState } from 'react'
import crossSVG from '../../assets/cross.svg'
import ziroSVG from '../../assets/ziro.svg'
import { SPACE } from '../../utils/constants'
import svgFilterStyles from '../../styles/svg/svgFilters.module.scss'
import { CellTypes, GameStatus } from '../../utils/enums'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import { GameFieldCell, IGameFieldCell } from '../../models/gameFieldCell'

interface IGamePageParams {
    position: number
}

export function GameGridItem({ position }: IGamePageParams) {
    const [isMouseEnter, setIsMouseEnter] = useState(false)
    const { makeMove } = useActions()
    const { field, isCrossTurn, gameStatus } = useTypedSelector(state => state.game)

    const cell: IGameFieldCell = field[position - 1]
    const cellMoveType
        = isCrossTurn ? CellTypes.CROSS : CellTypes.ZIRO

    const componentStyles = {
        mainContainer: [
            'w-full',
            'h-full',
            'flex',
            'justify-center',
            'items-center',
            'bg-sky-400',
            'bg-transparent',
            'cursor-pointer',
            'select-none'
        ].join(SPACE),
        SVG: [
            'outline-none'
        ].join(SPACE),
        crossSVG: [
            svgFilterStyles.Cross,
        ].join(SPACE),
        circleSVG: [
            svgFilterStyles.Circle,
        ].join(SPACE),
        hoverGridItemSVG: [
            'animate-pulse',
        ].join(SPACE),
    }

    let [svgStyle, svgSrc] = ['', '']

    // set style and src for svg in current cell
    if (cell.Type === CellTypes.EMPTY) {
        [svgStyle, svgSrc] = cellMoveType === CellTypes.CROSS ?
            [

                [ // hover svg style
                    componentStyles.crossSVG,
                    componentStyles.hoverGridItemSVG,
                    componentStyles.SVG
                ].join(SPACE),
                // hover svg src
                crossSVG
            ]
            :
            [
                [ // hover svg style
                    componentStyles.circleSVG,
                    componentStyles.hoverGridItemSVG,
                    componentStyles.SVG
                ].join(SPACE),
                // hover svg src
                ziroSVG
            ]
    }
    else {
        [svgStyle, svgSrc] = cell.Type === CellTypes.CROSS ?
            [
                [ // svg style
                    componentStyles.crossSVG,
                    componentStyles.SVG
                ].join(SPACE),
                // svg src
                crossSVG
            ]
            :
            [
                [ // svg style
                    componentStyles.circleSVG,
                    componentStyles.SVG
                ].join(SPACE),
                // svg src
                ziroSVG
            ]
    }

    const setCell = () => {
        makeMove(new GameFieldCell(
            cellMoveType,
            position - 1
        ))
    }

    return (
        <div className={componentStyles.mainContainer}
            onMouseEnter={() => setIsMouseEnter(true)}
            onMouseLeave={() => setIsMouseEnter(false)}
            onClick={() => {
                if (gameStatus === GameStatus.GAME_ON && cell.Type === CellTypes.EMPTY) {
                    setCell()
                }
            }}>
            {
                cell.Type !== CellTypes.EMPTY ?
                    // if cell is set
                    <img className={
                        [
                            svgStyle
                        ].join(SPACE)
                    } src={svgSrc} draggable='false' alt='cell' />
                    :
                    isMouseEnter && gameStatus === GameStatus.GAME_ON &&
                    // if cell is empty
                    <img className={
                        [
                            svgStyle
                        ].join(SPACE)
                    } src={svgSrc} draggable='false' alt='cell' />
            }
        </div>
    )
}