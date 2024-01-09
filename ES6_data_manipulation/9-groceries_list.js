export default function groceriesList(name, quantity) {
  if (!(groceries instanceof Map)) {
    throw new TypeError('Cannot process');
  }
  groceries.set(name, quantity);
  return groceries;
}
