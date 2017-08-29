import * as React from 'react';
import Article from './Article';

export interface Props {
  articles: Map<string, Article>;
  authors: Map<string, Author>;
}

const ArticleList = ({ articles, authors }: Props) => {
  return (
    <div>
      {Array.from(articles.keys()).map((id: string) => {
        const article = articles.get(id) as Article;
        const author = authors.get(article.authorId) as Author;

        return <Article article={article} author={author} key={article.id} />;
      })}
      <h1>hi</h1>
    </div>
  );
};
export default ArticleList;
