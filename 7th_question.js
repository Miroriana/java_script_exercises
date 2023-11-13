// 7th question
function miniElement(array) {
    let minValue = Math.min(...array);
    return minValue;
}
var array = [1, 2, 14, 20, 53, 37];
let resul = miniElement(array);
console.log("the minimum value in the array is:" + resul);
