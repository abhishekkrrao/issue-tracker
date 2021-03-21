import React,{ Component}  from "react";
import { Home,Login } from "../screens/index"
import { BrowserRouter as Router,Switch,Route,Link,Redirect } from "react-router-dom";
const PrivateRoute = ({ component: Component,authed,...rest }) => {
    console.log("authed ",authed)
    return (
      <Route
        {...rest}
        render={(props) => 
          
          authed === true ? <Component {...props} /> : <Redirect to={{ pathname: '/login',state: { from: props.location } }} />}
      />
    )
  }
export default class Routes extends Component {
    constructor(props) { 
        super(props); 
        this.state = { authed: false }
    }
    render() {
        return (
            <Router>
            <Switch>
              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/home" component={Home} ></Route>
              <PrivateRoute exact authed={this.state.authed} path='/' component={Home} />
            </Switch>
          </Router>
        );
    }
}

