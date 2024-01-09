export default function groceriesList(name, quantity) {
 const groceries = new Map();

 if (!Array.isArray(groceryItems)) throw Error('Invalid data type');
 for (const item of groceryItems) {
  if (!item.name || typeof item.quantity !== 'number') throw Error('Invalid data type');
  groceries.set(item.name, item.quantity);
 }
  return groceries;
}
