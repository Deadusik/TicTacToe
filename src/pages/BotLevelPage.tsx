// utils
import { useContext } from "react"
import { SPACE } from "../utils/constants"
import { menuButton } from "../utils/tailwind_styles"
import { AppSettingsContext } from "../context"
import { playBtnSound } from "../utils/game"
import { Link } from "react-router-dom"
import { MENU, SINGLE_EASY, SINGLE_HARD, SINGLE_MEDIUM } from "../router/paths"
import { Theme } from "../utils/enums"
import { useTranslation } from "react-i18next"

const BotLevelPage = () => {
    const context = useContext(AppSettingsContext)
    const isSoundOn = context?.settings.IsSoundOn ?? false
    const { t } = useTranslation()

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
                <h1 className={styles.title}>{t('level.title')}</h1>
                <Link className={styles.button} onClick={() => playBtnSound(!isSoundOn)} to={SINGLE_EASY}>{t('level.easy')}</Link>
                <Link className={styles.button} onClick={() => playBtnSound(!isSoundOn)} to={SINGLE_MEDIUM}>{t('level.medium')}</Link>
                <Link className={styles.button} onClick={() => playBtnSound(!isSoundOn)} to={SINGLE_HARD}>{t('level.hard')}</Link>
                <Link className={styles.button} onClick={() => playBtnSound(!isSoundOn)} to={MENU}>{t('level.backBtn')}</Link>
            </div>
        </div>
    )
}

export default BotLevelPage