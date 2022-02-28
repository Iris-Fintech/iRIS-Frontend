import React, { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const Main = lazy(() => import('./components/Main'));
const PublicMint = lazy(() => import('./components/PublicMint'));
const Presale = lazy(() => import('./components/Presale'));

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/home">
                <Main />
            </Route>
            <Route exact path="/public-mint">
                <PublicMint />
            </Route>
            <Route exact path="/presale">
                <Presale />
            </Route>
            <Route path="/*">
                <Redirect to="/home" />
            </Route>
        </Switch>
    );
};

export default Routes;
