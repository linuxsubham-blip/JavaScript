(() => {
  const number = [1, 2, 3, 4, 5];
  const [...dupNum] = number;
  console.log(number);
  console.log(dupNum);
  console.log(...number);
})();

console.log("Task completed!");
