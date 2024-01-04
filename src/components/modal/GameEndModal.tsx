import { useTypedSelector } from "../../hooks/useTypedSelector"
import { SPACE } from "../../utils/constants"
import { GameStatus } from "../../utils/enums"
import crossSvgSrc from '../../assets/cross.svg'
import ziroSvgSrc from '../../assets/ziro.svg'
import handShakeSvg from '../../assets/handShake.svg'
import svgFilterStyles from '../../styles/svg/svgFilters.module.scss'
import { useActions } from "../../hooks/useActions"
import { Link } from "react-router-dom"
import { MENU } from "../../router/paths"

export const GameEndModal = () => {
    const { gameStatus } = useTypedSelector(store => store.game)
    const { endGame } = useActions()

    const componentStyles = {
        container: [
            'w-full',
            'flex',
            'justify-center',
            'items-center',
            'absolute',
            'h-screen',
            'bg-black/25',
            'z-10',
        ].join(SPACE),
        modalContainer: [
            'flex',
            'flex-col',
            'items-center',
            'rounded',
            'w-[500px]',
            'bg-white',
            'z-11',
            'py-3',
            'px-[100px]'
        ].join(SPACE),
        title: [
            'text-4xl',
            'font-bold',
        ].join(SPACE),
        winnerTitle: [
            'text-2xl',
            'font-bold',
            'text-yellow-600'
        ].join(SPACE),
        buttonContainer: [
            'flex',
            'w-full',
            'justify-between'
        ].join(SPACE),
        button: [
            'rounded',
            'font-bold',
            'text-xl',
            'text-white',
            'p-2',
            'w-[49%]',
            'hover:opacity-75'
        ].join(SPACE),
        menuButton: [
            'flex',
            'justify-center',
            'bg-blue-700'
        ].join(SPACE),
        playButton: [
            'bg-green-600'
        ].join(SPACE),
        svg: [
            'p-4',
            'w-[300px]',
            'h-[300px]'
        ].join(SPACE)
    }
    const [svgSrc, svgFilter] = gameStatus === GameStatus.DRAW ? [handShakeSvg, ''] :
        gameStatus === GameStatus.CROSS_WIN ? [crossSvgSrc, svgFilterStyles.Cross] : [ziroSvgSrc, svgFilterStyles.Circle]

    return (
        <div className={componentStyles.container}>
            <div className={componentStyles.modalContainer}>
                <h1 className={componentStyles.title}>Game is end!</h1>
                {
                    gameStatus === GameStatus.DRAW ?
                        <h2 className={componentStyles.winnerTitle}>Game is draw</h2>
                        :
                        <h2 className={componentStyles.winnerTitle}>Winner is</h2>
                }
                <img className={[componentStyles.svg, svgFilter].join(SPACE)} src={svgSrc} alt="winner" />
                <div className={componentStyles.buttonContainer}>
                    <Link className={[componentStyles.button, componentStyles.menuButton]
                        .join(SPACE)}
                        onClick={endGame}
                        to={MENU}>
                        Menu
                    </Link>
                    <button className={[componentStyles.button, componentStyles.playButton]
                        .join(SPACE)}
                        onClick={endGame}>
                        Play Again
                    </button>
                </div>
            </div>
        </div>
    )
}