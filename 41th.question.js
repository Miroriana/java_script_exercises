// Write a function that returns the first n elements of an array.
function firstElt(array,n){
    var firstElement=array.slice(0,n);
    console.log(firstElement);
}
const array=["a","b","c","d"];
const n=3;
firstElt(array,n);



