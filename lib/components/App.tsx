import * as React from 'react';
import StateApi from '../state-api/lib';
import { objToMap, mapToObj } from '../state-api/lib/utils';

import ArticleList from './ArticleList';
import SearchBar from './SearchBar';

interface Props {
  store: StateApi;
}

// interface State {
//   store: Store;
//   searchTerm: string;
// }

class App extends React.PureComponent<Props, Store> {
  state = this.props.store.getState();

  private setSearchTerm = (searchTerm: string) => {
    this.setState({ searchTerm });
  };

  public render() {
    let { articles, searchTerm } = this.state;
    if (searchTerm) {
      articles = Array.from(articles.keys())
        .filter((id: string) => {
          const article = articles.get(id) as Article;
          return (
            article.body.match(searchTerm) || article.title.match(searchTerm)
          );
        })
        .reduce((acc: Map<string, Article>, cur: string) => {
          const article = articles.get(cur) as Article;
          return acc.set(article.id, article);
        }, new Map());
    }
    return (
      <div>
        <SearchBar doSearch={this.setSearchTerm} />
        <ArticleList articles={articles} store={this.props.store} />
      </div>
    );
  }
}

export default App;
