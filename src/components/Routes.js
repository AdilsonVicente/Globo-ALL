import React from 'react';
import { Router, Route, Switch } from 'react-router';

import Login from '../pages/login/Login';
import Home from '../pages/home/Home';
import Register from '../pages/register/Register';
import NotFound from './NotFound';



import {history} from '../history';


const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/' component={Home}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>
)

export default Routes;