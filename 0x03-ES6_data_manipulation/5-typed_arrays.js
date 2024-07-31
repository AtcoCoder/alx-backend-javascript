export default function createInt8TypedArray(length, position, value) {
  if (length <= position) throw new Error('Position outside range');
  const arrayBuffer = new Int8Array(new ArrayBuffer(8), position, value);
  const dataViewArrayBuffer = new DataView(arrayBuffer);
  return dataViewArrayBuffer;
}