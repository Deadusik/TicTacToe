import { useTypedSelector } from "../../hooks/useTypedSelector"
import { SPACE } from "../../utils/constants"
import { GameStatus, Theme } from "../../utils/enums"
import crossSvgSrc from '../../assets/svgs/cross.svg'
import ziroSvgSrc from '../../assets/svgs/ziro.svg'
import handShakeSvg from '../../assets/svgs/handShake.svg'
import svgFilterStyles from '../../styles/svg/svgFilters.module.scss'
import { useActions } from "../../hooks/useActions"
import { Link } from "react-router-dom"
import { MENU } from "../../router/paths"
import { useContext } from "react"
import { AppSettingsContext } from "../../context"
import { useTranslation } from "react-i18next"

export const GameEndModal = () => {
    const { gameStatus } = useTypedSelector(store => store.game)
    const { endGame } = useActions()

    const context = useContext(AppSettingsContext)
    const theme = context?.settings.Theme ?? Theme.WHITE
    const { t } = useTranslation()

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
            theme === Theme.WHITE ? 'bg-white' : 'bg-[#343434]',
            'z-11',
            'py-3',
            'px-[100px]'
        ].join(SPACE),
        title: [
            'text-4xl',
            'font-bold',
            theme === Theme.WHITE ? 'text-black' : 'text-white'
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
                <h1 className={componentStyles.title}>{t('winDialog.title')}</h1>
                {
                    gameStatus === GameStatus.DRAW ?
                        <h2 className={componentStyles.winnerTitle}>{t('winDialog.draw')}</h2>
                        :
                        <h2 className={componentStyles.winnerTitle}>{t('winDialog.winner')}</h2>
                }
                <img className={[componentStyles.svg, svgFilter].join(SPACE)} src={svgSrc} alt="winner" />
                <div className={componentStyles.buttonContainer}>
                    <Link className={[componentStyles.button, componentStyles.menuButton]
                        .join(SPACE)}
                        onClick={endGame}
                        to={MENU}>
                        {t('winDialog.menu')}
                    </Link>
                    <button className={[componentStyles.button, componentStyles.playButton]
                        .join(SPACE)}
                        onClick={endGame}>
                        {t('winDialog.play')}
                    </button>
                </div>
            </div>
        </div>
    )
}