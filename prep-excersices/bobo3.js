function solution(a, b, lower, upper) {
  let res = 0;
  let arrayLength = a.length;
  let pairAmount = 0;

  // 0 with 0
  // 0 with 1
  // 0 with 2
  // 0 with arr.length ....

  // 1 with 0
  // 1 with 1
  // 1 with arr.length ....
  for (let i = 0; i <= arrayLength; i++) {
    const currentA = a[i];

    for (let j = 0; j <= arrayLength; j++) {
      const currentB = b[j];
      res = currentA * currentA + currentB * currentB;

      // lower ≤ a[i] * a[i] + b[j] * b[j] ≤ upper
      if (lower <= res && res <= upper) {
        pairAmount++;
      }
    }
  }

  return pairAmount;
}

const a = [3, -1, 9];
const b = [100, 5, -2];
const lower = 7;
const upper = 99;

console.log(solution(a, b, lower, upper));
