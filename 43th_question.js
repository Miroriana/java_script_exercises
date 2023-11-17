// Write a function that sorts an array of numbers in ascending order.

function ascending(array){
    var sorted = array.sort((a, b) => a - b);
    console.log(sorted) ;
}
var array=[1,3,5,7,8,3,2,1,6,9];
ascending(array);