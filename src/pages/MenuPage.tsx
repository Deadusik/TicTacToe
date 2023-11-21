import svgZiro from '../assets/ziro.svg'
import svgCross from '../assets/cross.svg'
import styles from '../styles/pages/MenuPage.module.scss'
import { Link } from 'react-router-dom'
import { DUAL, SINGLE } from '../router/paths'

export function MenuPage() {
    const buttonStyle = `flex justify-center items-center w-3/5 lg:max-w-[30%] sm:max-w-[100%] h-20 mt-1 bg-indigo-500 border rounded border-sky-500 font-bold text-white text-xl hover:bg-indigo-400`

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className='w-full flex flex-col items-center z-10'>
                <h1 className="animate-bounce mb-3 text-3xl sm:text-5xl font-bold">
                    <span className="text-rose-600">Tic </span>
                    <span className="text-indigo-600">Tac </span>
                    <span className="text-green-700">Toe</span>
                </h1>

                <Link className={buttonStyle} to={SINGLE}>Single</Link>
                <Link className={buttonStyle} to={DUAL}>Dual</Link>
                <Link className={buttonStyle} to={SINGLE}>History</Link>
                <Link className={buttonStyle} to={DUAL}>Settings</Link>
            </div>


            <div className='absolute w-full h-screen'>
                <img className={[styles.SVGCircle, 'animate-bounce absolute z-10 left-[20%] lg:left-[8%] top-[7%] w-[100px]'].join(' ')} src={svgZiro} alt='circle' />
                <img className={[styles.SVGCross, 'animate-bounce absolute z-10 left-[5%] lg:left-[2%] top-[3%] w-[80px]'].join(' ')} src={svgCross} alt='cross' />

                <img className={[styles.SVGCircle, 'animate-bounce absolute z-10 right-[5%] lg:right-[8%] bottom-[3%] w-[100px]'].join(' ')} src={svgZiro} alt='circle' />
                <img className={[styles.SVGCross, 'animate-bounce absolute z-10 right-[22%] lg:right-[2%] bottom-[7%] w-[80px]'].join(' ')} src={svgCross} alt='cross' />
            </div>

        </div >
    )
}