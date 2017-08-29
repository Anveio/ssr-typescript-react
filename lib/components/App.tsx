import * as React from 'react';
import DataApi from '../DataApi';
import { data } from '../testData';

import ArticleList from './ArticleList';

interface Props {}

interface State {
  articles: Map<string, Article>;
  authors: Map<string, Author>;
}

const api = new DataApi(data);

class App extends React.PureComponent<Props, State> {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors()
    };
  }

  public render() {
    return (
      <ArticleList
        articles={this.state.articles}
        authors={this.state.authors}
      />
    );
  }
}

export default App;