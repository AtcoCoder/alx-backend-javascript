export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }
  
  inspect() {
    return `${this} [${this._code}] { _name: '${this._name}', _code: '${tihs._code}'}`;
  }

  toString() {
    return `[object ${this._code}]`
  }
}