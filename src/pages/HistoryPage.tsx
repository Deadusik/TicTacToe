import { Link } from "react-router-dom"
import { MENU } from "../router/paths"
import { useContext, useState } from "react"
import { AppSettingsContext } from "../context"
import HistoryItem from "../components/info/HistoryItem"
import { useTranslation } from "react-i18next"
import clearSoundSrc from '../assets/sounds/clear.wav'
// utils
import { Theme } from "../utils/enums"
import { SPACE } from "../utils/constants"
import { playBtnSound, playSound } from "../utils/game"

export const HistoryPage = () => {
    const { t } = useTranslation()

    const context = useContext(AppSettingsContext)
    const theme = context?.settings.Theme ?? Theme.WHITE
    const textColor = theme === Theme.WHITE ? 'text-dark' : 'text-white'
    const isSoundOn = context?.settings.IsSoundOn ?? false

    const [historyList, setHistoryList] = useState<number[]>(JSON.parse(localStorage.getItem('history') || '[]'))

    const clearHistoryHandler = () => {
        localStorage.removeItem('history')
        setHistoryList([])
        playSound(clearSoundSrc, !isSoundOn)
    }

    const styles = {
        mainContainer: [
            'w-full',
            'h-screen',
            'flex',
            'justify-center',
            'items-center'
        ].join(SPACE),
        contentContainer: [
            'flex',
            'flex-col',
            'gap-2'
        ].join(SPACE),
        pageTitle: [
            textColor,
            'text-5xl',
            'font-bold',
            'mb-2',
            'text-center'
        ].join(SPACE),
        placeHolder: [
            textColor,
            'text-2xl',
            'mb-2',
            'text-center'
        ].join(SPACE),
        menuLink: [
            'flex',
            'rounded',
            'justify-center',
            'text-xl',
            'font-bold',
            'bg-blue-400',
            'text-white',
            'py-2',
            'mt-1',
        ].join(SPACE),
        clearButton: [
            'bg-red-400'
        ].join(SPACE),
        list: [
            'flex',
            'flex-col',
            'gap-2',
            'overflow-auto',
            'max-h-[500px]',
            'w-[400px]'
        ].join(SPACE),
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.contentContainer}>
                <h1 className={styles.pageTitle}>{t('history.title')}</h1>
                {/* list */}
                <div className={styles.list}>
                    {[...historyList].reverse().map((winner, index) => {
                        return (
                            <HistoryItem
                                index={historyList.length - index}
                                winner={winner}
                                textColor={textColor}
                                key={index} />
                        )
                    })}
                    {historyList.length === 0 &&
                        <p className={styles.placeHolder}>{t('history.placeHolder')}</p>
                    }
                </div>
                <button
                    className={[styles.menuLink, styles.clearButton].join(SPACE)}
                    onClick={clearHistoryHandler}>
                    {t('history.clearBtn')}
                </button>
                <Link className={styles.menuLink} onClick={() => playBtnSound(!isSoundOn)} to={MENU}>{t('history.backBtn')}</Link>
            </div>
        </div>
    )
}