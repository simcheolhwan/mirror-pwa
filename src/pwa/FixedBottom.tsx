import { FC } from "react"
import Container from "../components/Container"
import styles from "./FixedBottom.module.scss"

const FixedBottom: FC = ({ children }) => (
  <footer className={styles.connect}>
    <Container>{children}</Container>
  </footer>
)

export default FixedBottom
