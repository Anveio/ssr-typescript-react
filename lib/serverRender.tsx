import * as React from 'react';
import * as ReactDomServer from 'react-dom/server';

import App from './components/App';

export default () => {
  return ReactDomServer.renderToString(<App />);
};
