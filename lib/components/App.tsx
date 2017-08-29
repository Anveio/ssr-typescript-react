import * as React from 'react';
// import axios from 'axios';
import StateApi from '../state-api/lib';

import ArticleList from './ArticleList';

// interface Props {
//   initialData: {
//     articles: PlainObj<Article>;
//     authors: PlainObj<Author>;
//   };
// }

interface Props {
  store: StateApi;
}

class App extends React.PureComponent<Props, Store> {
  state = this.props.store.getState();

  public render() {
    return (
      <ArticleList
        articles={this.state.articles}
        store={this.props.store}
      />
    );
  }
}

export default App;
