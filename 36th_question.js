// Write a function that counts the number of consonants in a string.
function count(string){
    var a=0;
    const c="bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    for (let char of string){
        if(c.includes(char)){
            a++;
        }
    }
    return a;
}
const string="mignonne";
console.log(count(string));