import { FC } from "react"
import Container from "../components/Container"
import styles from "./FixedBottom.module.scss"

const FixedBottom: FC = ({ children }) => (
  <footer className={styles.component}>
    <Container>
      <div className={styles.wrapper}>{children}</div>
    </Container>
  </footer>
)

export default FixedBottom
