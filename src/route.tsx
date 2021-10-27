import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/home">
                <Home />
            </Route>
        </Switch>
    );
};

export default Routes;
