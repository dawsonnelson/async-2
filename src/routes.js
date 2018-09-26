import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Auth from './components/Auth/Auth'
import Dashboard from './components/Dashboard/Dashboard'
import Wizard1 from './components/Wizard/Wizard1'
import Wizard2 from './components/Wizard/Wizard2'
import Wizard3 from './components/Wizard/Wizard3'
import Wizard4 from './components/Wizard/Wizard4'



export default (
    <Switch>
        <Route exact path = '/' component={Auth}/>
        <Route path ='/dashboard' component={Dashboard}/>
        <Route path ='/wizard/1' component={Wizard1}/>
        <Route path ='/wizard/2' component={Wizard2}/>
        <Route path ='/wizard/3' component={Wizard3}/>
        <Route path ='/wizard/4' component={Wizard4}/>
    </Switch>
)