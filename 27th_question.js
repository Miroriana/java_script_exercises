// Write a function that reverses a string.

function reverse(array){
    var splited = array.split('');
    var reversed = splited.reverse('').join();
    return reversed;
}
var array= 'mignonne';
console.log(reverse(array));