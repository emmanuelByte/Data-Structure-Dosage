function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();
  for (const num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num)! + 1);
    } else {
      map.set(num, 1);
    }
  }

  const sorted = [...map.entries()].sort((a, b) => b[1] - a[1]);
  return sorted.slice(0, k).map((x) => x[0]);
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
// [ 1, 2 ]
