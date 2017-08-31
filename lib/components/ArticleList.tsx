import * as React from 'react';
import Article from './Article';
import StateApi from '../state-api/lib';

export interface Props {
  articles: Map<string, Article>;
  store: StateApi;
}

export interface Props {}

class App extends React.PureComponent<Props, never> {
  public render() {
    return this.props.articles.size > 0 ? (
      <div>
        {Array.from(this.props.articles.keys()).map((id: string) => {
          const article = this.props.articles.get(id) as Article;
          return (
            <Article
              article={article}
              store={this.props.store}
              key={article.id}
            />
          );
        })}
      </div>
    ) : (
      <div>No Articles found </div>
    );
  }
}

export default App;
