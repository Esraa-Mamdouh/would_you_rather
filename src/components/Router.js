import React, { Component } from 'react'
import Login from './Login'
import Leaderboard from './Leaderboard'
import {
  Switch,
  Route,
} from "react-router-dom";

class Router extends Component {
    render() {
        return (
            <div>
                inside router
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                {/* <Route path="/home">
                    <Home/>
                </Route>
                <Route path="/newquestion">
                    <NewQuestion/>
                </Route> */}
                <Route path="/leaderboard">
                    <Leaderboard/>
                </Route>
            </Switch>
            </div>
        )
    }
}

export default Router
