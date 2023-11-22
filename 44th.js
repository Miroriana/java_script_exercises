// Write a function that checks if all elements in an array are positive.
// function check(array){
//     for (let i=0; i<array.length;i++){
//         if (array[i]>0){
//             console.log(array[i], "is positive");
//         }else{
//             console.log(array[i], "is not positive")
//         }
//     }
// }
// const array=[1,23,4,5,6,7,8];
// check(array);

//another way
function allPositive(array){
    return array.every(a => a>0);
}
const array=[1,2,3,4,5,6,7,-8,4];
console.log(allPositive(array));
