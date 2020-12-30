import React from 'react'
import Home from './Home'
import {
    Switch,
    Route
  } from "react-router-dom";

const Routing = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/Entrées'>

            </Route>
            <Route path='/Plats'>

            </Route>
            <Route path='/Desserts'>

            </Route>
        </Switch>
    )
}

export default Routing