export default function getListStudentsByLocation(studentsArray, location) {
  if (!Array.isArray(studentsArray)) return [];
  const newArray = studentsArray.filter((student) => student.location === location);
  return newArray;
}
