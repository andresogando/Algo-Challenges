function solution(numbers) {
  const validIterations = numbers.length - 2;
  // res should be numbers.length - 2;
  const res = [];

  // numbers[0] ..1,2
  // numbers[1] ..2,3
  // numbers[2] ..3,4
  for (let i = 0; i < validIterations; i++) {
    const currentNumber = numbers[i];
    const nextNumber = numbers[i + 1];
    const afterNextNumber = numbers[i + 2];

    // is ZigZag if a < b > c or a > b < c
    if (currentNumber < nextNumber && nextNumber > afterNextNumber) {
      res.push(1);
    } else if (currentNumber > nextNumber && nextNumber < afterNextNumber) {
      res.push(1);
    } else {
      res.push(0);
    }
  }
  return res;
}

const numbers = [1, 2, 1, 3, 4];
const numbers2 = [1, 2, 3, 4];
const numbers3 = [1000000000, 1000000000, 1000000000];

console.log(solution(numbers));
console.log(solution(numbers2));
console.log(solution(numbers3));
