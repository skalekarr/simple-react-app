import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch';
import {AppContainer} from './src/app-container'

ReactDOM.render(<AppContainer />, document.querySelector('.content'));
