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

//SOLUTION OF INTERVIEW CAKE:
// Fisher-Yates shuffle

// function getRandom(floor, ceiling) {
//   return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
// }

// function shuffle(array) {

//   // If it's 1 or 0 items, just return
//   if (array.length <= 1) return;

//   // Walk through from beginning to end
//   for (let indexWeAreChoosingFor = 0;
//     indexWeAreChoosingFor < array.length - 1; indexWeAreChoosingFor++) {

//     // Choose a random not-yet-placed item to place there
//     // (could also be the item currently in that spot)
//     // must be an item AFTER the current item, because the stuff
//     // before has all already been placed
//     const randomChoiceIndex = getRandom(indexWeAreChoosingFor, array.length - 1);

//     // Place our random choice in the spot by swapping
//     if (randomChoiceIndex !== indexWeAreChoosingFor) {
//       const valueAtIndexWeChoseFor = array[indexWeAreChoosingFor];
//       array[indexWeAreChoosingFor] = array[randomChoiceIndex];
//       array[randomChoiceIndex] = valueAtIndexWeChoseFor;
//     }
//   }
// }
