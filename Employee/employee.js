class Employee {
  #rate;
  #firstname;
  #surname;
  #rateHour;
  constructor(firstname, surname, rate, rateHour, isMale = 'male') {
    this.#firstname = firstname;
    this.#surname = surname;
    this.rate = rate;
    this.rateHour = rateHour;
    this.isMale = isMale;
  }

  get fullName() {
    return `${this.#firstname} ${this.#surname}`;
  }

  set fullName(newName) {
    if (typeof newName !== 'string' || newName.trim() === '') {
      throw new TypeError('Can not be a blank');
    }
    const [firstname, surname] = newName.trim().split(' ');
    this.#firstname = firstname;
    this.#surname = surname;
  }

  checkValue(value) {
    if (value <= 0) {
      throw new RangeError('Can not be a zero value');
    }
    if (typeof value !== 'number' || isNaN(value)) {
      throw new TypeError('Not a number');
    }
  }

  get rate() {
    return this.#rate;
  }

  set rate(rate) {
    this.checkValue(rate);
    this.#rate = rate;
  }

  get rateHour() {
    return this.#rateHour;
  }

  set rateHour(rateHour) {
    this.checkValue(rateHour);
    this.#rateHour = rateHour;
  }

  getSalary() {
    return this.#rate * this.#rateHour;
  }
}

const emp1 = new Employee('Alex', 'Grand', 15, 30);
console.log(emp1.fullName);
console.log(emp1.getSalary());
