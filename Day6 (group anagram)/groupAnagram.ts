function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();
  for (let i = 0; i < strs.length; i++) {
    let str = strs[i];
    let sorted = str.split('').sort().join('');
    if (map.has(sorted)) {
      map.get(sorted)!.push(str);
    } else {
      map.set(sorted, [str]);
    }
  }
  return Array.from(map.values());
}
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
