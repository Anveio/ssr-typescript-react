import * as React from 'react';
import * as ReactDomServer from 'react-dom/server';
import axios from 'axios';
import StateApi from '../state-api/lib';
import App from '../components/App';

import { config } from '../config';
const { host, port } = config;

export default async () => {
  const response = await axios.get(`http://${host}:${port}/data`);
  const store = new StateApi(response.data);
  // const serverData = {
  //   articles: mapToObj<Article>(store.getArticles()),
  //   authors: mapToObj<Author>(store.getAuthors())
  // };

  return {
    initialMarkup: ReactDomServer.renderToString(<App store={store} />),
    serverData: response.data
  };
};
