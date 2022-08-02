function solution(a: number[][]): number[][] {
     const rotated = [];

  for (let i = 0; i < a.length; i++) {
      rotated.push([])
  }
    

  for (let i = 0; i < a.length; i++) {
      
    for (let j = 0; j < a.length; j++) {
      rotated[j].unshift(a[i][j]);
    }
    
  }

  return rotated;
    
    

}
