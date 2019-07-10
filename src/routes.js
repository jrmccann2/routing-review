import {Route, Switch} from 'react-router-dom'
import React from 'react'
import List from "./Components/List"
import Form from "./Components/Form"

export default (
  <Switch>
    <Route path="/List" component={List}/>
    <Route path="/Form" component={Form}/>
  </Switch>
)