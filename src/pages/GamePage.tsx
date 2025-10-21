import { useContext, useEffect } from "react";
import { AppSettingsContext } from "../context";
// components 
import { GamePanel } from "../components/GamePanel";
import { GameField } from "../components/game_field/GameField";
import { GameEndModal } from "../components/modal/GameEndModal";
// hooks
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
// utils
import { logGame } from "../utils/game";
import { SPACE } from "../utils/constants";
import { GameMode, GameStatus, Theme } from "../utils/enums";
// svg stuff
import gridSVG from '../assets/svgs/grid.svg'
import svgFilter from '../styles/svg/svgFilters.module.scss'
import { setTimeout } from "timers/promises";

interface IGamePageParams {
    gameMode: GameMode
}

export function GamePage({ gameMode }: IGamePageParams) {
    const { isCrossTurn, gameStatus } = useTypedSelector(state => state.game)
    const { makeMoveEasyAI, makeMoveMiddleAI, makeMoveHardAI } = useActions()
    const context = useContext(AppSettingsContext)
    const theme = context?.settings.Theme ?? Theme.WHITE

    useEffect(() => {
        if (gameMode !== GameMode.DUAL
            && !isCrossTurn
            && gameStatus === GameStatus.GAME_ON)
            callAIByGameMode(gameMode)
    }, [isCrossTurn])

    useEffect(() => {
        if (gameStatus !== GameStatus.GAME_ON) {
            logGame(gameStatus)
        }
    }, [gameStatus])

    function callAIByGameMode(mode: GameMode) {
        switch (mode) {
            case GameMode.SOLO_EASY: {
                makeMoveEasyAI()
                break
            }
            case GameMode.SOLO_MEDIUM: {
                makeMoveMiddleAI()
                break
            }
            case GameMode.SOLO_HARD: {
                makeMoveHardAI()
                break
            }
            default: makeMoveMiddleAI()
        }
    }

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