// Create a function that displays multiples of 5

function fiveMultiple(number){
    for(i =1; i<=number; i++){
        if(number[i] %5==0){
            console.log("the multiples of five are :" ,number[i]);
        }
    }

}
fiveMultiple(50);