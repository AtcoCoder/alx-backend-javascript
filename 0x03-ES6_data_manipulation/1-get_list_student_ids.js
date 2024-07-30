export default function getListStudentIds(array) {
  const ids = array.map((obj) => obj.id);
  return ids;
}
