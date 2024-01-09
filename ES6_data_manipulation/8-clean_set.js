export default function cleanSet(set, startString) {
  if (!(set instanceof Set)) {
    throw new TypeError('Expected a Set');
  }
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }
  return Array.from(set).filter((item) => typeof item === 'string' && item.startsWith(startString)).map((item) => item.slice(startString.length)).join(' ');
}
