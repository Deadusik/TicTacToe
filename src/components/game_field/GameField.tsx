import { GameGridItem } from "../game_field/GameGridItem";
import { SPACE } from "../../utils/constants";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { GameStatus } from "../../utils/enums";

export function GameField() {
    const { game } = useTypedSelector(state => state)
    console.log(game) //d

    const pageStyles = {
        fieldContainer: [
            'max-w-[600px]',
            'flex',
            'flex-wrap',
        ].join(SPACE),
        gridRow: [
            'w-[600px]',
            'h-[200px]',
            'flex',
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
    }

    return (
        <div className={pageStyles.gridContainer}>
            <div className={pageStyles.fieldContainer}>
                {/* top row */}
                <div className={pageStyles.gridRow}>
                    <GameGridItem position={1} />
                    <GameGridItem position={2} />
                    <GameGridItem position={3} />
                </div>
                {/* middle row */}
                <div className={pageStyles.gridRow}>
                    <GameGridItem position={4} />
                    <GameGridItem position={5} />
                    <GameGridItem position={6} />
                </div>
                {/* bottom row */}
                <div className={pageStyles.gridRow}>
                    <GameGridItem position={7} />
                    <GameGridItem position={8} />
                    <GameGridItem position={9} />
                </div>
            </div>
            <div>
                {
                    game.gameStatus !== GameStatus.GAME_ON &&
                    <div>
                        Game is end!
                    </div>
                }
            </div>
        </div>
    )
}