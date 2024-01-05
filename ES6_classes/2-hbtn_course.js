export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string' && typeof length !== 'number' && !Array.isArray(students)) {
      TypeError
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get privateName() {
    return this._name;
  }

  set privateName(newName) {
    this._name = newName;
  }

  get privateLength() {
    return this._length;
  }

  set privateLength(newLength) {
    this._length = newLength;
  }

  get privateStudents() {
    return this._students;
  }

  set privateStudents(newStudents) {
    this._students = newStudents;
  }
}

const c1 = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
console.log(c1.name);
c1.name = 'Python 101';
console.log(c1);
