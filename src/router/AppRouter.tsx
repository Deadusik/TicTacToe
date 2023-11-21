import { routes } from "./routes"
import { Routes, Route } from 'react-router-dom'

export function AppRouter() {
    return (
        <>
            <Routes>
                {
                    routes.map(route =>
                        <Route key={route.path}
                            path={route.path}
                            element={route.element}
                            errorElement={route.error}
                        />
                    )
                }
            </Routes>
        </>
    )
}