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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
function difference(a: number, b: number): number {
  return Math.abs(a - b);
}

function miniMaxSum(arr: number[]): void {
  const sums: number[] = [];

  arr.forEach((e, idx) => {
    const rd = arr.reduce((prev, curr) => prev + curr);
    sums.push(difference(rd, e));
  });

  console.log(Math.min(...sums), Math.max(...sums));
}

function main() {
  const arr: number[] = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
