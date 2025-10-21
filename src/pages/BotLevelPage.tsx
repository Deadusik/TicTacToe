// utils
import { useContext } from "react"
import { SPACE } from "../utils/constants"
import { menuButton } from "../utils/tailwind_styles"
import { AppSettingsContext } from "../context"
import { playBtnSound } from "../utils/game"
import { Link } from "react-router-dom"
import { MENU, SINGLE_EASY, SINGLE_HARD, SINGLE_MEDIUM } from "../router/paths"
import { Theme } from "../utils/enums"

const BotLevelPage = () => {
    const context = useContext(AppSettingsContext)
    const isSoundOn = context?.settings.IsSoundOn ?? false

    const theme = context?.settings.Theme ?? Theme.WHITE
    const textColor = theme === Theme.WHITE ? 'text-dark' : 'text-white'

    const styles = {
        mainContainer: [
            'w-full',
            'h-screen',
            'flex',
            'items-center',
            'justify-center'
        ].join(SPACE),
        contentContainer: [
            'w-full',
            'flex',
            'flex-col',
            'items-center',
            'z-10'
        ].join(SPACE),
        title: [
            textColor,
            'text-3xl',
            'font-bold',
            'mb-2',
            'text-center'
        ].join(SPACE),
        button: [
            menuButton
        ].join(SPACE)
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.contentContainer}>
                <h1 className={styles.title}>Choose Difficulty</h1>
                <Link className={styles.button} onClick={() => playBtnSound(!isSoundOn)} to={SINGLE_EASY}>Baby 👶</Link>
                <Link className={styles.button} onClick={() => playBtnSound(!isSoundOn)} to={SINGLE_MEDIUM}>Normal 😎</Link>
                <Link className={styles.button} onClick={() => playBtnSound(!isSoundOn)} to={SINGLE_HARD}>Hard 💀</Link>
                <Link className={styles.button} onClick={() => playBtnSound(!isSoundOn)} to={MENU}>Menu ↩️</Link>
            </div>
        </div>
    )
}

export default BotLevelPage