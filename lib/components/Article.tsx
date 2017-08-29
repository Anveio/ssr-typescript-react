import * as React from 'react';
import StateApi from '../state-api/lib';

export interface Props {
  article: Article;
  store: StateApi;
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

const App = ({ article, store }: Props) => {
  const { body, title } = article;
  const author = store.lookupAuthor(article.authorId) as Author;

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
