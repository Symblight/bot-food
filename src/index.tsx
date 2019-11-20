import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { App } from './webroot/app';

const root = document.querySelector('#root');
const history = createBrowserHistory();

function render(): void {
  ReactDOM.render(
    <Router history={history}>
      <App />
    </Router>,
    root,
  );
}

render();
