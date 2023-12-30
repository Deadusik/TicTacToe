import { Link } from "react-router-dom"
import { useActions } from "../hooks/useActions"
import { SPACE } from "../utils/constants"
import { MENU } from "../router/paths"

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
            'right-0',
        ].join(SPACE),
        roundLabel: [
            ''
        ].join(SPACE)
    }

    return (
        <div className={componentStyles.mainContainer}>
            <div className={componentStyles.gameInfo}>
                <div>1</div>
                <h1>R1</h1>
                <div>1</div>
            </div>
            <div className={componentStyles.gameController}>
                <button onClick={endGame}>restart</button>
                <Link onClick={endGame} to={MENU}>exit</Link>
            </div>
        </div>
    )
}