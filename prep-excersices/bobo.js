function solution(numbers, left, right) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];
    const x = currentNumber / (i + 1);

    for (let y = left; y <= currentNumber; y++) {
      if (x < left || x > right || !Number.isInteger(x)) {
        result.push(false);
        break;
      }

      const calculation = x * y;

      if (calculation === currentNumber) {
        result.push(true);
        break;
      }
    }
  }

  return result;
}

console.log(solution([8, 5, 6, 16, 5], 1, 3));
