class StateApi {
  private readonly data: Store;
  constructor(rawData: ApiResponse) {
    this.data = {
      articles: this.arrToMap(rawData.articles),
      authors: this.arrToMap(rawData.authors),
      searchTerm: ''
    };
  }

  private arrToMap = <T extends DataType>(arr: Array<T>): Map<string, T> => {
    return arr.reduce(
      (acc: Map<string, T>, cur: T) => acc.set(cur.id, cur),
      new Map()
    );
  };

  public lookupAuthor = (authorId: string) => {
    return this.data.authors.get(authorId);
  };

  public getState = (): Store => this.data;
}

export default StateApi;
