import { FC } from "react"
import FixedBottom from "./FixedBottom"
import styles from "./Bottom.module.scss"

const Bottom: FC = ({ children }) => (
  <FixedBottom>
    <div className={styles.wrapper}>{children}</div>
  </FixedBottom>
)

export default Bottom
