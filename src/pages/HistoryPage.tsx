import { Link } from "react-router-dom"
import { SPACE } from "../utils/constants"
import { MENU } from "../router/paths"
import { useContext, useState } from "react"
import { AppSettingsContext } from "../context"
import { Theme } from "../utils/enums"
import HistoryItem from "../components/info/HistoryItem"

export const HistoryPage = () => {
    const context = useContext(AppSettingsContext)
    const theme = context?.settings.Theme ?? Theme.WHITE
    const textColor = theme === Theme.WHITE ? 'text-dark' : 'text-white'
    const [historyList, setHistoryList] = useState<number[]>(JSON.parse(localStorage.getItem('history') || '[]'))

    const clearHistoryHandler = () => {
        localStorage.removeItem('history')
        setHistoryList([])
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
                <h1 className={styles.pageTitle}>History</h1>
                {/* list */}
                <div className={styles.list}>
                    {historyList.map((winner, index) => {
                        return (
                            <HistoryItem
                                index={index + 1}
                                winner={winner}
                                textColor={textColor}
                                key={index} />
                        )
                    })}
                    {historyList.length === 0 &&
                        <p className={styles.placeHolder}>History is empty 🤷🏼‍♂️</p>
                    }
                </div>
                <button
                    className={[styles.menuLink, styles.clearButton].join(SPACE)}
                    onClick={clearHistoryHandler}>
                    CLEAR HISTORY
                </button>
                <Link className={styles.menuLink} to={MENU}>BACK TO MENU</Link>
            </div>
        </div>
    )
}