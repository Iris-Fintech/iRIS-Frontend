// Library Import
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import TSX File
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import './index.css';

const Web3Provider = lazy(() => import('./Provider'));
const App = lazy(() => import('./App'));

import { BrowserRouter } from 'react-router-dom';

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
        registration.unregister();

        if (caches) {
            // Service worker cache should be cleared with caches.delete()
            caches.keys().then(async (names) => {
                await Promise.all(names.map((name) => caches.delete(name)));
            });
        }
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
