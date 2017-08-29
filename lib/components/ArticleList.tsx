import * as React from 'react';
import Article from './Article';
import StateApi from '../state-api/lib';

export interface Props {
  articles: Map<string, Article>;
  store: StateApi;
}

const ArticleList = ({ articles, store }: Props) => {
  return (
    <div>
      {Array.from(articles.keys()).map((id: string) => {
        const article = articles.get(id) as Article;
        return <Article article={article} store={store} key={article.id} />;
      })}
    </div>
  );
};
export default ArticleList;
