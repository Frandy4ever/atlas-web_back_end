export default function getStudentsByLocation(student, city) {
  return student.filter((students) => students.location === city);
}
