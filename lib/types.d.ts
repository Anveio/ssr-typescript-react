interface ApiSchema {
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
