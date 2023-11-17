// Given an array like this: 
// var some numbers = [3,4,8,2,1,2,2,6,3,4];
// Create a function to sort and arrange these elements of the array in
//  ascending order.
// Modify the first array to make sure that it will also display the last 3 
// numbers and the first 3 numbers in front of the sorted array
// From the same sorted array, also display the first 3 numbers.


function sorting(array){
    var sortedArray = array.sort((a, b) => a - b);
    return sortedArray;
    
}
var array=[3,4,8,2,1,2,2,6,3,4];
console.log("sorted array: " , sorting(array));
var firstthree = array.slice(0,3);
console.log("First three elements of sorted array " , firstthree);
var lastthree = array.slice(-3);
console.log("Last three elements of sorted array " , lastthree);




// function sorting(array){
//     var sortedArray = array.sort((a, b) => a - b);
//     return sortedArray[array.length -1];
// }
// var array=[34,23,34,56,78,43];
// console.log(sorting(array));