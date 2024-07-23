export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const ele of array) {
    newArray.push(appendString + ele);
  }

  return newArray;
}
