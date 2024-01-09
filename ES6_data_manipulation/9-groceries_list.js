export default function groceriesList(names, quantities) {
  const groceryMap = new Map();

  if (!Array.isArray(names) || !Array.isArray(quantities) || names.length !== quantities.length) {
    throw new Error('Invalid arguments');
  }
  for (const [name, quantity] of names.entries()) {
    groceryMap.set(name, quantities[quantity]);
  }
  return groceryMap;
}
