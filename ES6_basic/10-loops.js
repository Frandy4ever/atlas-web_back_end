export default function appendToEachArrayValue(array, appendString) {
  let newArray = [];

  for (const idx of array) {
  newArray.push(appendString + idx);
  }
  return newArray;
}
