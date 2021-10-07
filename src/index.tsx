// Library Import
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';

// Import TSX File
import reportWebVitals from './reportWebVitals';
const App = lazy(() => import('./App'));
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "./layouts/Admin";

ReactDOM.render(
    
    <React.StrictMode>
        <BrowserRouter>
          <Switch>
            <Route
              path="/"
              render={(props) => <AdminLayout {...props} />}
            />
            <Redirect from="/" to="/home" />
          </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
