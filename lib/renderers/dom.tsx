import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '../components/App';

ReactDOM.render(
  // tslint:disable-next-line
  <App initialData={window['initialData']} />,
  document.querySelector('#root')
);
