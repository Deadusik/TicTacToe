import { GamePanel } from "../components/GamePanel";
import gridSVG from '../assets/svgs/grid.svg'
import svgFilter from '../styles/svg/svgFilters.module.scss'
import { SPACE } from "../utils/constants";
import { GameField } from "../components/game_field/GameField";
import { GameMode, GameStatus, Theme } from "../utils/enums";
import { useContext, useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { GameEndModal } from "../components/modal/GameEndModal";
import { AppSettingsContext } from "../context";

interface IGamePageParams {
    gameMode: GameMode
}

export function GamePage({ gameMode }: IGamePageParams) {
    const { isCrossTurn, gameStatus } = useTypedSelector(state => state.game)
    const { makeMoveAI } = useActions()
    const context = useContext(AppSettingsContext)
    const theme = context?.settings.Theme ?? Theme.WHITE

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
            theme === Theme.WHITE ? svgFilter.Grid : svgFilter.GridLight,
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
                    <GameEndModal />
                }
            </div>
        </div >
    )
}