import { Link } from "react-router-dom"
import { SPACE } from "../utils/constants"
import { MENU } from "../router/paths"
import soundOnSvgSrc from '../assets/svgs/sound_on.svg'
import soundOffSvgSrc from '../assets/svgs/sound_off.svg'
import { useContext, useEffect, useState } from "react"
import svgFilters from '../styles/svg/svgFilters.module.scss'
import { Language, Theme } from "../utils/enums"
import { AppSettingsContext } from "../context"
import { AppSettings } from "../models/appSettings"
import { useTranslation } from "react-i18next"

export const SettingPage = () => {
    const context = useContext(AppSettingsContext)
    const { t, i18n } = useTranslation()
    const changeLanguage = (language: Language) => {
        i18n.changeLanguage(language)
    }

    const [isSoundOn, setIsSoundOn] = useState(context?.settings.IsSoundOn || false)
    const [theme, setTheme] = useState(context?.settings.Theme || Theme.WHITE)

    const soundImgSrc = isSoundOn ? soundOnSvgSrc : soundOffSvgSrc

    useEffect(() => {
        context?.setSettings(new AppSettings(theme, isSoundOn))
    }, [isSoundOn, theme])

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
            'w-[350px]'
        ].join(SPACE),
        pageTitle: [
            'text-4xl',
            'font-bold',
            'mb-2',
            'text-center'
        ].join(SPACE),
        pageTitleDark: [
            'text-white'
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
            'bg-black/25',
            'rounded',
            'p-2'
        ].join(SPACE),
        sound: {
            container: [

            ].join(SPACE),
            image: [
                'w-[30px]',
                'h-[30px]',
                svgFilters.WhiteFilter,
                'cursor-pointer'
            ].join(SPACE),
        },
        language: {
            contaienr: [

            ].join(SPACE),
            selector: [
                'bg-transparent',
                'text-whtie',
                'font-bold',
                'rounded',
                'p-1',
                'cursor-pointer',
                'border-0',
                'outline-0'
            ].join(SPACE),
            option: [
                'text-lg',
                'text-white',
                'bg-black/25',
                'font-bold'
            ].join(SPACE),
        },
        theme: {
            container: [

            ].join(SPACE),
            button: [
                'w-[30px]',
                'h-[30px]',
                'rounded-full',
            ].join(SPACE),
            buttonWhite: [
                'bg-white',
            ].join(SPACE),
            buttonBlack: [
                'bg-[#343434]',
                'ml-1'
            ].join(SPACE),
            buttonActive: [
                'border-green-500',
                'border-2'
            ].join(SPACE),
            buttonContainer: [
                'flex',
                'items-center'
            ].join(SPACE)
        },
    }

    return (
        <AppSettingsContext.Provider value={context}>
            <div className={styles.mainContainer}>
                <div className={styles.contentContainer}>
                    <h1 className={[
                        styles.pageTitle,
                        theme === Theme.WHITE ? '' : styles.pageTitleDark
                    ].join(SPACE)}>{t('settings.title')}</h1>
                    { /* Sound property */}
                    <div className={[styles.sound.container, styles.row].join(SPACE)}>
                        <h3 className={styles.settingTitle}>{t('settings.soundLabel')}</h3>
                        <img onClick={() => {
                            setIsSoundOn(!isSoundOn)
                        }}
                            className={styles.sound.image}
                            src={soundImgSrc}
                            alt="sound" />
                    </div>
                    { /* Language property */}
                    <div className={[styles.language.option, styles.row].join(SPACE)}>
                        <h3 className={styles.settingTitle}>{t('settings.languageLabel')}</h3>
                        <select className={styles.language.selector}
                            onChange={e => changeLanguage(e.target.value as Language)}
                            defaultValue={i18n.language}>
                            <option className={styles.language.option}
                                value="en">
                                {t('settings.optionEN')}
                            </option>
                            <option className={styles.language.option}
                                value="ua">
                                {t('settings.optionUA')}
                            </option>
                        </select>
                    </div>
                    { /* Theme property */}
                    <div className={[styles.theme.container, styles.row].join(SPACE)}>
                        <h3 className={styles.settingTitle}>{t('settings.themeLabel')}</h3>
                        <div className={styles.theme.buttonContainer}>
                            <button className={[
                                styles.theme.button,
                                styles.theme.buttonWhite,
                                theme === Theme.WHITE ? styles.theme.buttonActive : ''
                            ].join(SPACE)}
                                onClick={() => setTheme(Theme.WHITE)}></button>
                            <button className={[
                                styles.theme.button,
                                styles.theme.buttonBlack,
                                theme === Theme.BLACK ? styles.theme.buttonActive : ''
                            ].join(SPACE)}
                                onClick={() => setTheme(Theme.BLACK)}></button>
                        </div>
                    </div>
                    <Link className={styles.menuLink} to={MENU}>{t('settings.backBtn')}</Link>
                </div>
            </div>
        </AppSettingsContext.Provider>
    )
}