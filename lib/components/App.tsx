import * as React from 'react';
// import axios from 'axios';
import { objToMap } from '../state-api/lib';

import ArticleList from './ArticleList';

interface Props {
  initialData: {
    articles: PlainObj<Article>;
    authors: PlainObj<Author>;
  };
}

interface State {
  articles: Map<string, Article>;
  authors: Map<string, Author>;
}

class App extends React.PureComponent<Props, State> {
  state = {
    articles: objToMap(this.props.initialData.articles),
    authors: objToMap(this.props.initialData.authors)
  };

  // async componentDidMount() {
  //   const rawData: ApiResponse = (await axios.get('/data')).data;

  //   this.setState((): Partial<State> => ({
  //     articles: api.getArticles(),
  //     authors: api.getAuthors()
  //   }));
  // }

  articleActions: ArticleActionsMap = {
    lookupAuthor: (authorId: string) => this.state.authors.get(authorId)
  };

  public render() {
    return (
      <ArticleList
        articles={this.state.articles}
        actions={this.articleActions}
      />
    );
  }
}

export default App;
