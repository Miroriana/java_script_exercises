// Write a function that checks if a number is even.

function even(array){
    // var i=array.length;
    for(let i=0;i<array.length;i++){
        if(array[i] %2===0){
            console.log(array[i]);
        }
    }
}
var array=[1,2,3,4,5,6,7,8,9,10];
console.log(even(array));