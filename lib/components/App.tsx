import * as React from 'react';
import StateApi from '../state-api/lib';

import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import Timestamp from './Timestamp';

interface Props {
  store: StateApi;
}

// interface State {
//   store: Store;
//   searchTerm: string;
// }

class App extends React.PureComponent<Props, Store> {
  state = this.props.store.getState();
  subscriptionId: number = 0;

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }

  componentWillMount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }

  onStoreChange = () => {
    this.setState(this.props.store.getState());
  };

  public render() {
    let { articles, searchTerm } = this.state;
    const searchRegExp = new RegExp(searchTerm, 'i');
    if (searchTerm) {
      articles = Array.from(articles.keys())
        .filter((id: string) => {
          const article = articles.get(id) as Article;
          return (
            article.body.match(searchRegExp) ||
            article.title.match(searchRegExp)
          );
        })
        .reduce((acc: Map<string, Article>, cur: string) => {
          const article = articles.get(cur) as Article;
          return acc.set(article.id, article);
        }, new Map());
    }
    return (
      <div>
        <Timestamp timestamp={this.state.timestamp} />
        <SearchBar doSearch={this.props.store.setSearchTerm} />
        <ArticleList articles={articles} store={this.props.store} />
      </div>
    );
  }
}

export default App;
