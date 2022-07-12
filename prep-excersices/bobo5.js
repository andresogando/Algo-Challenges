
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

function solution(s) {
  for (let i = 0; i <= s.length; i++) {
    const checkString = s.substring(0, i);
    const palindrome = isPalindrome(checkString);

    if (checkString.length > 2 && palindrome) {
      s = s.substring(i, s.length);
      return solution(s);
    }
  }

  return s;
}

console.log(solution("aaacodedoc"));
console.log(solution("codesignal"));
console.log(solution(""));
