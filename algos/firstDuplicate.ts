// firstDuplicate([2, 1, 3, 5, 3, 2]);
// firstDuplicate([8, 4, 6, 2, 6, 4, 7, 9, 5, 8]);
// firstDuplicate([2, 4, 3, 5, 1]);
// firstDuplicate([2, 3, 3]);

function solution(a: number[]): number {
  const arrLength = a.length;
  const arrCopy = new Set<number>();
  

  for (let i = 0; i < arrLength; i++) {
    if (a[i] > arrLength) a.splice(i, 1);

    if (arrCopy.has(a[i])) {
      return a[i]
    } else {
      arrCopy.add(a[i]);
    }
  }

  
  return -1;
}
