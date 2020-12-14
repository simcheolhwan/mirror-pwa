import { Route, Switch } from "react-router-dom"
import Auth from "../pages/Auth"
import Home from "./Home"
import Chart from "./Chart"

const routes = (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/chart" component={Chart} />
    <Route path="/auth" component={Auth} />
  </Switch>
)

export default routes
