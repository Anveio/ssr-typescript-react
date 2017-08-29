import {} from './testData';

type DataType = Article | Author;

class DataApi {
  constructor(readonly rawData: ApiSchema) {}

  public mapIntoObject<T extends DataType>(arr: Array<T>): Map<string, T> {
    return arr.reduce(
      (acc: Map<string, T>, cur: T) => acc.set(cur.id, cur),
      new Map()
    );
  }

  public getArticles(): Map<string, Article> {
    return this.mapIntoObject<Article>(this.rawData.articles);
  }

  public getAuthors(): Map<string, Author> {
    return this.mapIntoObject<Author>(this.rawData.authors);
  }
}

export default DataApi;
