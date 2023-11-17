// Write a function that calculates the factorial of a number.

function factorial(are){
    if(are===0 || are===1){
        return 1;
    }else{
        return are*factorial(are-1);
    }
}
console.log(factorial(5));