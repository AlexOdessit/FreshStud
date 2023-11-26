'use strict';
// 1 Each index with value
const arr1 = ['test', false, 2345, null];
// const checkIndexWithValue = function (y, x) {
//   console.log('Item with index' + x + ' ' + 'has a value' + ' ' + y);
// };

// arr1.forEach(checkIndexWithValue);

arr1.forEach(function (y, x) {
  console.log('Item with index' + x + ' ' + 'has a value' + ' ' + y);
});

// 2 Filtered adult
const usersList = [
  { firstName: 'Test', lastName: 'Testovich', age: 27, gender: 'male' },
  { firstName: 'User', lastName: 'Userenko', age: 12, gender: 'male' },
  { firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female' },
  { firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female' },
  { firstName: 'Undefined', lastName: 'Undefined', age: 99 },
  { firstName: 'Null', lastName: 'Nullochyk', gender: 'male' },
];

// const adultList = function (adult) {
//   return adult.age >= 18;
// };

// console.log(usersList.filter(adultList));

const adultList = usersList.filter(function (adult) {
  return adult.age >= 18;
});
console.log(adultList);

//3 - find 1female Index
const genderListArr = [
  { firstName: 'Test', lastName: 'Testovich', age: 27, gender: 'male' },
  { firstName: 'User', lastName: 'Userenko', age: 12, gender: 'male' },
  { firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female' },
  { firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female' },
  { firstName: 'Undefined', lastName: 'Undefined', age: 99 },
  { firstName: 'Null', lastName: 'Nullochyk', gender: 'male' },
];

// const femaleIndex = function (name) {
//   return name.gender === 'female';
// };

// console.log(genderListArr.findIndex(femaleIndex));

const femaleIndex = genderListArr.findIndex(function (name) {
  return name.gender === 'female';
});
console.log(femaleIndex);
