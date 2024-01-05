export default function appendToEachArrayValue(array, appendString) {
  const arrayCopy = [...array];
  
  for (const idx of arrayCopy) {
    const value = arrayCopy[idx];
    arrayCopy[idx] = appendString + value;
  }

  return arrayCopy;
}
