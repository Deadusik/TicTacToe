import { SPACE } from "../utils/constants"

export function GamePanel() {
    const componentStyles = {
        mainContainer: [
            'w-full',
            'h-[100px]',
            'fixed',
        ].join(SPACE),
        gameInfo: [
            'flex',
            'justify-center',
            'absolute',
            'm-auto',
            'left-0',
            'right-0',
        ].join(SPACE),
        gameController: [
            'absolute',
            'right-0',
        ].join(SPACE),
        roundLabel: [
            ''
        ].join(SPACE)
    }

    return (
        <div className={componentStyles.mainContainer}>
            <div className={componentStyles.gameInfo}>
                <div>1</div>
                <h1>R1</h1>
                <div>1</div>
            </div>
            <div className={componentStyles.gameController}>
                <button>restart</button>
                <button>exit</button>
            </div>
        </div>
    )
}