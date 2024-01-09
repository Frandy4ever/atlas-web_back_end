export default function cleanSet(set, startString) {
  const filteredValue = Array.from(inputSet).filter(value => value.startsWith(startString).join('-'));

  return filteredValue;
}
