import { Route, Switch } from "react-router-dom"
import Auth from "../pages/Auth"
import My from "./My"

const routes = (
  <Switch>
    <Route path="/" exact component={My} />
    <Route path="/auth" component={Auth} />
  </Switch>
)

export default routes
