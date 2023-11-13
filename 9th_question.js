// 9th question
function combineArrays(arrayOne, arrayTwo) {
let combinedArray = arrayOne.concat(arrayTwo);
return combinedArray;
}
let arrayOne = ['a', 'b', 'c', 'd'];
let arrayTwo = ['e', 'f', 'g'];
let result = combineArrays(arrayOne, arrayTwo);
console.log(result);