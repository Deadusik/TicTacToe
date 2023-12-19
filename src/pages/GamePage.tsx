import { GamePanel } from "../components/GamePanel";
import gridSVG from '../assets/grid.svg'
import styles from '../styles/pages/GamePage.module.scss'
import { GameGridItem } from "../components/GameGridItem";
import { SPACE } from "../utils/constants";
import { useTypedSelector } from "../hooks/useTypedSelector";

interface IGamePageParams {
    gameMode: string
}

export function GamePage({ gameMode }: IGamePageParams) {
    const { field } = useTypedSelector(state => state.game)

    console.log(field) // dev

    const pageStyles = {
        mianContainer: [
            'w-full',
            'flex',
            'h-screen'
        ].join(SPACE),
        gridContainer: [
            'absolute',
            'top-1/2',
            'left-1/2',
            'transform',
            '-translate-x-1/2',
            '-translate-y-1/2',
            'z-10',
        ].join(SPACE),
        gridContentContainer: [
            'max-w-[600px]',
            'flex',
            'flex-wrap',
        ].join(SPACE),
        gridRow: [
            'w-[600px]',
            'h-[200px]',
            'flex',
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
            <div className={pageStyles.gridContainer}>
                <div className={pageStyles.gridContentContainer}>
                    {/* top row */}
                    <div className={pageStyles.gridRow}>
                        <GameGridItem />
                        <GameGridItem />
                        <GameGridItem />
                    </div>
                    {/* middle row */}
                    <div className={pageStyles.gridRow}>
                        <GameGridItem />
                        <GameGridItem />
                        <GameGridItem />
                    </div>
                    {/* bottom row */}
                    <div className={pageStyles.gridRow}>
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