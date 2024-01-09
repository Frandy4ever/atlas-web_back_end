export default function updateUniqueItems(groceries) {
  const updatedGroceries = new Map([...groceries].map(([key, value]) => [key, value === 1 ? 100 : value]));
  return updatedGroceries;
}
