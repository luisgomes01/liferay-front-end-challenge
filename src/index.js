import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import RepositoryProvider from './context/context';


ReactDOM.render(
  <RepositoryProvider>
    <App />
  </RepositoryProvider>,

  document.getElementById('root')
);