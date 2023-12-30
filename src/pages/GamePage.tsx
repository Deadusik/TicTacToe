import { GamePanel } from "../components/GamePanel";
import gridSVG from '../assets/grid.svg'
import styles from '../styles/pages/GamePage.module.scss'
import { SPACE } from "../utils/constants";
import { GameField } from "../components/game_field/GameField";
import { GameMode, GameStatus } from "../utils/enums";
import { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

interface IGamePageParams {
    gameMode: GameMode
}

export function GamePage({ gameMode }: IGamePageParams) {
    const { isCrossTurn, gameStatus } = useTypedSelector(state => state.game)
    const { makeMoveAI } = useActions()

    useEffect(() => {
        if (gameMode === GameMode.SOLO
            && !isCrossTurn
            && gameStatus === GameStatus.GAME_ON)
            makeMoveAI()
    }, [isCrossTurn])

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
            <div>
                {
                    gameStatus !== GameStatus.GAME_ON &&
                    <div>
                        Game is end!
                    </div>
                }
            </div>
        </div >
    )
}