// Write a function that squares each element of an array.
function square(array){
    var squaredArray=array.map(a => a*a);
    return squaredArray;
}
const array=[1,2,3,4,5,6,7,8,9,10];
console.log(square(array));

// function square(array){
//     var squaredArray=array.map(a => a+2);
//     return squaredArray;
// }
// const array=[1,2,3,4,5,6,7,8,9,10];
// console.log(square(array));