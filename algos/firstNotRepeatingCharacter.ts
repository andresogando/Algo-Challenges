function solution(s: string): string {

const stringArr = [...s];
  for (let i = 0; i < stringArr.length; i++) {
    if (
      stringArr.indexOf(stringArr[i]) === stringArr.lastIndexOf(stringArr[i])
    ) {
      return stringArr[i];
    }
  }

  return "_";
}
