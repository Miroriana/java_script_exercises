// Write a function that calculates the sum of the even numbers in an array.
function sumOfEven(array){
    // for (let i=0; i<array.length; i++){
    //     if(array[i] %2===0){
    //         let a=0;
    //         a+=array[i];
    //     }
    // }
    // return a;
    var evenNumbers=array.filter(num => num%2===0);
    var sum=evenNumbers.reduce((acc,num)=> acc+num,0);
    return sum;
}
const array=[1,2,3,4,5,6,7,8,9,10];
console.log(sumOfEven(array));




