import { Link } from "react-router-dom"
import { useActions } from "../hooks/useActions"
import { MENU } from "../router/paths"
import { useContext } from "react"
import { AppSettingsContext } from "../context"
import resetSoundSrc from '../assets/sounds/clear.wav'
// utils
import { playBtnSound, playSound } from "../utils/game"
import { SPACE } from "../utils/constants"
// svg stuff
import exitSvgSrc from '../assets/svgs/exit.svg'
import restartSvgSrc from '../assets/svgs/restart.svg'
import svgFilters from '../styles/svg/svgFilters.module.scss'

export function GamePanel() {
    const { endGame } = useActions()
    const context = useContext(AppSettingsContext)
    const isSoundOn = context?.settings.IsSoundOn ?? false

    const restartHandler = () => {
        endGame()
        playSound(resetSoundSrc, !isSoundOn)
    }

    const exitHandler = () => {
        endGame()
        playBtnSound(!isSoundOn)
    }

    const componentStyles = {
        mainContainer: [
            'w-full',
            'h-[100px]',
            'fixed',
        ].join(SPACE),
        gameInfo: [
            'flex',
            'justify-center',
            'absolute',
            'm-auto',
            'left-0',
            'right-0',
        ].join(SPACE),
        gameController: [
            'absolute',
            'flex',
            'right-0',
        ].join(SPACE),
        button: [
            'flex',
            'justify-center',
            'items-center',
            'bg-blue-500',
            'text-white',
            'border-blue-600',
            'border-2'
        ].join(SPACE),
        svgIcon: [
            'w-[50px]',
            'h-[50px]',
            svgFilters.WhiteFilter
        ].join(SPACE),
        svg: [
            'w-[50px]',
            'h-[50px]',
        ].join(SPACE),
        timer: [
            'text-3xl'
        ].join(SPACE)
    }

    return (
        <div className={componentStyles.mainContainer}>
            <div className={componentStyles.gameController}>
                <button className={componentStyles.button} onClick={restartHandler}>
                    <img className={componentStyles.svgIcon} src={restartSvgSrc} alt="restart" />
                </button>
                <Link className={componentStyles.button} onClick={exitHandler} to={MENU}>
                    <img className={componentStyles.svgIcon} src={exitSvgSrc} alt="exit" />
                </Link>
            </div>
        </div>
    )
}