function rangeExtraction(list) {
  let counter = 0;
  const rangeVals = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i] + 1 != list[i + 1]) {
      if (counter === 0) {
        rangeVals.push(list[i]);
      }
      if (counter === 1) {
        rangeVals.push(list[i - 1]);
        rangeVals.push(list[i]);
        counter = 0;
      }
      if (counter > 1) {
        rangeVals.push(list[i - counter] + "-" + list[i]);
        counter = 0;
      }
    } else {
      counter++;
    }
  }
  return rangeVals.join();
}

console.log(
  rangeExtraction([
    -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
  ])
);
