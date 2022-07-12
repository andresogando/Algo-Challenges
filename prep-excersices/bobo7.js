function solution(preferences) {
  const firstFriend = preferences[0];
  const secondFriend = preferences[1];
  const thirdFriend = preferences[2];

  const map = new Map();

  [firstFriend, secondFriend, thirdFriend].forEach((e) => {
    e.forEach((x, idx) => {
      if (map.has(x)) {
        map.set(x, map.get(x) + idx);
      } else {
        map.set(x, idx);
      }
    });
  });

  let pos = {
    min: Number.MAX_SAFE_INTEGER,
  };
  for (const [key, value] of map.entries()) {
    if (pos.min === value) return -1;
    if (pos.min > value && pos.min !== value) {
      pos.min = value;
      pos.key = key;
    }
  }

  return pos.key;
}

console.log(
  solution([
    [1, 2, 3, 4],
    [3, 1, 4, 2],
    [4, 2, 1, 3],
  ])
);

console.log(
  solution([
    [1, 2, 3],
    [2, 3, 1],
    [3, 1, 2],
  ])
);
