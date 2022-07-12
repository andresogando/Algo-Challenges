const reverseNum = (num) => num.toString().split("").reverse().join("");
function solution(numbers) {
    for (let i = 0; i < numbers.length; i++){
        if (reverseNum(numbers[i]) < numbers[i + 1]) return true;
        return false;
    }
}

console.log(solution([1, 5, 10, 20]));
console.log(solution([1, 3, 900, 10]));
console.log(solution([13, 31, 30]));
