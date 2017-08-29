import DataApi from '../DataApi';
import { data } from '../testData';

const api = new DataApi(data);

describe('DataApi', () => {
  it('exposes articles as a Map', () => {
    const articles = api.getArticles();
    const articleId = data.articles[0].id;
    const articleTitle = data.articles[0].title;

    expect(articles.get(articleId)).toHaveProperty('id');
    expect((articles.get(articleId) as Article).title).toBe(articleTitle);
  });

  it('exposes authors as a Map', () => {
    const authors = api.getAuthors();
    const authorId = data.authors[0].id;
    const authorFirstName = data.authors[0].firstName;

    expect(authors.get(authorId)).toHaveProperty('id');
    expect((authors.get(authorId) as Author).firstName).toBe(authorFirstName);
  });
});
