import Container from "../components/Container"
import LinkButton from "../components/LinkButton"
import styles from "./Connect.module.scss"

const Connect = () => (
  <footer className={styles.connect}>
    <Container>
      <LinkButton to="/auth" color="secondary" outline block>
        Connect
      </LinkButton>
    </Container>
  </footer>
)

export default Connect
