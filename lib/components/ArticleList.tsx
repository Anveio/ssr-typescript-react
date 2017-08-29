import * as React from 'react';
import Article from './Article';

export interface Props {
  articles: Map<string, Article>;
  actions: ArticleActionsMap;
}

const ArticleList = ({ articles, actions }: Props) => {
  return (
    <div>
      {Array.from(articles.keys()).map((id: string) => {
        const article = articles.get(id) as Article;
        return <Article article={article} actions={actions} key={article.id} />;
      })}
    </div>
  );
};
export default ArticleList;
