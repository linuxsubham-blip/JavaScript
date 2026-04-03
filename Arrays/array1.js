const number = [1, 2, 3];

const sum = (array) => {
  return array.reduce((prev, num) => {
    return prev + num;
  }, 0);
};

// Method 1 ->
console.log(sum(number));

// Method 2 ->
const result = sum(number);
console.log(result);
