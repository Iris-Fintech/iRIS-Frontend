// Library Import
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import TSX File
import reportWebVitals from './reportWebVitals';
const Web3Provider = lazy(() => import('./Provider'));
const App = lazy(() => import('./App'));

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
            <Web3Provider>
                <App>
                    <p>DeFite</p>
                </App>
            </Web3Provider>
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
