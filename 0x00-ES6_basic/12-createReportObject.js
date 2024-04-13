export default function createReportObject(employeesList) {
  const object = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(allDepartments) {
      return Object.keys(allDepartments).length;
    },
  };
  return object;
}
