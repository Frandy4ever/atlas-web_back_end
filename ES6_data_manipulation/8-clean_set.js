export default function cleanSet(set startString) {
  return startString.replace(/[^a-zA-Z0-9]/g, '')
}
