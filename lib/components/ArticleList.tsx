import * as React from 'react';
import Article from './Article';
import StateApi from '../state-api/lib';

export interface Props {
  articles: Map<string, Article>;
  store: StateApi;
}

const ArticleList = ({ articles, store }: Props) => {
  return articles.size > 0 ? (
    <div>
      {Array.from(articles.keys()).map((id: string) => {
        const article = articles.get(id) as Article;
        return <Article article={article} store={store} key={article.id} />;
      })}
    </div>
  ) : (
    <div>No Articles found </div>
  );
};
export default ArticleList;
