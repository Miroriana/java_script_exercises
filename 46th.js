// Write a function that converts an array of strings to uppercase.
function upper(arr){
    const other = arr.map(str => str.toUpperCase());
    return other;
}
const string=["m","i","g","n","o","n","n","e"];
console.log(upper(string));