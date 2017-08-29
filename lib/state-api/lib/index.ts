class DataApi {
  data: Store;
  constructor(readonly rawData: ApiResponse) {
    this.data = {
      articles: this.arrToMap<Article>(this.rawData.articles),
      authors: this.arrToMap<Author>(this.rawData.authors)
    };
  }

  public arrToMap = <T extends DataType>(arr: Array<T>): Map<string, T> => {
    return arr.reduce(
      (acc: Map<string, T>, cur: T) => acc.set(cur.id, cur),
      new Map()
    );
  };

  public lookupAuthor = (authorId: string): Author | undefined => {
    return this.data.authors.get(authorId);
  };

  public getState = (): Store => this.data;
}

export default DataApi;
