import * as React from 'react';

export interface Props {
  article: Article;
  actions: ArticleActionsMap;
}

interface InlineStyleMap {
  [key: string]: React.CSSProperties;
}

const styles: InlineStyleMap = {
  article: {
    paddingBottom: 10,
    borderBottomStyle: 'solid'
  },
  title: {
    fontWeight: 'bold'
  }
};

const dateDisplay = (dateString: string) => new Date(dateString).toDateString();

const App = ({ article, actions }: Props) => {
  const { body, title } = article;
  const author = actions.lookupAuthor(article.authorId) as Author;

  return (
    <div style={styles.article}>
      <div style={styles.title}>{title}</div>
      <div>{dateDisplay(article.date)}</div>
      <div>
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div style={styles.article}>{body}</div>
    </div>
  );
};
export default App;
