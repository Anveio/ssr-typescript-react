import * as React from 'react';
import * as ReactDOM from 'react-dom';
import StateApi from '../state-api/lib';
import App from '../components/App';
// tslint:disable:no-string-literal

const store = new StateApi(window['initialData']);

ReactDOM.render(<App store={store} />, document.querySelector('#root'));
