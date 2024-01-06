export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get privateCode() {
    return this._code;
  }

  get privateName() {
    return this._name;
  }

  set privateCode(newCode) {
    if (typeof newCode === 'string') {
      this._code = newCode;
    }
  }

  set privateName(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}