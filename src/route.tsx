import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Swap from './components/Swap';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/home">
                <Home />
            </Route>
            <Route>
                <Swap />
            </Route>
        </Switch>
    );
};

export default Routes;
