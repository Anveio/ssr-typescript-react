class StateApi {
  private store: Store;
  public subscriptions: {};
  public lastSubscriptionId: number;
  constructor(rawData: ApiResponse) {
    this.store = {
      articles: this.arrToMap(rawData.articles),
      authors: this.arrToMap(rawData.authors),
      searchTerm: '',
      timestamp: new Date()
    };

    this.subscriptions = {};
    this.lastSubscriptionId = 0;
  }

  private arrToMap = <T extends DataType>(arr: Array<T>): Map<string, T> => {
    return arr.reduce(
      (acc: Map<string, T>, cur: T) => acc.set(cur.id, cur),
      new Map()
    );
  };

  private notifySubscribers = () => {
    Object.values(this.subscriptions).forEach((cb: Function) => cb());
  };

  private mergeWithState = (value: Object) => {
    this.store = Object.assign(this.store, value);
    this.notifySubscribers();
  };

  public lookupAuthor = (authorId: string) => {
    return this.store.authors.get(authorId);
  };

  public setSearchTerm = (searchTerm: string) => {
    this.mergeWithState({
      searchTerm
    });
    this.store.searchTerm = searchTerm;
    this.notifySubscribers();
  };

  public startClock = () => {
    setInterval(() => {
      this.mergeWithState({ timestamp: new Date() });
    },          1000);
  };

  public subscribe = (cb: Function) => {
    this.lastSubscriptionId++;
    this.subscriptions[this.lastSubscriptionId] = cb;
    return this.lastSubscriptionId;
  };

  public unsubscribe = (subscriptionId: number) => {
    delete this.subscriptions[subscriptionId];
  };

  public getState = (): Store => this.store;
}

export default StateApi;
