import { useState } from 'react'
import crossSVG from '../assets/cross.svg'
import ziroSVG from '../assets/ziro.svg'
import { SPACE } from '../utils/constants'
import svgFilterStyles from '../styles/svg/svgFilters.module.scss'
import { CellItems } from '../utils/enums'

interface IGamePageParams {
    cellType?: CellItems
}

export function GameGridItem({ cellType = CellItems.CROSS }: IGamePageParams) {
    const [isMouseEnter, setIsMouseEnter] = useState(false)

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

    const [svgStyle, svgSrc] = cellType === CellItems.CROSS ?
        [componentStyles.crossSVG, crossSVG] : [componentStyles.circleSVG, ziroSVG]

    return (
        <div className={componentStyles.mainContainer}
            onMouseEnter={() => setIsMouseEnter(true)}
            onMouseLeave={() => setIsMouseEnter(false)}>
            {
                isMouseEnter &&
                <img className={
                    [
                        svgStyle,
                        componentStyles.hoverGridItemSVG
                    ].join(SPACE)
                } src={svgSrc} alt='hover-item' />
            }
        </div>
    )
}