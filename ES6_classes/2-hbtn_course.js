class HolbertonCourse {
  constructor (name, length, students) {
    if (typeof name !== 'string' || typeof length !== 'number' || !Array.isArray(students)) {
      throw new TypeError('Invalid attribute type');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get privateName () { return this._name; }

  set privateName (newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Invalid type for newName');
    }
    this._name = newName;
  }

  get privateLength () { return this._length; }

  set privateLength (newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Invalid type for newLength');
    }
    this._length = newLength;
  }

  get privateStudents () { return this._students; }

  set privateStudents (newStudents) {
    if (!Array.isArray(newStudents)) {
      throw new TypeError('Invalid type for newStudents');
    }
    this._students = newStudents;
  }
}
