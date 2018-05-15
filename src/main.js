//入口文件

import React from 'react'
import { render } from 'react-dom'
import App from "./App";
import { hot } from 'react-hot-loader';

render(<App />, document.getElementById('app'));

hot(module)(App);
