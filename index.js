import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { render } from 'react-dom'
import App from './modules/App'
import Team from './modules/Team'
import Home from './modules/Home'
import Member from './modules/Member'

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
        <IndexRoute component={Home}/>
            <Route path="/team" component={Team}>
                <Route path="/team/:memberName" component={Member}/>
            </Route>
        </Route>
    </Router>
  ), document.getElementById('app'))
