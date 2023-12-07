// 1 rest  and spread operators
const dataAmount = (...data) => console.log(data.length);
const animals = ['dog', 'cat', 'lion', 'tiger', 'horse', 'shark'];
const names = ['Alex', 'Tiesto', 'Carl', 'Fedde', 'Armin', 'John'];
const dataArr = [...animals, ...names];
dataAmount(...dataArr);

//2 Calc
const arrowCalcFunc = (operator, ...numbers) => {
  let countNum = 1;
  for (let i = 0; i < numbers.length; i++) {
    if (operator === '+') {
      countNum += numbers[i];
    } else if (operator === '-') {
      countNum -= numbers[i];
    } else if (operator === '*') {
      countNum *= numbers[i];
    } else if (operator === '/') {
      countNum /= numbers[i];
    } else {
      throw new Error('Wrong data value');
    }
  }

  return countNum;
};

const calcNum = [34, 5, 20, 10, 35, 3];
try {
  console.log(arrowCalcFunc('*', ...calcNum));
} catch (err) {
  console.log(err.message);
}

//3 Math.min
const lowDigit = (...digits) => console.log(Math.min(...digits));
const digitsArr = [34, 5, 89, 1000, 35, 3, 78, 4, 670, 1];
lowDigit(...digitsArr);
