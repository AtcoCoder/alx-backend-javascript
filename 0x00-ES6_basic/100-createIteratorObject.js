export default function createIteratorObject(report) {
  const iterator = [];
  const { allEmployees } = report;
  const departments = Object.keys(allEmployees);
  for (const department of departments) {
    const employees = allEmployees[department];
    iterator.push(...employees);
  }
  return iterator;
}
