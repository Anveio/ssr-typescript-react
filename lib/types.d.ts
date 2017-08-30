type DataType = Article | Author;
type ArticleMap = Map<string, Article>;
type AuthorMap = Map<string, Author>;

interface ApiResponse {
  articles: Article[];
  authors: Author[];
}

interface Store {
  articles: ArticleMap;
  authors: AuthorMap;
  searchTerm: string;
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
