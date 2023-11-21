// // Lowest Num
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
// const lowNum = findLowNum(5, 10);
// console.log(lowNum);

// // Check Adult
const checkMyAge = function (age) {
  if (age >= 18) {
    alert('Ok,thank you !!!');
  } else if (age !== age) {
    alert('Only numeric allowed!');
  } else if (age < 18) {
    alert('Not allowed to enter');
  }
  return age;
};

let checkAgeMessage;
checkAgeMessage === null || checkAgeMessage === ''
  ? (checkAgeMessage = +prompt('Please enter your age'))
  : (checkAgeMessage = +prompt('Are you adult?'));

checkMyAge(checkAgeMessage);
