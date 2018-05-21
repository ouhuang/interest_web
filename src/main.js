//入口文件

import React from 'react'
import { render } from 'react-dom'
import App from "./App.tsx";
import { hot } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';

render((
    <BrowserRouter>
        <App />
    </BrowserRouter>), document.getElementById('app'));

hot(module)(App);
