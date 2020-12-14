import { FC } from "react"
import { LinkProps } from "react-router-dom"
import LinkButton from "../components/LinkButton"
import FixedBottom from "./FixedBottom"
import styles from "./Bottom.module.scss"

const Bottom: FC<{ link?: LinkProps }> = ({ link, children }) => (
  <FixedBottom>
    {link && <LinkButton {...link} color="secondary" outline block />}
    <div className={styles.wrapper}>{children}</div>
  </FixedBottom>
)

export default Bottom
