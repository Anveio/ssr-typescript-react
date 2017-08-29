import * as React from 'react';
import * as ReactDomServer from 'react-dom/server';
import axios from 'axios';
import DataApi, { mapToObj } from '../state-api/lib';
import App from '../components/App';

import { config } from '../config';
const { host, port } = config;

export default async () => {
  const response = await axios.get(`http://${host}:${port}/data`);
  const api = new DataApi(response.data);
  const initialData = {
    articles: mapToObj<Article>(api.getArticles()),
    authors: mapToObj<Author>(api.getAuthors())
  };

  return {
    initialMarkup: ReactDomServer.renderToString(
      <App initialData={initialData} />
    ),
    initialData
  };
};
