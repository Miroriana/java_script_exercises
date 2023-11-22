// Write a function that checks if an array is sorted in ascending order.
// same as question 43
function ascending(array) {
    var sorted = array.sort((a, b) => a - b);
    console.log("The sorted array is ", sorted);
    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] < sorted[i - 1]) {
            return false;
        }
        return true;
    }
    return ;

}
var array = [1, 3, 5, 7, 8, 3, 2, 1, 6, 9];
console.log("The largest number in array is ", array.length - 1);
console.log("Is the array in ascending order?", ascending(array));