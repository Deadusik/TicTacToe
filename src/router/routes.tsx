import { DUAL, HISTORY, LEVEL, MENU, SETTINGS, SINGLE_EASY, SINGLE_HARD, SINGLE_MEDIUM, } from "./paths"
// pages
import { MenuPage } from '../pages/MenuPage'
import { ErrorPage } from '../pages/ErrorPage'
import { GamePage } from '../pages/GamePage'
import { SettingPage } from "../pages/SettingsPage"
import { HistoryPage } from "../pages/HistoryPage"
import BotLevelPage from "../pages/BotLevelPage"
// utils
import { GameMode } from "../utils/enums"

export const routes = [
    {
        path: MENU,
        element: <MenuPage />,
        error: <ErrorPage />
    },
    {
        path: SINGLE_EASY,
        element: <GamePage gameMode={GameMode.SOLO_EASY} />,
        error: <ErrorPage />
    },
    {
        path: SINGLE_MEDIUM,
        element: <GamePage gameMode={GameMode.SOLO_MEDIUM} />,
        error: <ErrorPage />
    },
    {
        path: SINGLE_HARD,
        element: <GamePage gameMode={GameMode.SOLO_HARD} />,
        error: <ErrorPage />
    },
    {
        path: DUAL,
        element: <GamePage gameMode={GameMode.DUAL} />,
        error: <ErrorPage />
    },
    {
        path: SETTINGS,
        element: <SettingPage />,
        error: <ErrorPage />
    },
    {
        path: HISTORY,
        element: <HistoryPage />,
        error: <ErrorPage />
    },
    {
        path: LEVEL,
        element: <BotLevelPage />,
        error: <ErrorPage />
    }
]