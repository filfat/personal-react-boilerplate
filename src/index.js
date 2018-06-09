import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import Logger from './Utils/logger';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Clear all previous logs
Logger.Clear();

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);

registerServiceWorker();