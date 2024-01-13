import svgZiro from '../assets/svgs/ziro.svg'
import svgCross from '../assets/svgs/cross.svg'
import svgFilterStyles from '../styles/svg/svgFilters.module.scss'
import { Link } from 'react-router-dom'
import { DUAL, HISTORY, SETTINGS, SINGLE } from '../router/paths'
import { SPACE } from '../utils/constants'
import { useTranslation } from 'react-i18next'

export function MenuPage() {
    const { t } = useTranslation()

    const pageStyles = {
        button: [
            'flex',
            'justify-center',
            'items-center',
            'w-3/5',
            'lg:max-w-[30%]',
            'sm:max-w-[100%]',
            'h-20',
            'mt-1',
            'bg-indigo-500',
            'border',
            'rounded',
            'border-sky-500',
            'font-bold',
            'text-white',
            'text-xl',
            'hover:bg-indigo-400'
        ].join(SPACE),
        title: [
            'animate-bounce',
            'mb-3',
            'text-3xl',
            'sm:text-5xl',
            'font-bold'
        ].join(SPACE),
        contentContainer: [
            'w-full',
            'flex',
            'flex-col',
            'items-center',
            'z-10'
        ].join(SPACE),
        mainContainer: [
            'w-full',
            'h-screen',
            'flex',
            'items-center',
            'justify-center'
        ].join(SPACE),
        backgroundContainer: [
            'absolute',
            'w-full',
            'h-screen'
        ].join(SPACE),
        SVG: [
            'animate-bounce',
            'absolute',
            'z-10',
        ].join(SPACE),
        circleSVG: [
            svgFilterStyles.Circle,
            'w-[100px]'
        ].join(SPACE),
        crossSVG: [
            svgFilterStyles.Cross,
            'w-[80px]'
        ].join(SPACE)
    }

    return (
        <div className={pageStyles.mainContainer}>
            <div className={pageStyles.contentContainer}>
                <h1 className={pageStyles.title}>
                    <span className="text-rose-600">Tic </span>
                    <span className="text-indigo-600">Tac </span>
                    <span className="text-green-700">Toe</span>
                </h1>

                <Link className={pageStyles.button} to={SINGLE}>{t('menu.soloBtn')}</Link>
                <Link className={pageStyles.button} to={DUAL}>{t('menu.dualBtn')}</Link>
                <Link className={pageStyles.button} to={HISTORY}>{t('menu.historyBtn')}</Link>
                <Link className={pageStyles.button} to={SETTINGS}>{t('menu.settingsBtn')}</Link>
            </div>

            <div className={pageStyles.backgroundContainer}>
                { /* left svg circle */}
                <img className={
                    [
                        pageStyles.SVG,
                        pageStyles.circleSVG,
                        'left-[30%] top-[7%] sm:left-[20%] lg:left-[10%]'
                    ].join(SPACE)
                } src={svgZiro} alt='circle' draggable='false' />

                { /* left svg cross */}
                <img className={
                    [
                        pageStyles.SVG,
                        pageStyles.crossSVG,
                        'left-[5%] top-[3%] lg:left-[2%]'
                    ].join(SPACE)
                } src={svgCross} alt='cross' draggable='false' />

                { /* right svg circle */}
                <img className={
                    [
                        pageStyles.SVG,
                        pageStyles.circleSVG,
                        'right-[5%] bottom-[3%] lg:right-[10%]'
                    ].join(SPACE)
                } src={svgZiro} alt='circle' draggable='false' />

                { /* right svg cross */}
                <img className={
                    [
                        pageStyles.SVG,
                        pageStyles.crossSVG,
                        'right-[35%] bottom-[7%] sm:right-[20%] lg:right-[2%]'
                    ].join(SPACE)
                } src={svgCross} alt='cross' draggable='false' />
            </div>

        </div >
    )
}