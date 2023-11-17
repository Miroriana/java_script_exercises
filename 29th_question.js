// Create a function that displays odd numbers between 1 and 100

function oddNumbers(number1, number2){
    for(number1>0 ; number1<=number2; number1++){
        if(number1 %2!==0){
            console.log("the old number is:" ,number1);
        }

    }
}
oddNumbers(1, 100);