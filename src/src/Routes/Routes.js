import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home,Login } from "../screens/index"
export default class Routes extends React.Component {
    constructor() { 
        super(); 
    }
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <Login />
                        </Route>
                        <Route path="/Home">
                            <Home />
                        </Route>
                        <Route path="/dashboard">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

