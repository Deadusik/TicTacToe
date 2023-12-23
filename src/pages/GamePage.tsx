import { GamePanel } from "../components/GamePanel";
import gridSVG from '../assets/grid.svg'
import styles from '../styles/pages/GamePage.module.scss'
import { SPACE } from "../utils/constants";
import { GameField } from "../components/game_field/GameField";

interface IGamePageParams {
    gameMode: string
}

export function GamePage({ gameMode }: IGamePageParams) {
    const pageStyles = {
        mianContainer: [
            'w-full',
            'flex',
            'h-screen'
        ].join(SPACE),
        girdSVG: [
            styles.SVGGRid,
            'w-[500px]',
            'absolute',
            'top-1/2',
            'left-1/2',
            'transform',
            '-translate-x-1/2',
            '-translate-y-1/2',
        ].join(SPACE)
    }

    return (
        <div className={pageStyles.mianContainer}>
            <GamePanel />
            <GameField />
            { /* game field background */}
            <img className={pageStyles.girdSVG} src={gridSVG} alt="grid" />
        </div >
    )
}