import CrossSVG from '../assets/cross.svg'
import ZiroSVG from '../assets/ziro.svg'

interface IGamePageParams {
    contentType?: boolean
}

export function GameGridItem({ contentType }: IGamePageParams) {
    const componentStyles = {
        mainContainer: [
            'flex',
            'justify-center',
            'items-center',
            'w-[200px]',
            'h-[200px]',
            'bg-sky-400',
            'bg-transparent',
            'cursor-pointer'
        ].join(' ')
    }

    return (
        <div className={componentStyles.mainContainer}>
            1
        </div>
    )
}