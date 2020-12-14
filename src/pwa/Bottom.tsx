import { FC } from "react"
import { LinkProps } from "react-router-dom"
import Container from "../components/Container"
import LinkButton from "../components/LinkButton"
import styles from "./Bottom.module.scss"

const Bottom: FC<{ link?: LinkProps }> = ({ link, children }) => (
  <footer className={styles.connect}>
    <Container>
      <div className={styles.wrapper}>
        {link && <LinkButton {...link} color="secondary" outline block />}
        {children}
      </div>
    </Container>
  </footer>
)

export default Bottom
