import getListStudents from './0-get_list_students';

export default function updateStudentGradeByCity(students, city, newGrades) {
  const highOrder = students.filter((student) => student.location === city).map((student) => {
    const newGrade = newGrades.find((grade) => grade.studentId === student.id);
    if (newGrade) {
      return { ...student, grade: newGrade.grade };
    }
  });

  return highOrder;
}
