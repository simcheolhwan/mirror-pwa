import { UST, UUSD } from "../constants"
import { format, formatAsset } from "../libs/parse"
import styles from "./Num.module.scss"

interface Props {
  title?: string
  symbol?: string
  children: string
  price?: boolean
}

const Num = ({ title, symbol, children, price }: Props) => (
  <article className={styles.article}>
    {title && <h1 className={styles.title}>{title}</h1>}

    <p className={styles.number}>
      {price
        ? `${format(children)} ${UST}`
        : formatAsset(children, symbol ?? UUSD, { integer: true })}
    </p>
  </article>
)

export default Num
