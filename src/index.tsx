import React, { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './resources/color.scss';
import './resources/index.scss';

import { RecoilRoot } from 'recoil';
import Todo from './pages/Todo';

ReactDOM.render(
  <StrictMode>
    <RecoilRoot>
      <Router>
        <Todo />
      </Router>
    </RecoilRoot>
  </StrictMode>,
  document.getElementById('root')
);
