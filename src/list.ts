export const list = new Array(100)
  .fill(undefined)
  .map((item, index) => ({
    id: index,
    name: `item-${index}`,
    modified: Date.now()
  }));
