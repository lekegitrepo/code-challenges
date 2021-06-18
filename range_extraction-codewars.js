function rangeExtraction(list) {
  const maxVal = Math.max(...list);
  let minVal = Math.min(...list);
  let counter = 0;
  let rangeStr = "";
  while (minVal <= maxVal) {
    if (list.includes(minVal)) {
      counter++;
      if (counter >= 3) {
        rangeStr.concat(minVal - counter + "-" + minVal);
      }
    } else {
      rangeStr.concat(minVal);
      counter = 0;
    }
    minVal++;
  }
  return rangeStr;
}

console.log(
  rangeExtraction([
    -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
  ])
);
