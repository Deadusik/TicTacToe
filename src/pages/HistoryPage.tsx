import { Link } from "react-router-dom"
import { SPACE } from "../utils/constants"
import { MENU } from "../router/paths"
import ziroSvgSrc from '../assets/svgs/ziro.svg'
import crossSvgSrc from '../assets/svgs/cross.svg'
import svgFilterStyles from '../styles/svg/svgFilters.module.scss'

export const HistoryPage = () => {
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
            'flex-col'
        ].join(SPACE),
        pageTitle: [
            'text-5xl',
            'font-bold',
            'mb-2'
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
        list: [
            'flex',
            'flex-col',
            'gap-2'
        ].join(SPACE),
        listItem: [
            'flex',
            'justify-between',
            'items-center',
            'bg-black/25',
            'rounded',
            'p-2',
        ].join(SPACE),
        itemIcon: [
            'd-inline',
            'h-[25px]'
        ].join(SPACE),
        crossSvg: [
            svgFilterStyles.Cross,
        ],
        circleSvg: [
            svgFilterStyles.Circle,
        ],
        itemText: [
            'text-2xl',
        ].join(SPACE)
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.contentContainer}>
                <h1 className={styles.pageTitle}>History</h1>
                    <div className={styles.list}>
                        <div className={styles.listItem}>
                            <p className={styles.itemText}>Won for</p>
                            <img className={styles.itemIcon} src={crossSvgSrc} alt="Game 1 Icon"/>
                        </div>
                    </div>
                <Link className={styles.menuLink} to={MENU}>BACK TO MENU</Link>
            </div>
        </div>
    )
}