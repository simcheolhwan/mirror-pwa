import Icon from "../components/Icon"
import { usePWA } from "./Home"
import styles from "./Refresh.module.scss"

const Refresh = ({ loading }: { loading: boolean }) => {
  const { refresh } = usePWA()

  return (
    <button className={styles.button} onClick={refresh} disabled={loading}>
      <Icon name="refresh" size="2rem" />
    </button>
  )
}

export default Refresh
