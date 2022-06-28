"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";

  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: number[]): void {
  const arrLength = arr.length;
  const storage = {
    positive: 0,
    negative: 0,
    zero: 0,
  };

  arr.forEach((e) => {
    if (e < 0) {
      storage.negative++;
    } else if (e == 0) {
      storage.zero++;
    } else {
      storage.positive++;
    }
  });

  Object.entries(storage).forEach(([key, value]) =>
    console.log((storage[key] = (value / arrLength).toFixed(6)))
  );
}

function main() {
  const n: number = parseInt(readLine().trim(), 10);

  const arr: number[] = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
