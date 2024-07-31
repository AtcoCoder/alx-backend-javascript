export default function updateStudentGradeByCity(students, location, newGrades) {
  const filteredStudents = students.filter(
    (student) => student.location === location,
  );
  const studentFinals = filteredStudents.map(
    (currentStudent) => {
      const student = currentStudent;
      for (const grade of newGrades) {
        if (student.id === grade.studentId) student.grade = grade.grade;
      }
      if (!student.grade) student.grade = 'N/A';
      return student;
    },
  );
  return studentFinals;
}
