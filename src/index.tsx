// Library Import
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import TSX File
import reportWebVitals from './reportWebVitals';

const Web3Provider = lazy(() => import('./Provider'));
const App = lazy(() => import('./App'));
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">App</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/">
                        <Web3Provider>
                            <App>
                                <p>DeFite</p>
                            </App>
                        </Web3Provider>
                    </Route>
                </Switch>
            </Suspense>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
