import { DUAL, MENU, SINGLE, } from "./paths"
import { MenuPage } from '../pages/MenuPage'
import { ErrorPage } from '../pages/ErrorPage'
import { GamePage } from '../pages/GamePage'

export const routes = [
    {
        path: MENU,
        element: <MenuPage />,
        error: <ErrorPage />
    },
    {
        path: SINGLE,
        element: <GamePage gameMode='SINGLE' />,
        error: <ErrorPage />
    },
    {
        path: DUAL,
        element: <GamePage gameMode="dual" />,
        error: <ErrorPage />
    }
]