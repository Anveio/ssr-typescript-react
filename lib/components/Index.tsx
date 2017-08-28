import * as React from 'react';
import * as ReactDOM from 'react-dom';

export const App = () => {
  return <h1>Hi everyone except you.</h1>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
