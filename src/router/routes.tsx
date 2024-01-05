import { DUAL, HISTORY, MENU, SETTINGS, SINGLE, } from "./paths"
import { MenuPage } from '../pages/MenuPage'
import { ErrorPage } from '../pages/ErrorPage'
import { GamePage } from '../pages/GamePage'
import { GameMode } from "../utils/enums"
import { SettingPage } from "../pages/SettingsPage"
import { HistoryPage } from "../pages/HistoryPage"

export const routes = [
    {
        path: MENU,
        element: <MenuPage />,
        error: <ErrorPage />
    },
    {
        path: SINGLE,
        element: <GamePage gameMode={GameMode.SOLO} />,
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
    }
]