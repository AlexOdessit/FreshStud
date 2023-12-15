// function  Constructor
function User(name, surname, gender, messageCounter) {
  this.name = name;
  this.surname = surname;
  this.gender = gender;
  this.messageCounter = messageCounter;
  this.userDetails = function () {
    return (
      'User:' +
      '' +
      this.name +
      ',' +
      'Surname:' +
      '' +
      this.surname +
      ',Gender:' +
      '' +
      this.gender +
      ',Messages:' +
      '' +
      this.messageCounter
    );
  };
  this.addMessage = function (text) {
    // debugger;
    this.messageCounter++;
    return (
      'User:' +
      this.name +
      ' ' +
      this.surname +
      ',' +
      this.gender +
      ',message:' +
      '' +
      text
    );
  };
}

const user1 = new User('Alex', 'Weber', 'male', 20);
const user2 = new User('Lisa', 'Dexter', 'female', 30);
console.log(user1.addMessage('Hello to' + user2.name));
console.log(user1.userDetails());
console.log(user2.addMessage('Hello to' + user1.name));
console.log(user2.userDetails());
