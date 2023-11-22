// Write a function that removes duplicates from an array.
function removeDuplicates(arr){
    var uniqueArray= [... new Set(arr)];
    return uniqueArray;
}
var array=[1,2,4,5,3,2,1,3,4,6,8];
console.log(removeDuplicates(array));