// Lowest Num
// const findLowNum = function (num1, num2) {
//   let arr2 = [];
//   let arr1 = [num1, num2];
//   for (let i = 1; i < arr1.length; i++) {
//     let min = arr1[0];
//     if (arr1[i] < min) {
//       min = arr1[i];
//     }
//     arr2.push(min);
//   }

//   return arr2;
// };
const findLowNum = function (num1, num2) {
  if (num1 < num2) {
    return num1;
  }
  if (num2 < num1) {
    return num2;
  }

  if (isNaN(num1) || isNaN(num2)) {
    return false;
  } else {
    return true;
  }
};

console.log(findLowNum(20, 10));

// Check Adult
// let checkAgeMessage = +prompt('Are you adult?');
// const checkMyAge = function (age) {
//   if (checkAgeMessage === '') {
//     checkAgeMessage = +prompt('Please enter your age');
//   } else if (checkAgeMessage === null) {
//     return null;
//   }
//   if (age >= 18) {
//     return true;
//   } else if (age < 18) {
//     return false;
//   } else if (age !== age) {
//     return 'not a number';
//   }
//   return age;
// };
// console.log(checkMyAge(checkAgeMessage));

// Calculator
let result = prompt('What would you  like to do (*,/,+,-)');
// хотелось бы чтоб проверка в функции на пустоту не запускала остальные prompt
let x = +prompt('Enter first Number');
let y = +prompt('Enter second Number');
const calcFunction = function (x, y) {
  if (result === '' || result === null) {
    location.reload();
    return false;
  }
  switch (result) {
    case '+':
      return x + y;

    case '-':
      return x - y;

    case '/':
      return x / y;

    case '*':
      return x * y;

    default:
      return 'Somethig goes wrong';
  }
};
alert(calcFunction(x, y));
