// Write a function that generates a random number between a given range.

function random(min,max){
    // var randomFraction=Math.random();
    // var randomNumber= min +randomFraction *(max - min);
    //     randomNumber=Math.round(randomNumber);
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}
var min=2;
var max=50;
console.log(random(min,max));
