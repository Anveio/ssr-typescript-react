type DataType = Article | Author;

interface ApiResponse {
  articles: Article[];
  authors: Author[];
}

interface Article {
  id: string;
  title: string;
  date: string;
  authorId: string;
  body: string;
}

interface Author {
  id: string;
  firstName: string;
  lastName: string;
  website: string;
}

interface PlainObj<T extends DataType> {
  [key: string]: T;
}

interface ArticleActionsMap {
  lookupAuthor: (authorId: string) => Author | undefined;
}
