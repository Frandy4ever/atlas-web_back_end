export default class Currency {
  constructor (code, name) {
    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw new Error('Code must be a string!');
    }
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new Error('Name must be a string!');
    }
  }

  get privateCode() {
    return this._code;
  }

  get privateName() {
    return this._name;
  }

  set privateCode(newCode) {
    if (typeof newCode !== 'string') {
      throw new Error('Code must be a string!');
    }
    this._code = newCode;
  }

  set privateName(newName) {
    if (typeof newName !== 'string') {
      throw new Error('Name must be a string!');
    }
    this._name = newName;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
  
}