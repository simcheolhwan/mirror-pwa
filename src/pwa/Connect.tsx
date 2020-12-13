import LinkButton from "../components/LinkButton"
import FixedBottom from "./FixedBottom"

const Connect = () => (
  <FixedBottom>
    <LinkButton to="/auth" color="secondary" outline block>
      Connect
    </LinkButton>
  </FixedBottom>
)

export default Connect
