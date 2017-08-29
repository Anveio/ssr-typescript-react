const mapToObj = <T extends DataType>(map: Map<string, T>): PlainObj<T> => {
  return Array.from(map.keys()).reduce((acc: PlainObj<T>, cur: string) => {
    const entry = map.get(cur) as DataType;
    return Object.assign(acc, { [entry.id]: entry });
  }, {});
};

const objToMap = <T extends DataType>(obj: PlainObj<T>): Map<string, T> => {
  return Object.values(obj).reduce(
    (acc: Map<string, T>, cur): Map<string, T> => acc.set(cur.id, cur),
    new Map()
  );
};

export { mapToObj, objToMap };
