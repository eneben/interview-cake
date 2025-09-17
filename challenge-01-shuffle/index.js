let arrOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function get_random(floor, ceiling) {
  if (floor > ceiling) {
    return null;
  }
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffleArrayInPlace(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    const j = get_random(i, arr.length - 1);

    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

console.log("arrOfNumbersBeforeFunctionCall:", arrOfNumbers);

shuffleArrayInPlace(arrOfNumbers);

console.log("arrOfNumbersAfterFunctionCall:", arrOfNumbers);
