import * as React from 'react';
import StateApi from '../state-api/lib';
import * as Perf from 'react-addons-perf';
import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import Timestamp from './Timestamp';

if (typeof window !== 'undefined') {
  window['Perf'] = Perf;
}

interface Props {
  store: StateApi;
}

interface State {
  articles: Map<string, Article>;
  searchTerm: string;
}

class App extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    const { articles, searchTerm } = this.props.store.getState();
    this.state = {
      articles,
      searchTerm
    };
  }
  subscriptionId: number = 0;

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
    setImmediate(() => Perf.start());
    setTimeout(() => {
      Perf.stop();
      Perf.printWasted();
    }, 5000);
  }

  componentWillMount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }

  onStoreChange = () => {
    const { articles, searchTerm } = this.props.store.getState();
    this.setState({
      articles,
      searchTerm
    });
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
        <Timestamp timestamp={this.props.store.getState().timestamp} />
        <SearchBar doSearch={this.props.store.setSearchTerm} />
        <ArticleList articles={articles} store={this.props.store} />
      </div>
    );
  }
}

export default App;
