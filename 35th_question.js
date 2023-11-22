// Write a function that counts the number of vowels in a string.
function count(string){
    var a=0;
    const v='aeoiuAEOIU';
    for (let char of string){
        if(v.includes(char)){
            a++;
        }
    }
    return a;
}
const string="mignonne";
console.log("the number of vowels in",string,"are",count(string));