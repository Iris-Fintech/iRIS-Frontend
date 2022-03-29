import React, { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const Main = lazy(() => import('./components/Main'));
const Story = lazy(() => import('./components/Story'));
const BalancePage = lazy(() => import('./components/BalancePage'));

const Routes = () => {
    return (
        <Switch>
            <Route path="/home">
                <Main />
            </Route>
            <Route exact path="/story">
                <Story />
            </Route>
            <Route exact path="/balance">
                <BalancePage />
            </Route>
            <Route exact path="/">
                <Redirect to="/home" />
            </Route>
        </Switch>
    );
};

export default Routes;
