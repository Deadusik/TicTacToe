import { SPACE } from "../../utils/constants"
import { FC } from "react"
import { getSvgFilterByWinner, getSvgSrcByWinner } from "../../utils/game"
import { useTranslation } from "react-i18next"

interface Props {
    textColor: string
    winner: number
    index: number
}

const HistoryItem: FC<Props> = ({ textColor, winner, index }) => {
    const { t } = useTranslation()

    const styles = {
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
        itemText: [
            'text-2xl',
            textColor
        ].join(SPACE),
        span: [
            'font-bold'
        ].join(SPACE),
    }

    return (
        <div className={styles.listItem}>
            <p className={styles.itemText}>
                <span className={styles.span}>{index + ". "}</span>
                {t("history.itemText")}
            </p>
            <img className={[styles.itemIcon, getSvgFilterByWinner(winner)].join(SPACE)} src={getSvgSrcByWinner(winner)} />
        </div>
    )
}

export default HistoryItem