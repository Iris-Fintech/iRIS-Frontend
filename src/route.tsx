import React, { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const Main = lazy(() => import('./components/Main'));
const PublicMint = lazy(() => import('./components/PublicMint'));

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/home">
                <Main />
            </Route>
            <Route exact path="/public-mint">
                <PublicMint />
            </Route>
            <Route path="/*">
                <Redirect to="/home" />
            </Route>
        </Switch>
    );
};

export default Routes;
