import { GamePanel } from "../components/GamePanel";
import gridSVG from '../assets/grid.svg'
import styles from '../styles/pages/GamePage.module.scss'
import { GameGridItem } from "../components/GameGridItem";

interface IGamePageParams {
    gameMode: string
}

export function GamePage({ gameMode }: IGamePageParams) {
    const buttonStyle = 'w-[200px] h-[200px] bg-sky-400 bg-transparent cursor-pointer'

    return (
        <div className="flex w-full">
            <GamePanel />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="flex">
                    <div>
                        <GameGridItem />
                        <GameGridItem />
                        <GameGridItem />
                    </div>
                    <div>
                        <GameGridItem />
                        <GameGridItem />
                        <GameGridItem />
                    </div>
                    <div>
                        <GameGridItem />
                        <GameGridItem />
                        <GameGridItem />
                    </div>
                </div>
            </div>

            <img className={[styles.SVGGRid, "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px]"].join(' ')} src={gridSVG} alt="grid" />
        </div >
    )
}