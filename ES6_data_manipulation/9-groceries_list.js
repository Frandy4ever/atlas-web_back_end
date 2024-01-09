export default function groceriesList(groceries) {
  const groceryMap = new Map();
  for (const item of groceries) {
    groceryMap.set(item[0], item[1]);
  }
  return groceryMap;
}
