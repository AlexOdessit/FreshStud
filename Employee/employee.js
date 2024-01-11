class Employee {
  #firstname;
  #surname;
  #rate;
  #rateHour;
  constructor(firstname, surname, rate, rateHour, isMale = 'male') {
    this.#firstname = firstname;
    this.#surname = surname;
    this.rate = rate;
    this.rateHour = rateHour;
    this.isMale = isMale;
    this.fired = false;
  }

  static isWorker(worker) {
    return worker instanceof Employee;
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

  checkRateValue(value) {
    if (value <= 0) {
      throw new RangeError('Can not be an zero value');
    }
    if (typeof value !== 'number' || isNaN(value)) {
      throw new TypeError('Not a number');
    }
  }

  get rate() {
    return this.#rate;
  }

  set rate(rate) {
    this.checkRateValue(rate);
    this.#rate = rate;
  }

  get rateHour() {
    return this.#rateHour;
  }

  set rateHour(rateHour) {
    this.checkRateValue(rateHour);
    this.#rateHour = rateHour;
  }

  getSalary() {
    if (this.fired === true) {
      throw new TypeError('Not working in a company');
    } else {
      return this.#rate * this.#rateHour;
    }
  }
}

class Manager extends Employee {
  constructor(firstname, surname, privileges) {
    super(firstname, surname, 1000, 20, 'male');
    this.privileges = privileges;
  }

  toFire(emp) {
    if (Manager.isTop(emp)) {
      throw new TypeError('manager can be fired only by Chief!!!');
    }
    emp.fired = true;
    console.log(`${this.fullName} get fired!!!`);
  }

  static isTop(top) {
    return top instanceof Manager;
  }
}

const emp1 = new Employee('Alex', 'Grand', 15, 30);
console.log(emp1.fullName);
console.log(emp1.getSalary());
const top1 = new Manager('Max', 'Weber', []);
