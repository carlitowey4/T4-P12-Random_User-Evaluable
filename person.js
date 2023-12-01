class Person {
  constructor(name, email, phone, location) {
    this._name = name;
    this._email = email;
    this._phone = phone;
    this._location = location;
  }

  get name() {
    return this._name;
  }

  get email() {
    return this._email;
  }

  get phone() {
    return this._phone;
  }

  get location() {
    return this._location;
  }
}

export { Person };
