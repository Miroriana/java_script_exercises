// Write a function that removes duplicates from an array.
function removeDuplicates(arr){
    return [... new Set(arr)];
}
var array=[1,2,4,5,3,2,1,3,4,6,8];
var uniqueArray = removeDuplicates(array);
console.log(uniqueArray);