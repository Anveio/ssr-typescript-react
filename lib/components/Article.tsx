import * as React from 'react';

export interface Props {
  article: Article;
  author: Author;
}

const App = ({article, author}: Props) => {
  return (
    <div>
      <h1>{article.title}</h1>
      <h3>{author.firstName} {author.lastName}</h3>
    </div>
  )
}
export default App