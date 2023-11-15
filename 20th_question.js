// Create a function that displays an even number between 1 and 100

function evenNumber(a,b){
    for(let a=1; a <= 100; a++){
        if (a %2==0){
            console.log("the even numbers is",a);
        }
    }
}
evenNumber(1,100);