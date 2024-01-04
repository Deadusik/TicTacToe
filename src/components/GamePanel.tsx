import { Link } from "react-router-dom"
import { useActions } from "../hooks/useActions"
import { SPACE } from "../utils/constants"
import { MENU } from "../router/paths"
import exitSvgSrc from '../assets/exit.svg'
import restartSvgSrc from '../assets/restart.svg'
import svgFilters from '../styles/svg/svgFilters.module.scss'

export function GamePanel() {
    const { endGame } = useActions()

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
                <button className={componentStyles.button} onClick={endGame}>
                    <img className={componentStyles.svgIcon} src={restartSvgSrc} alt="restart" />
                </button>
                <Link className={componentStyles.button} onClick={endGame} to={MENU}>
                    <img className={componentStyles.svgIcon} src={exitSvgSrc} alt="exit" />
                </Link>
            </div>
        </div>
    )
}