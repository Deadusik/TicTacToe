import { GamePanel } from "../components/GamePanel";
import gridSVG from '../assets/grid.svg'
import styles from '../styles/pages/GamePage.module.scss'
import { GameGridItem } from "../components/GameGridItem";

interface IGamePageParams {
    gameMode: string
}

export function GamePage({ gameMode }: IGamePageParams) {
    const pageStyles = {
        mianContainer: [
            'flex',
            'w-full'
        ].join(' '),
        gridContainer: [
            'absolute',
            'top-1/2',
            'left-1/2',
            'transform',
            '-translate-x-1/2',
            '-translate-y-1/2',
            'z-10'
        ].join(' '),
        gridContentContainer: [
            'flex'
        ].join(' '),
        girdSVG: [
            styles.SVGGRid,
            'absolute',
            'top-1/2',
            'left-1/2',
            'transform',
            '-translate-x-1/2',
            '-translate-y-1/2',
            'w-[500px]'
        ].join(' ')
    }

    return (
        <div className={pageStyles.mianContainer}>
            <GamePanel />
            <div className={pageStyles.gridContainer}>
                <div className={pageStyles.gridContentContainer}>
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

            <img className={pageStyles.girdSVG} src={gridSVG} alt="grid" />
        </div >
    )
}