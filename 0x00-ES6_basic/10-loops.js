export default function appendToEachArrayValue(array, appendString) {
  let idx = 0;
  for (const ele of array) {
    // eslint-disable-next-line no-param-reassign
    array[idx] = appendString + ele;
    idx += 1;
  }

  return array;
}
