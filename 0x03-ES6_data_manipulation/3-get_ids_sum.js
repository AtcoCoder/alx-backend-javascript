export default function getStudentIdsSum(students) {
  const initialValue = 0;
  const accumulatedValue = students.reduce(
    (accumulator, currentStudent) => accumulator + currentStudent.id,
    initialValue,
  );
  return accumulatedValue;
}
