// Library Import
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import TSX File
import reportWebVitals from './reportWebVitals';
import './index.css';

const Web3Provider = lazy(() => import('./Provider'));
const App = lazy(() => import('./App'));

import { BrowserRouter } from 'react-router-dom';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/service-worker.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

ReactDOM.render(
    <>
        <React.StrictMode>
            <BrowserRouter>
                <Suspense
                    fallback={
                        <div id="loading">
                            <span id="loading-text">Flying to iRIS ...</span>
                        </div>
                    }
                >
                    <Web3Provider>
                        <App />
                    </Web3Provider>
                </Suspense>
            </BrowserRouter>
        </React.StrictMode>
    </>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
