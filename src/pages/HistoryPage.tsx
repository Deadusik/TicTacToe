import { Link } from "react-router-dom"
import { SPACE } from "../utils/constants"
import { MENU } from "../router/paths"
import soundOnSvgSrc from '../assets/sound_on.svg'
import soundOffSvgSrc from '../assets/sound_off.svg'
import { useState } from "react"
import svgFilters from '../styles/svg/svgFilters.module.scss'

export const HistoryPage = () => {
    const [isSoundOn, setIsSoundOn] = useState(true)

    const soundImgSrc = isSoundOn ? soundOnSvgSrc : soundOffSvgSrc

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
        settingTitle: [
            'text-xl',
            'text-white',
            'font-bold',
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
        row: [
            'flex',
            'justify-between',
            'items-center',
            'mt-1',
            'px-1',
            'bg-black/25',
            'rounded'
        ].join(SPACE),
        soundContainer: [

        ].join(SPACE),
        languageContaienr: [

        ].join(SPACE),
        themeContainer: [

        ].join(SPACE),
        soundImg: [
            'w-[30px]',
            'h-[30px]',
            svgFilters.WhiteFilter,
            'cursor-pointer'
        ].join(SPACE),
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.contentContainer}>
                <h1 className={styles.pageTitle}>Setting Page</h1>
                <div className={[styles.soundContainer, styles.row].join(SPACE)}>
                    <h3 className={styles.settingTitle}>Sound</h3>
                    <img onClick={() => {
                        setIsSoundOn(!isSoundOn)
                    }}
                        className={styles.soundImg}
                        src={soundImgSrc}
                        alt="sound" />
                </div>
                <div className={[styles.languageContaienr, styles.row].join(SPACE)}>
                    <h3 className={styles.settingTitle}>Language</h3>
                </div>
                <div className={[styles.themeContainer, styles.row].join(SPACE)}>
                    <h3 className={styles.settingTitle}>Theme</h3>
                </div>
                <Link className={styles.menuLink} to={MENU}>BACK TO MENU</Link>
            </div>
        </div>
    )
}