export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string' && typeof length !== 'number' && !Array.isArray(students)) {
      throw new TypeError('wrong type');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get privateName() {
    return this._name;
  }

  set privateName(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('wrong type');
    } else {
      this._name = newName;
    }
  }

  get privateLength() {
    return this._length;
  }

  set privateLength(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('wrong type');
    } else {
      this._length = newLength;
    }
  }

  get privateStudents() {
    return this._students;
  }

  set privateStudents(newStudents) {
    if (!Array.isArray(newStudents)) {
      throw new TypeError('wrong type');
    } else {
      this._students = newStudents;
    }
  }
}

const c1 = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
console.log(c1.name);
c1.name = 'Python 101';
console.log(c1);
