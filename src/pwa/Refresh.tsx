import Icon from "../components/Icon"
import { usePWA } from "./Home"
import FixedBottom from "./FixedBottom"
import styles from "./Refresh.module.scss"

const Refresh = ({ loading }: { loading: boolean }) => {
  const { refresh } = usePWA()

  return (
    <FixedBottom>
      <div className={styles.container}>
        <button className={styles.button} onClick={refresh} disabled={loading}>
          <Icon name="refresh" />
        </button>
      </div>
    </FixedBottom>
  )
}

export default Refresh
