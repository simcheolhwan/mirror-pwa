import { Route, Switch } from "react-router-dom"
import Auth from "../pages/Auth"
import Home from "./Home"

const routes = (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/auth" component={Auth} />
  </Switch>
)

export default routes
