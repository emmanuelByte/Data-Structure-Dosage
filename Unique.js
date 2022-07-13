var uniqueInOrder = function (iterable) {
  //   let result = [];
  //   let current = iterable[0];
  //   if (current) result.push(current);
  //   for (let i = 0; i < iterable.length; i++) {
  //     if (iterable[i] !== current) {
  //       current = iterable[i];
  //       result.push(current);
  //     }
  //   }
  //   return result;
  return [...iterable].filter(
    (item, index, array) => array[index - 1] !== item
  );
};

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
