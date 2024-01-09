export default function updateUniqueItems(groceries) {
  if (!(groceries instanceof Map)) {
    throw new TypeError('Cannot process');
  }
  groceries.forEach((quantity, item) => {
    if (quantity === 1) {
      groceries.set(item, 100);
    }
  });
  return groceries;
}
