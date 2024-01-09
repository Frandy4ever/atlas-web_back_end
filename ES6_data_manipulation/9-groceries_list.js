export default function groceriesList(name, quantity) {
  const groceries = new Map();
  for (let i = 0; i < name.length; i++) {
    groceries.set(name[i], quantity[i]);
  }
  return groceries;
}
